import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import "./NewsCard.style.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NewsCard = ({
  image,
  category,
  title,
  description,
  onClick,
  article,
}) => {
  // const userId = "AAA";
  // const favorites = getUserInfoById(userId)?.cusInfo?.myFavoriteNews || [];

  // const isFavorited = favorites.some(
  //   (item) => item.article_id === article.article_id
  // );

  // const toggleFavorite = (e) => {
  //   e.stopPropagation();
  //   if (isFavorited) {
  //     removeFavoriteNews(userId, article.article_id);
  //   } else {
  //     addFavoriteNews(userId, article);
  //   }
  // };
  return (
    <Card
      sx={{ width: 345, borderRadius: 3, position: "relative" }}
      onClick={onClick}
    >
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent sx={{ height: "calc(100% - 180px)" }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            WebkitLineClamp: 2,
            textOverflow: "ellipsis",
          }}
        >
          {description}
        </Typography>
        {/* <Box sx={{ position: "absolute", bottom: 8, right: 8 }}>
          <IconButton onClick={toggleFavorite}>
            {isFavorited ? (
              <FavoriteIcon color="error" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </IconButton>
        </Box> */}
      </CardContent>
    </Card>
  );
};

export default NewsCard;
