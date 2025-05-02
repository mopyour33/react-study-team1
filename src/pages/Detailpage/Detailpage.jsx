import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDetailQuery } from '../../hooks/useDetail';
import "./Detailpage.style.css";


import NewsHeader from './NewsHeader';
import NewsContent from './NewsContent';
import NewsImages from './NewsImages';
import KeywordSection from './KeywordSection';


const Detailpage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError, error } = useDetailQuery(id);
  const [showShareModal, setShowShareModal] = useState(false);

  // 이전 페이지로 돌아가기
  const handleGoBack = () => {
    navigate(-1);
  };



  // 로딩 중일 때 표시할 내용
  if (isLoading) {
    return (
      <div className="detail-loading">
        <div className="loading-spinner"></div>
        <h2>기사를 불러오는 중</h2>
      </div>
    );
  }

  // 에러 발생 시 표시할 내용
  if (isError) {
    return (
      <div className="detail-error">
        <h2>기사를 불러오는 중 오류가 발생</h2>
        <p>{error?.message || "알 수 없는 오류가 발생"}</p>
        <button className="btn-go-back" onClick={handleGoBack}>
          이전 페이지로 돌아가기
        </button>
      </div>
    );
  }

  // 데이터가 없을 때
  if (!data || !data.results || data.results.length === 0) {
    return (
      <div className="detail-not-found">
        <h2>해당 뉴스를 찾을 수 없습니다</h2>
        <p>요청하신 기사가 더 이상 존재하지 않거나 이동되었을 수 있습니다.</p>
        <button className="btn-go-back" onClick={handleGoBack}>
          이전 페이지로 돌아가기
        </button>
      </div>
    );
  }


  const newsItem = data.results[0];

  const category = newsItem.category ? (
    Array.isArray(newsItem.category) ? newsItem.category[0] : newsItem.category
  ) : null;

  return (
    <div className="detail-page">
      <button className="btn-go-back" onClick={handleGoBack}>
        뒤로 가기
      </button>

      <div className="detail-container">
        <div className="detail-main-content">
          <NewsHeader
            newsItem={newsItem}
            onShareClick={toggleShareModal}
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

        <div className="detail-sidebar">
          <RelatedNews
            currentArticleId={id}
            currentCategory={category}
          />
        </div>
      </div>

      {showShareModal && (
        <ShareModal
          newsItem={newsItem}
          onClose={toggleShareModal}
        />
      )}
    </div>
  );
};

export default Detailpage;