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

type Props = {
  /** Classes attached with the component */
  classes: Object,
  /** History object for navigation */
  history: any
};

type State = {
  articles: ArticleType[]
};

const styles = theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
});

/**
 * Articles Container Screen
 * A wrapper component for all articles
 */
class ArticlesContainerScreen extends PureComponent<Props, State> {
  state = {
    articles: []
  };

  componentDidMount() {
    // TODO:: Move api key to env
    getArticles({
      "api-key": "16fI9yvA6UWGIfq4gzAyDSS36XSOIuGA",
      q: "mac-pro"
    }).then(data => {
      this.setState({ articles: data.docs });
    });
  }

  handleOnClick = (article: ArticleType) => {
    const newRoute = formatRoute(ROUTES.ARTICLE_DETAILS.path, {
      articleId: article._id.split("article/")[1]
    });

    this.props.history.push({
      pathname: newRoute,
      state: article
    });
  };

  handleInputChange = debounce((value: string) => {
    console.log(value);
  }, 500);

  render() {
    const { classes } = this.props;
    const { heroContent, cardGrid } = classes;
    const { articles } = this.state;

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
                <SearchBar onChnageInputValue={this.handleInputChange} />
              </Typography>
            </Container>
          </div>
          <Container className={cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {articles.map((article, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Article
                    imageUrl={AppHelper.getImageUrl(
                      article.multimedia.length && article.multimedia[0].url
                    )}
                    heading={article.headline.main}
                    description={article.lead_paragraph}
                    onClick={() => {
                      this.handleOnClick(article);
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ArticlesContainerScreen);
