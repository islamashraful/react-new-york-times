// @flow

import React, { PureComponent } from "react";
import { formatRoute } from "react-router-named-routes";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Article from "./components/Article/Article";
import { withStyles } from "@material-ui/core/styles";
import { ROUTES } from "../Router/Router.config";
import { type ArticleType } from "../../types/articleType";
import SearchBar from "./components/SearchBar/SearchBar";
import debounce from "lodash/debounce";
import { getArticles } from "../../api/articleApi";
import { AppHelper } from "../../helpers/AppHelper";
import CircularProgress from "@material-ui/core/CircularProgress";
import { SortType } from "../../utils/sortConst";
import cx from "classnames";
import Pagination from "./components/Pagination/Pagination";

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
    this.getNewArticles();
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

  getNewArticles = (payload: Object) => {
    this.setState({ loading: true });

    getArticles(payload)
      .then(data => {
        this.setState({
          articles: data.docs,
          loading: false,
          searchBy: payload && payload.q ? payload.q : "",
          total: data.meta.hits > maxPage * 10 ? maxPage * 10 : data.meta.hits,
          currentPage:
            payload && payload.page + 1
              ? payload.page + 1
              : this.state.currentPage
        });
      })
      .catch(ex => {
        this.setState({ loading: false });
      });
  };

  handleInputChange = debounce((value: string) => {
    this.getNewArticles({ q: value, sort: this.state.sortBy, page: 0 });
  }, 500);

  handleDropdownValueChange = (value: $Values<typeof SortType>) => {
    this.setState({ sortBy: value });
    this.getNewArticles({ sort: value, q: this.state.searchBy, page: 0 });
  };

  handlePageChange = (page: number) => {
    console.log(page);
    this.getNewArticles({
      q: this.state.searchBy,
      sort: this.state.sortBy,
      page: page > maxPage ? maxPage : page - 1
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
