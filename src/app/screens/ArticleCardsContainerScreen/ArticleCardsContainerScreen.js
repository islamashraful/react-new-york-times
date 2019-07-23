// @flow

import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Article from "./components/Article/Article";

const articles = [
  {
    heading: "heading 1",
    description: "this is a sample description"
  },
  {
    heading: "heading 2",
    description: "this is a sample description"
  },
  {
    heading: "heading 3",
    description: "this is a sample description"
  },
  {
    heading: "heading 4",
    description: "this is a sample description"
  }
];

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

/**
 * Articles Container Screen
 * A wrapper component for all articles
 */
const ArticlesContainerScreen = () => {
  const classes = useStyles();

  return (
    <>
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {articles.map((article, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Article
                  heading={article.heading}
                  description={article.description}
                  onClick={() => {
                    console.log("clicked", article);
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default ArticlesContainerScreen;
