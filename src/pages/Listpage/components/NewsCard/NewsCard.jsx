import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import "./NewsCard.style.css";

const NewsCard = ({ image, category, title, description }) => {
    console.log("NewsCard props:", { image, category, title, description });
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardMedia component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Box display="flex" alignItems="center" mb={1}>
          <img src="/logo.png" alt="logo" width={20} height={20} style={{ marginRight: 8 }} />
          <Typography variant="subtitle2" color="text.secondary">{category}</Typography>
        </Box>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
