// @flow

import React, { PureComponent } from "react";
import cx from "classnames";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import Article from "./components/Article/Article";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { formatRoute } from "react-router-named-routes";
import SearchBar from "./components/SearchBar/SearchBar";
import { type ArticleType } from "../../types/articleType";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SortType } from "../../utils/sortConst";
import { ROUTES } from "../Router/Router.config";
import { AppHelper } from "../../helpers/AppHelper";
import Pagination from "./components/Pagination/Pagination";
import { getArticles, type ArticlePayload } from "../../api/articleApi";

/** Maximum page number that api supports for pagination */
const maxPage = 100;
/** Number of items per page */
const itemsPerPage = 10;
/** Character limit for displaying article heading */
const headingCharLimit = 150;
/** Character limit for displaying article description */
const descriptionCharLimit = 100;

type Props = {
  /** Classes attached with the component */
  classes: Object,
  /** History object for navigation */
  history: any
};

type State = {
  articles: ArticleType[],
  loading: boolean,
  sortBy: $Values<typeof SortType>,
  searchBy: string,
  total: number,
  currentPage: number
};

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  centeredContent: {
    textAlign: "center"
  },
  pagination: {
    padding: "20px 5px",
    "overflow-x": "auto",
    textAlign: "center"
  }
});

/**
 * Articles Container Screen
 * A wrapper component for all articles
 */
class ArticlesContainerScreen extends PureComponent<Props, State> {
  state = {
    articles: [],
    loading: false,
    sortBy: SortType.Newest,
    searchBy: "",
    total: 0,
    currentPage: 1
  };

  componentDidMount() {
    this.getNewArticles({ page: 0, sort: SortType.Newest, q: "" });
  }

  handleOnClick = (article: ArticleType) => {
    const splitted = article._id.split("/");
    const articleId = splitted[splitted.length - 1];

    const newRoute = formatRoute(ROUTES.ARTICLE_DETAILS.path, {
      articleId
    });

    this.props.history.push({
      pathname: newRoute,
      state: article
    });
  };

  getNewArticles = (payload: ArticlePayload) => {
    this.setState({ loading: true });

    getArticles(payload)
      .then(data => {
        const maxItemsForPagination = maxPage * itemsPerPage;

        this.setState({
          articles: data.docs,
          loading: false,
          searchBy: payload.q,
          sortBy: payload.sort,
          total:
            data.meta.hits > maxItemsForPagination
              ? maxItemsForPagination
              : data.meta.hits,
          currentPage: payload.page + 1
        });
      })
      .catch(ex => {
        this.setState({ loading: false });
      });
  };

  handleInputChange = debounce((value: string) => {
    const payload: any = { sort: this.state.sortBy, page: 0, q: value.trim() };

    this.getNewArticles(payload);
  }, 500);

  handleDropdownValueChange = (value: $Values<typeof SortType>) => {
    this.getNewArticles({ sort: value, page: 0, q: this.state.sortBy });
  };

  handlePageChange = (page: number) => {
    const { searchBy, sortBy } = this.state;

    this.getNewArticles({
      q: searchBy,
      sort: sortBy,
      page: page - 1
    });
  };

  render() {
    const { classes } = this.props;
    const { heroContent, cardGrid } = classes;
    const { articles, loading, sortBy, currentPage, total } = this.state;

    const notFoundMessage = (
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        No results found
      </Typography>
    );

    return (
      <>
        <main>
          <div className={heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                <SearchBar
                  sortBy={sortBy}
                  onChnageInputValue={this.handleInputChange}
                  onChangeDropdownValue={this.handleDropdownValueChange}
                />
              </Typography>
            </Container>
          </div>
          <Container
            className={cx({ [classes.centeredContent]: loading }, cardGrid)}
            maxWidth="md"
          >
            {loading ? (
              <CircularProgress className={classes.progress} />
            ) : (
              <>
                {!total && notFoundMessage}
                <Grid container spacing={4}>
                  {articles.map((article, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                      <Article
                        imageUrl={AppHelper.getImageUrl(
                          article.multimedia.length && article.multimedia[0].url
                        )}
                        heading={AppHelper.formatText(
                          article.headline.main,
                          headingCharLimit
                        )}
                        description={AppHelper.formatText(
                          article.lead_paragraph,
                          descriptionCharLimit
                        )}
                        onClick={() => {
                          this.handleOnClick(article);
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>
              </>
            )}

            {!loading && total > itemsPerPage && (
              <div className={classes.pagination}>
                <Pagination
                  totalItems={total}
                  itemsPerPage={itemsPerPage}
                  currentPage={currentPage}
                  onChange={this.handlePageChange}
                />
              </div>
            )}
          </Container>
        </main>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ArticlesContainerScreen);
