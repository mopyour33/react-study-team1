import React from "react";
import { Alert, Col, Row, Container, Spinner } from "react-bootstrap";
import "./TopNews.style.css";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { useTopNewsQuery } from "../../../../hooks/useTopNews";

const TopNews = () => {
  const { data: topData = [], isLoading, isError, error } = useTopNewsQuery();  // 기본값 빈 배열로 설정
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>뉴스를 불러오는 중입니다...</p>
      </Container>
    );
  }

  if (isError) {
    return (
      <Container className="text-center">
        <p>뉴스를 불러오는 데 문제가 발생했습니다. {error?.message}</p>
      </Container>
    );
  }

  // topData가 비어 있을 경우 처리
  if (topData.length === 0) {
    return (
      <Container className="text-center">
        <Alert variant="danger">뉴스 데이터를 불러올 수 없습니다.</Alert>
      </Container>
    );
  }

  return (
    <div className="topnews">
      <Row>
        <Col xs={12}>
          <ResponsiveCarousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            emulateTouch={true}
            swipeable={true}
            dynamicHeight={false}
            transitionTime={0}
          >
            {topData.map((top, index) => (
              
              <div
                className="top-img-box"
                key={index}
                onClick={() =>
                  navigate(`/news/${top?.article_id}`, {
                    state: { article: top },
                  })
                }
              >
                <img
                  className="top-img"
                  src={top.image_url? top.image_url : "https://dummyimage.com/300x200/cccccc/ffffff&text=No+Image"} 
                  alt={`Carousel item ${index}`}
                />
                <div className="top-img-overay" />
                <div className="top-headline">헤드라인 뉴스</div>
                <div className="top-img-title">{top.title}</div>
              </div>
            ))}
          </ResponsiveCarousel>
        </Col>
      </Row>
      <Row>
        <header className="latest-header">
          <strong>최신 뉴스</strong>
        </header>
        <Col className="latest-col" xs={12} md={6}>
          {topData.slice(0, 5).map((latest, index) => (
            <Row
              key={index}
              className="mb-3"
              onClick={() =>
                navigate(`/news/${latest?.article_id}`, {
                  state: { article: latest },
                })
              }
            >
              <Col xs={2} className="text-center">
                <span className="rank-number">{index + 1}</span>
              </Col>
              <Col xs={10}>
                <span className="fs-6 fw-bold d-block">{latest.title}</span>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} md={6}>
          {topData.slice(5, 10).map((latest, index) => (
            <Row
              key={index + 5}
              className="mb-3"
              onClick={() =>
                navigate(`/news/${latest?.article_id}`, {
                  state: { article: latest },
                })
              }
            >
              <Col xs={2} className="text-center">
                <span className="rank-number">{index + 6}</span>
              </Col>
              <Col xs={10}>
                <span className="fs-6 fw-bold d-block">{latest.title}</span>
              </Col>
            </Row>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default TopNews;
