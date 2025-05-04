import React from 'react';
import './NewsContent.style.css';

const NewsContent = ({ content, description, link }) => {
    const extractUntilLastPeriod = (text) => {
        if (!text) return '';
        const lastPeriodIndex = text.lastIndexOf('.');
        return lastPeriodIndex !== -1 ? text.substring(0, lastPeriodIndex + 1) : text;
    };

    const renderContent = () => {
        const processedDescription = extractUntilLastPeriod(description);

        if (processedDescription) {
            return <p>{processedDescription}</p>;
        } else if (content && content !== "ONLY AVAILABLE IN PAID PLANS") {
            return <div dangerouslySetInnerHTML={{ __html: content }} />;
        } else {
            return <p className="no-content-message">이 기사의 본문 내용이 제공되지 않았습니다.</p>;
        }
    };

    return (
        <div className="news-content">
            <div className="news-content-body">
                {renderContent()}
            </div>

            {link && (
                <div className="news-original-link">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="original-link-button"
                    >
                        원본 기사 보기
                    </a>
                </div>
            )}
        </div>
    );
};

export default NewsContent;