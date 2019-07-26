// @flow

import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/styles";

type Props = {
  /** Classes attached with the component */
  classes: Object,
  /** Heading of the article */
  heading: string,
  /** Description of the article */
  description: string,
  /** Url of image */
  imageUrl: String,
  /** Function to call with button click */
  onClick: Function
};

const styles = {
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1
  }
};

/**
 * Custom MaterialUI Card component
 * Shows information about an Article
 */
const Article = ({
  classes,
  heading,
  imageUrl,
  description,
  onClick
}: Props) => {
  const { card, cardMedia, cardContent } = classes;

  return (
    <Card className={card}>
      <CardMedia className={cardMedia} image={imageUrl} />
      <CardContent className={cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography>{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          color="primary"
          fullWidth
          onClick={onClick}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(styles)(Article);
