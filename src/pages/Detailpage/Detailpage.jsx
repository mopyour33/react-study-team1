import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDetailQuery } from '../../hooks/useDetail';
import { Container } from 'react-bootstrap';
import "./Detailpage.style.css";

import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsImages from './NewsImages';
import KeywordSection from './KeywordSection';

const Detailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: Detail } = useDetailQuery(id);


  const handleShareClick = () => {
    console.log('공유 기능은 현재 구현되지 않았습니다.');
    alert('공유 기능은 현재 개발 중입니다.');
  };

  
  if (!Detail) {
    return (
      <Container>
        <div className="detail-loading">
          <div className="loading-spinner"></div>
          <h2>기사를 불러오는 중</h2>
        </div>
      </Container>
    );
  }


  if (!Detail || !Detail.results || Detail.results.length === 0) {
    return (
      <Container>
        <div className="detail-not-found">
          <h2>해당 뉴스를 찾을 수 없습니다</h2>
          <p>요청하신 기사가 더 이상 존재하지 않습니다다.</p>
          <button className="btn-go-back" onClick={() => navigate(-1)}>
            이전 페이지로 돌아가기
          </button>
        </div>
      </Container>
    );
  }

  const newsItem = Detail.results[0];

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