import React from 'react';
import './NewsContent.style.css';

const NewsContent = ({ content, description, link }) => {
    // description에서 마지막 온점까지만 추출하는 함수
    const extractUntilLastPeriod = (text) => {
        if (!text) return '';

        // 문장 단위로 분리 (마침표, 느낌표, 물음표 등으로 끝나는 문장)
        const sentences = text.match(/[^.!?]+[.!?]+/g) || [];

        // 문장이 없으면 원본 텍스트 반환
        if (sentences.length === 0) return text;

        // 완전한 문장들만 합침
        return sentences.join(' ');
    };

    const renderContent = () => {
        if (content) {
            if (content === "ONLY AVAILABLE IN PAID PLANS") {
                return (
                    <div className="premium-content-message">
                        {link && (
                            <p>원본 기사에서 전체 내용을 확인하실 수 있습니다.</p>
                        )}
                    </div>
                );
            }

            // HTML 내용을 완전한 문장으로 처리
            // 일반 텍스트일 경우에만 적용
            if (typeof content === 'string' && !content.includes('<')) {
                const processedContent = processTextToCompleteSentences(content);
                return <div>{processedContent}</div>;
            }

            return <div dangerouslySetInnerHTML={{ __html: content }} />;
        } else if (description) {
            // 설명 텍스트를 완전한 문장으로 처리
            const processedDescription = processTextToCompleteSentences(description);
            return <p>{processedDescription}</p>;
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