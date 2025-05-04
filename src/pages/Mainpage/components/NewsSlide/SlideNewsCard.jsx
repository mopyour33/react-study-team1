import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './SlideNewsCard.style.css';


const SlideNewsCard = ({ news }) => {
  const navigate = useNavigate();
    
  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3, padding: 1 ,'&:hover': { backgroundColor: '#e0e0e0', cursor: 'pointer'}}} 
        onClick={() => navigate(`/news/${news?.article_id}`,{ state: { news} })} className="card">
          <CardMedia component="img" height="180" image={news.image_url} alt={news.title} />
          <CardContent sx={{ padding: 1 }}>
            <Box display="flex" alignItems="center" mb={1}>
              <img src={news.source_icon} alt="{news.source_name}" width={20} height={20} style={{ marginRight: 1 }} />
              <Typography variant="subtitle2" color="text.secondary">{news.source_name}</Typography>
            </Box>
            <Typography sx={{
                display: '-webkit-box',
                WebkitLineClamp: 2,            // 2줄로 제한
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',            // 넘치는 텍스트 숨기기
                textOverflow: 'ellipsis',      // 넘치면 생략 부호 처리
                lineHeight: 1.5,               // 줄 간격 조정 (옵션)
                minHeight: 'calc(2* 1.5em)',  // 최소 높이를 2줄 높이로 설정
                textAlign: 'left'
              }} variant="subtitle1" fontWeight="bold" gutterBottom>
              {news.title}
            </Typography>
    
          </CardContent>
        </Card>
    
  );
};

export default SlideNewsCard;

