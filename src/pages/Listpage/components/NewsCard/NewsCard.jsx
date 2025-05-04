import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./NewsCard.style.css";

const NewsCard = ({ image, category, title, description, onClick }) => {
  return (
    <Card sx={{ width: 345, borderRadius: 3 }} onClick={onClick}>
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
      </CardContent>
    </Card>
  );
};

export default NewsCard;
