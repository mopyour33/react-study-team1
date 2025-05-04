import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import "./Detailpage.style.css";

import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsImages from './NewsImages';
import KeywordSection from './KeywordSection';
import AdBanner from './AdBanner';


const Detailpage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state } = location;

  console.log('state:', state);

  const handleShareClick = () => {
    const shareData = {
      title: newsItem.title,
      text: newsItem.description || '',
      url: window.location.href
    };

    if (navigator.share && navigator.canShare(shareData)) {
      // Web Share API가 지원되는 경우
      navigator.share(shareData)
        .then(() => console.log('공유 완료'))
        .catch((error) => {
          console.error('공유 중 오류 발생:', error);
          fallbackShare();
        });
    } else {
      // Web Share API가 지원되지 않는 경우
      fallbackShare();
    }
  };

  const fallbackShare = () => {
    // URL을 클립보드에 복사하는 대체 공유 방법
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('링크가 클립보드에 복사되었습니다.'))
      .catch(err => console.error('클립보드 복사 실패:', err));
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

  if (!state.article) {
    console.log('article이 없음:', state);
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

  const newsItem = state.article;

  if (!newsItem.title) {
    console.log('title이 없음:', newsItem);
    return (
      <Container>
        <div className="detail-not-found">
          <h2>해당 뉴스를 찾을 수 없습니다</h2>
          <p>요청하신 기사의 제목 정보가 없습니다.</p>
          <button className="btn-go-back" onClick={() => navigate(-1)}>
            이전 페이지로 돌아가기
          </button>
        </div>
      </Container>
    );
  }

  return (
    <Container fluid className="px-0">
      <Row className="mx-0">
        <Col md={8} className="px-0 article-column">
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
        </Col>
        <Col md={4} className="ad-column">
          <AdBanner />
        </Col>
      </Row>
    </Container>
  );
};

export default Detailpage;