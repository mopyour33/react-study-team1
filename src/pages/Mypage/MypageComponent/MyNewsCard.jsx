import React from 'react';
import './MyNewsCard.style.css';

const MyNewsCard = ({ newsList }) => {
  return (
    <a
      href={newsList.link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <div
        className="card"
        style={{ backgroundImage: `url(${newsList.image_url})` }}
      >
        <div className="overlay">
          <div className="card-title">{newsList.title}</div>
        </div>
      </div>
    </a>
  );
};

export default MyNewsCard;