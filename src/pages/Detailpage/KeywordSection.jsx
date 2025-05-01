import React from 'react';
import './KeywordSection.style.css';

const KeywordSection = ({ keywords }) => {
    if (!keywords || !Array.isArray(keywords) || keywords.length === 0) {
        return null;
    }

    return (
        <div className="keyword-section">
            <h3 className="keyword-heading">관련 키워드</h3>
            <div className="keyword-list">
                {keywords.map((keyword, index) => (
                    <span
                        key={index}
                        className="keyword-tag"
                        onClick={() => console.log(`검색: ${keyword}`)}
                    >
                        {keyword}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default KeywordSection;
