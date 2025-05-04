import React, { useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";
import "./TopNews.style.css";
import { useNavigate } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";
import { useTopNewsQuery } from "../../../../hooks/useTopNews";

const TopNews = () => {
    const navigate = useNavigate();
    const { data: topData, isLoading, isError, error } = useTopNewsQuery();
    console.log("탑 : ", topData)

  // hook 호출되지 않는 문제 확인 위해 최신기사는 임시로 셋팅 - 수정 예정
  const latestData = topData;

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
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
                  key={index}
                  src={top.image_url}
                  alt={`Carousel item ${index}`}
                />
                <div className="top-img-overay" />
                <div className="top-headline">헤드라인 뉴스</div>{" "}
                {/* 주황색 배경 추가 */}
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
        {/* 왼쪽 Col (index 0~4) */}
        <Col className="latest-col" xs={12} md={6}>
          {latestData.slice(0, 5).map((latest, index) => (
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
                <span className="rank-number">{index + 1}</span>{" "}
                {/* 순위 표시 */}
              </Col>
              {/* 기사 타이틀 */}
              <Col xs={10}>
                <span className="fs-6 fw-bold d-block">{latest.title}</span>
              </Col>
            </Row>
          ))}
        </Col>
        {/* 오른쪽 Col (index 5~9) */}
        <Col xs={12} md={6}>
          {latestData.slice(5, 10).map((latest, index) => (
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
                <span className="rank-number">{index + 6}</span>{" "}
                {/* 순위 표시 */}
              </Col>
              {/* 기사 타이틀 */}
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
