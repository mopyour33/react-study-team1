import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import { useDetailQuery } from '../../hooks/useDetail';
import "./Detailpage.style.css";

import NewsContent from './NewsContent';
import NewsImages from './NewsImages';
import KeywordSection from './KeywordSection';

// 임시 데이터
const mockNewsItems = [
  {
    id: "news-1",
    type: "article",
    sectionId: "technology",
    sectionName: "Technology",
    webPublicationDate: "2024-07-01T14:30:00Z",
    webTitle: "오픈AI, 딥 리서치 '라이트 버전' 출시…챗GPT 무료 사용자로 확대",
    webUrl: "https://www.theguardian.com/mock-article-1",
    fields: {
      headline: "오픈AI, 딥 리서치 '라이트 버전' 출시…챗GPT 무료 사용자로 확대",
      trailText: "오픈AI가 심층적인 정보 수집과 분석을 제공하는 도구인 챗GPT '딥 리서치'의 경량 버전을 도입했다.",
      body: "<p>오픈AI가 심층적인 정보 수집과 분석을 제공하는 도구인 챗GPT '딥 리서치'의 경량 버전을 도입했다.</p><p>오픈AI는 이번 업데이트를 통해 무료 사용자들도 제한된 범위 내에서 딥 리서치 기능을 이용할 수 있게 되었다고 밝혔다. 이는 GPT-4의 고급 기능을 더 많은 사용자에게 확대하려는 전략의 일환으로 보인다.</p><p>라이트 버전은 기존 딥 리서치와 비교해 검색 깊이와 결과 수에 제한이 있지만, 기본적인 정보 수집과 요약 기능은 그대로 유지된다.</p><h2>무료 사용자를 위한 혜택</h2><p>이번 조치로 유료 구독 없이도 ChatGPT를 통해 최신 정보에 접근할 수 있게 되었다. 오픈AI 관계자는 \"정보의 민주화를 위한 중요한 단계\"라고 의미를 부여했다.</p><p>업계 전문가들은 이번 결정이 경쟁이 치열해지는 AI 시장에서 사용자 기반을 확대하기 위한 전략적 움직임이라고 분석하고 있다.</p>",
      thumbnail: "https://via.placeholder.com/600x400?text=OpenAI+Deep+Research",
      altText: "오픈AI 딥 리서치 라이트 버전 출시 이미지"
    },
    tags: [
      { id: "tag1", webTitle: "오픈AI" },
      { id: "tag2", webTitle: "챗GPT" },
      { id: "tag3", webTitle: "인공지능" },
      { id: "tag4", webTitle: "딥 리서치" }
    ]
  },
  {
    id: "news-2",
    type: "article",
    sectionId: "business",
    sectionName: "Business",
    webPublicationDate: "2024-06-30T10:15:00Z",
    webTitle: "김지현 한국딥러닝 대표 \"비전 OCR은 돈 버는 AI…정확도·사업성 모두 잡아\"",
    webUrl: "https://www.theguardian.com/mock-article-2",
    fields: {
      headline: "김지현 한국딥러닝 대표 \"비전 OCR은 돈 버는 AI…정확도·사업성 모두 잡아\"",
      trailText: "OCR은 빠른 성과를 낼 수 있는 AI 기술이며, 한국딥러닝은 이를 통해 공급기업 테스트를 진행했다.",
      body: "<p>OCR은 빠른 성과를 낼 수 있는 AI 기술이며, 한국딥러닝은 이를 통해 공급기업 테스트를 진행했다.</p><p>김지현 한국딥러닝 대표는 최근 인터뷰에서 \"비전 OCR 기술은 단기간에 투자 대비 수익을 낼 수 있는 몇 안 되는 AI 기술 중 하나\"라고 강조했다.</p><p>한국딥러닝은 최근 금융, 의료, 제조 분야에서 OCR 기술을 활용한 프로젝트를 성공적으로 수행했으며, 특히 다양한 형태의 문서와 손글씨 인식에서 높은 정확도를 보이고 있다.</p><h2>OCR의 사업적 가치</h2><p>김 대표는 \"OCR 기술은 반복적인 문서 작업을 자동화함으로써 기업의 업무 효율성을 극대화하고, 인적 오류를 줄이는 데 크게 기여한다\"며 \"특히 금융권과 공공기관에서 높은 수요가 있다\"고 설명했다.</p><p>또한 한국딥러닝은 OCR 기술과 다른 AI 기술을 결합한 종합 솔루션을 개발 중이며, 이를 통해 더 넓은 시장을 공략할 계획이라고 밝혔다.</p>",
      thumbnail: "https://via.placeholder.com/600x400?text=Korean+DeepLearning+OCR",
      altText: "한국딥러닝 OCR 기술 이미지"
    },
    tags: [
      { id: "tag1", webTitle: "인공지능" },
      { id: "tag2", webTitle: "OCR" },
      { id: "tag3", webTitle: "비전AI" },
      { id: "tag4", webTitle: "한국딥러닝" }
    ]
  },
  {
    id: "news-3",
    type: "article",
    sectionId: "technology",
    sectionName: "Technology",
    webPublicationDate: "2024-06-28T09:45:00Z",
    webTitle: "박병훈 티쓰리큐 대표 \"기업 AI 도입은 '모델'로만 해결 안 돼…플랫폼으로 사용해야\"",
    webUrl: "https://www.theguardian.com/mock-article-3",
    fields: {
      headline: "박병훈 티쓰리큐 대표 \"기업 AI 도입은 '모델'로만 해결 안 돼…플랫폼으로 사용해야\"",
      trailText: "단순 모델이 아닌 플랫폼 접근으로 기업의 AI 활용성을 해결해야 한다고 강조한다.",
      body: "<p>단순 모델이 아닌 플랫폼 접근으로 기업의 AI 활용성을 해결해야 한다고 강조한다.</p><p>박병훈 티쓰리큐 대표는 최근 개최된 AI 포럼에서 \"많은 기업들이 AI 모델 도입에만 초점을 맞추고 있지만, 실제 비즈니스 가치를 창출하기 위해서는 플랫폼 접근이 필수적\"이라고 역설했다.</p><p>티쓰리큐는 최근 여러 산업 분야에 AI 플랫폼을 공급하며 성장하고 있으며, 특히 데이터 관리부터 모델 배포, 모니터링까지 전 과정을 아우르는 통합 솔루션으로 주목받고 있다.</p><h2>AI 플랫폼의 중요성</h2><p>박 대표는 \"개별 AI 모델은 특정 문제 해결에 유용할 수 있지만, 기업 전체의 디지털 전환을 위해서는 이들을 유기적으로 연결하고 관리할 수 있는 플랫폼이 필요하다\"고 설명했다.</p><p>또한 \"AI 시스템의 지속적인 성능 유지와 개선을 위해서는 모델 그 자체보다 이를 운영하는 플랫폼의 역할이 더 중요할 수 있다\"며 산업계의 인식 변화를 촉구했다.</p>",
      thumbnail: "https://via.placeholder.com/600x400?text=T3Q+AI+Platform",
      altText: "티쓰리큐 AI 플랫폼 이미지"
    },
    tags: [
      { id: "tag1", webTitle: "인공지능" },
      { id: "tag2", webTitle: "AI플랫폼" },
      { id: "tag3", webTitle: "기업솔루션" },
      { id: "tag4", webTitle: "티쓰리큐" }
    ]
  }
];

const Detailpage = () => {
  const { id: contentId } = useParams();
  const navigate = useNavigate();

  const getNewsItemById = () => {

    if (contentId === '1' || contentId === 'news-1') {
      return mockNewsItems[0];
    } else if (contentId === '2' || contentId === 'news-2') {
      return mockNewsItems[1];
    } else if (contentId === '3' || contentId === 'news-3') {
      return mockNewsItems[2];
    }

    return mockNewsItems[0];
  };

  const newsItem = getNewsItemById();
  const isLoading = false;
  const isError = false;
  const error = null;

  // URL 파라미터 확인
  useEffect(() => {
    console.log("--- Detailpage: contentId from useParams:", contentId);
    console.log("--- Selected news item:", newsItem.webTitle);
  }, [contentId, newsItem]);

  // 이전 페이지 돌아가기
  const handleGoBack = () => {
    navigate(-1);
  };

  // 1. 로딩 중일 때
  if (isLoading) {
    return (
      <div className="detail-loading">
        <div className="loading-spinner" />
        <h2>기사를 불러오는 중입니다 ... (ID: {contentId})</h2>
      </div>
    );
  }

  // 2. 에러 발생 시
  if (isError) {
    return (
      <div className="detail-error">
        <p>오류 메시지: {error?.message}</p>
        <button className="btn-go-back" onClick={handleGoBack}>
          이전 페이지로 돌아가기
        </button>
      </div>
    );
  }


  const newsNav = (
    <div className="news-navigation">
      <h3>다른 뉴스 보기:</h3>
      <div className="news-nav-buttons">
        {mockNewsItems.map((item, index) => (
          <button
            key={item.id}
            className={`news-nav-button ${newsItem.id === item.id ? 'active' : ''}`}
            onClick={() => navigate(`/news/${index + 1}`)}
          >
            {item.webTitle.substring(0, 15)}...
          </button>
        ))}
      </div>
    </div>
  );

  // 4. 디자인 확인용 렌더링
  return (
    <div className="detail-page">
      <button className="btn-go-back" onClick={handleGoBack}>
        ← 뒤로 가기
      </button>

      <div className="detail-container">
        <div className="detail-main-content">
          <NewsImages
            imageUrl={newsItem.fields?.thumbnail}
            caption={newsItem.fields?.altText || newsItem.webTitle}
          />

          <NewsContent
            content={newsItem.fields?.body}
            description={newsItem.fields?.trailText || ''}
            link={newsItem.webUrl}
          />

          <KeywordSection
            keywords={newsItem.tags?.map(tag => tag.webTitle) || []}
          />

          {newsNav}
        </div>
      </div>
    </div>
  );
};

export default Detailpage;