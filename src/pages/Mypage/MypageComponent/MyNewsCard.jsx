import React from 'react';
import './MyNewsCard.style.css';
import { useNavigate } from 'react-router-dom';

const MyNewsCard = ({ newsList }) => {

  console.log("123",newsList);
  const navigate = useNavigate();
  return (
    <div
      className="card"
      style={{ backgroundImage: `url(${newsList.image_url})` }}
      onClick={() =>
        navigate(`/news/${newsList?.article_id}`, {
          state: { article: newsList },
        })
      }
    >
      <div className="overlay">
        <div className="card-title">{newsList.title}</div>
      </div>
    </div>
  );
};

export default MyNewsCard;