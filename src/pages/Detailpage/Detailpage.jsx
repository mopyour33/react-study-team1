import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import "./Detailpage.style.css";

import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsImages from './NewsImages';
import KeywordSection from './KeywordSection';

const Detailpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  console.log('state:', state);

  const handleShareClick = () => {
    console.log('공유 기능은 현재 구현되지 않았습니다.');
    alert('공유 기능은 현재 개발 중입니다.');
  };

  if (!state) {
    return (
      <Container>
        <div className="detail-loading">
          <div className="loading-spinner"></div>
          <h2>기사를 불러오는 중</h2>
        </div>
      </Container>
    );
  }

  if (!state.news.title) {

    console.log(state)
    return (
      <Container>
        <div className="detail-not-found">
          <h2>해당 뉴스를 찾을 수 없습니다</h2>
          <p>요청하신 기사가 더 이상 존재하지 않습니다.</p>
          <button className="btn-go-back" onClick={() => navigate(-1)}>
            이전 페이지로 돌아가기
          </button>
        </div>
      </Container>
    );
  }


  const newsItem = state.news;

  return (
    <Container>
      <div className="detail-page">
        <button className="btn-go-back" onClick={() => navigate(-1)}>
          뒤로 가기
        </button>

        <div className="detail-container">
          <NewsHeader
            newsItem={newsItem}
            onShareClick={handleShareClick}
          />

          <NewsImages
            imageUrl={newsItem.image_url}
            caption={newsItem.image_caption || newsItem.title}
          />

          <NewsContent
            content={newsItem.content}
            description={newsItem.description}
            link={newsItem.link}
          />

          <KeywordSection keywords={newsItem.keywords} />
        </div>
      </div>
    </Container>
  );
};

export default Detailpage;