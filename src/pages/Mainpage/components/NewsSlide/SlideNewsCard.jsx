import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";


const SlideNewsCard = ({ news }) => {
  const navigate = useNavigate();
    
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }} onClick={() => navigate(`/news/${news?.article_id}`)} className="card">
          <CardMedia component="img" height="180" image={news.image_url} alt={news.title} />
          <CardContent>
            <Box display="flex" alignItems="center" mb={1}>
              <img src={news.source_icon} alt="logo" width={20} height={20} style={{ marginRight: 8 }} />
              <Typography variant="subtitle2" color="text.secondary">{news.pubDate.substr(0, 10)}</Typography>
            </Box>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              {news.title}
            </Typography>
    
          </CardContent>
        </Card>
  );
};

export default SlideNewsCard;
