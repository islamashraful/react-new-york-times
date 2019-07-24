// @flow

import React, { PureComponent } from "react";
import moment from "moment";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { ROUTES } from "../Router/Router.config";
import { type RouterMatchType } from "../../types/routerMatchType";

const publishedDateFormat = "MMMM D, YYYY";

type Props = {
  /** Classes attached with the component */
  classes: Object,
  /** router: url parameter */
  match: RouterMatchType,
  /** router: current url */
  location: any,
  /** router: router history */
  history: any
};

const styles = theme => ({
  toolbar: {
    paddingLeft: 0,
    margin: "15px 0"
  },
  toolbarTitle: {
    flex: 1
  },
  cardMedia: {
    minHeight: 400
  },
  chip: {
    margin: "10px 0"
  }
});

const article = {
  web_url: "https://www.nytimes.com/2019/06/27/technology/jony-ive-apple.html",
  snippet:
    "The executive played a key role in the iPod and iPhone during his 27 years at Apple, which will be a client of his new company.",
  lead_paragraph:
    "SAN FRANCISCO — Jony Ive, Apple’s chief design officer and one of the most influential executives in the history of the Silicon Valley giant, is leaving the company.",
  abstract:
    "The executive played a key role in the iPod and iPhone during his 27 years at Apple, which will be a client of his new company.",
  print_page: "3",
  blog: {},
  source: "The New York Times",
  multimedia: [
    {
      rank: 0,
      subtype: "xlarge",
      caption: null,
      credit: null,
      type: "image",
      url:
        "images/2019/06/27/business/27ive/dbd26e5006504aee855a20b4e77cb6ee-articleLarge.jpg",
      height: 400,
      width: 600,
      legacy: {
        xlarge:
          "images/2019/06/27/business/27ive/dbd26e5006504aee855a20b4e77cb6ee-articleLarge.jpg",
        xlargewidth: 600,
        xlargeheight: 400
      },
      subType: "xlarge",
      crop_name: "articleLarge"
    }
  ],
  headline: {
    main:
      "Jony Ive, Designer Who Made Apple Look Like Apple, Is Leaving to Start a Firm",
    kicker: null,
    content_kicker: null,
    print_headline: "Designer Who Made Apple Look Like Apple Is Leaving",
    name: null,
    seo: null,
    sub: null
  },
  pub_date: "2019-06-27T21:22:56+0000",
  document_type: "article",
  news_desk: "Business",
  section_name: "Technology"
};

/**
 * Article Details Screen
 * Show details of an article
 */
class ArticleDetailsScreen extends PureComponent<Props> {
  componentDidMount() {
    if (!this.props.location.state) {
      this.props.history.push(ROUTES.ARTICLES_CONTAINER.path);
    }
  }

  render() {
    const { classes } = this.props;

    const imageUrl =
      (article.multimedia[0] &&
        `https://static01.nyt.com/${article.multimedia[0].url}`) ||
      "";

    return (
      <Container maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Button
            size="medium"
            variant="contained"
            color="primary"
            href={ROUTES.ARTICLES_CONTAINER.path}
          >
            Articles
          </Button>
        </Toolbar>
        <main>
          <Grid container spacing={4} className={classes.cardGrid}>
            <Grid item xs={12} md={12}>
              <Card>
                <div>
                  <CardMedia
                    image={imageUrl}
                    title="Image title"
                    className={classes.cardMedia}
                  />
                  <CardContent>
                    <Typography component="h2" variant="h5">
                      {article.headline.main}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {moment(article.pub_date).format(publishedDateFormat)}
                    </Typography>
                    {article.section_name && (
                      <Chip
                        label={article.section_name}
                        className={classes.chip}
                        color="primary"
                      />
                    )}
                    <Typography variant="subtitle1" paragraph>
                      {article.lead_paragraph}
                    </Typography>
                    <Link variant="subtitle1" href={article.web_url}>
                      Continue reading…
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </Grid>
          </Grid>
        </main>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ArticleDetailsScreen);
