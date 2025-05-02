import React from 'react';
import './NewsHeader.style.css';

const NewsHeader = ({ newsItem, onShareClick }) => {
    // 날짜 포맷팅
    const formatDate = (dateString) => {
        if (!dateString) return '';

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(dateString).toLocaleDateString('ko-KR', options);
    };

    // 카테고리 문자열 변환
    const getCategoryString = (categories) => {
        if (!categories) return "";
        return Array.isArray(categories) ? categories.join(', ') : categories;
    };

    return (
        <div className="news-header">
            {newsItem.category && (
                <div className="news-category">
                    {getCategoryString(newsItem.category)}
                </div>
            )}


            <h1 className="news-title">{newsItem.title}</h1>


            {newsItem.description && (
                <div className="news-description">
                    {newsItem.description}
                </div>
            )}


            <div className="news-meta">
                <div className="news-meta-left">

                    {newsItem.creator && (
                        <div className="news-author">
                            By {Array.isArray(newsItem.creator) ? newsItem.creator.join(', ') : newsItem.creator}
                        </div>
                    )}


                    {newsItem.pubDate && (
                        <div className="news-date">
                            {formatDate(newsItem.pubDate)}
                        </div>
                    )}


                    {newsItem.source_id && (
                        <div className="news-source">
                            출처: {newsItem.source_id}
                        </div>
                    )}
                </div>


                <div className="news-meta-right">
                    <button
                        className="news-share-btn"
                        onClick={onShareClick}
                        aria-label="뉴스 공유하기"
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                        <span>공유</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsHeader;