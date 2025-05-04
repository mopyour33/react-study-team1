import React from "react";
import { Card, CardContent, CardMedia, Typography, Box, IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useUserInfo from "../../../../stores/useUserInfo";
import useSignupStore from "../../../../stores/useSignupStore";
import "./NewsCard.style.css";

const NewsCard = ({ image, category, title, description, onClick, article }) => {
  const { getUserInfoById, addFavoriteNews, removeFavoriteNews } = useUserInfo();
  const { userId } = useSignupStore();
  const { userInfoList } = useUserInfo();
  const userInfo = userInfoList.find((user) => user.id === userId); 
  console.log("userInfo", userInfo);

  const favorites = getUserInfoById(userId)?.cusInfo?.myFavoriteNews || [];
  const isFavorited = favorites.some((item) => item.article_id === article.article_id);

  const toggleFavorite = (e) => {
    e.stopPropagation();
    console.log("toggleFavorite", userId, article.article_id);
    if (isFavorited) {
      removeFavoriteNews(userId, article.article_id);
    } else {
      addFavoriteNews(userId, article);  // Add the article to favorite list
    }
  };

  return (
    <Card sx={{ width: 345, borderRadius: 3, position: "relative", cursor: "pointer" }} onClick={onClick}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent sx={{ height: "calc(100% - 180px)", paddingBottom: "60px" }}>
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
      </CardContent>
      <Box sx={{ position: "absolute", bottom: 10, right: 10 }}>
        <IconButton onClick={toggleFavorite}>
          {isFavorited ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </Box>
    </Card>
  );
};

export default NewsCard;
