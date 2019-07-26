// @flow

import React from "react";
import moment from "moment";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import CardMedia from "@material-ui/core/CardMedia";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { ROUTES } from "../Router/Router.config";
import { AppHelper } from "../../helpers/AppHelper";

const publishedDateFormat = "MMMM D, YYYY";

type Props = {
  /** Classes attached with the component */
  classes: Object,
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
    minHeight: 400,
    backgroundSize: "auto",
    backgroundColor: "#F6F6F6"
  },
  chip: {
    margin: "10px 0"
  }
});

/**
 * Article Details Screen
 * Show details of an article
 */
const ArticleDetailsScreen = (props: Props) => {
  const { classes, location, history } = props;
  const { state: article } = location;

  if (!article) {
    history.push(ROUTES.ARTICLES_CONTAINER.path);
    return null;
  }

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
                  image={AppHelper.getImageUrl(
                    article.multimedia.length && article.multimedia[0].url
                  )}
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
};

export default withStyles(styles, { withTheme: true })(ArticleDetailsScreen);
