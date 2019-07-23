// @flow

import React, { PureComponent } from "react";
import { type RouterMatchType } from "../../types/routerMatchType";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";

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
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  mainContent: {
    padding: theme.spacing(3, 2)
  },
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
});

/**
 * Article Details Screen
 * Show details of an article
 */
class ArticleDetailsScreen extends PureComponent<Props> {
  render() {
    const { classes } = this.props;
    const {
      toolbar,
      mainFeaturedPost,
      overlay,
      mainFeaturedPostContent,
      mainContent
    } = classes;

    return (
      <Container maxWidth="lg">
        <Toolbar className={toolbar}>
          <Button variant="outlined" size="small">
            Back to Articles
          </Button>
        </Toolbar>
        <main>
          <Paper className={mainFeaturedPost}>
            {
              <img
                style={{ display: "none" }}
                src="https://source.unsplash.com/user/erondu"
                alt="background"
              />
            }
            <div className={overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={mainFeaturedPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new
                    readers quickly and efficiently about what&apos;s most
                    interesting in this post&apos;s contents.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={mainContent}>
            <Typography variant="h5" component="h3">
              This is a sheet of paper.
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              232
            </Typography>
            <Typography variant="subtitle1" paragraph>
              des
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Continue reading...
            </Typography>
          </Paper>
        </main>
      </Container>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ArticleDetailsScreen);
