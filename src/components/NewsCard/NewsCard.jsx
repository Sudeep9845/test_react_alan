import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import propTypes from "prop-types";
import { useStyles } from "./styles";

const NewsCard = ({
  article: { description, publishedAt, source, url, title, urlToImage },
  i,
}) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea href={url} target="_blank">
          <CardMedia
            className={classes.media}
            image={
              urlToImage ||
              "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732561.jpg?w=996&t=st=1717701390~exp=1717701990~hmac=f2fa1707b9374550d7b5a7b6a82f908f9ef128b43be92020816c8f0ec2e466c8"
            }
          />
          <div className={classes.details}>
            <Typography variants="body2" color="textSecondary" component="h2">
              {new Date(publishedAt).toDateString()}
            </Typography>
            <Typography variants="body2" color="textSecondary" component="h2">
              {source.name}
            </Typography>
          </div>
          <Typography className={classes.title} gutterBottom variants="h5">
            {title}
          </Typography>
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button size="small" color="primary">
              Learn More
            </Button>
            <Typography variant="h5" color="textSecondary">
              {i + 1}
            </Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
};

NewsCard.propTypes = {
  article: propTypes.object,
  i: propTypes.number,
};

export default NewsCard;
