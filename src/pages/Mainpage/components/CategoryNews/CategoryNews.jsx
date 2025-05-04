import React, { useState } from "react";
import { Row, Spinner, Alert } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import SlideNewsCard from "../NewsSlide/SlideNewsCard";
import "./CategoryNews.style.css";
import { useCategoryNewsQuery } from "../../../../hooks/useCategoryNews";
import CategoryList from "../../../../config/categories";

const CategoryNews = ({ category, index }) => {
  // console.log("카테고리 뉴스", category); // 카테고리 확인
  const searchCategory = category; // 카테고리 값
  const { data: categoryData, isError, isLoading, error } = useCategoryNewsQuery(searchCategory);

  const categoryLabel = CategoryList.find((cat) => cat.value === category)?.label || "알 수 없음"; // 없으면 "알 수 없음"

  // 로딩 중 처리
  if (isLoading) {
    return (
      <Row className="text-center">
        <Spinner animation="border" variant="primary" />
        <p>카테고리 뉴스를 불러오는 중입니다...</p>
      </Row>
    );
  }

  // 에러 처리
  if (isError) {
    return (
      <Row className="text-center">
        <Alert variant="danger">
          {error?.message || "카테고리 뉴스를 불러오는 데 문제가 발생했습니다."}
        </Alert>
      </Row>
    );
  }

  const responsive = {
    medium: {
      breakpoint: { max: 768, min: 0 }, // 큰 모바일, 작은 태블릿
      items: 1,
    },
    large: {
      breakpoint: { max: 1024, min: 768 }, // 일반 태블릿
      items: 2,
    },
    extraLarge: {
      breakpoint: { max: 1280, min: 1024 }, // 소형 데스크탑
      items: 3,
    },
    doubleXL: {
      breakpoint: { max: 1400, min: 1280 }, // 일반 데스크탑
      items: 3,
    },
    doubleXL2: {
      breakpoint: { max: 1536, min: 1400 }, // 일반 데스크탑
      items: 4,
    },
    tripleXL: {
      breakpoint: { max: 3000, min: 1536 }, // 대형 디스플레이
      items: 4,
    },
  };

  return (
    <Row>
      <header className="category-header">
        <strong>{categoryLabel}</strong>
      </header>
      <Carousel
        arrows
        infinite={true}
        centerMode={true}
        autoPlay
        autoPlaySpeed={5000}
        responsive={responsive}
        itemClass="p-1"
        containerClass="carousel-container h-[440px]"
      >
        {categoryData &&
          categoryData.map((news, index) => (
            <SlideNewsCard key={index} news={news}></SlideNewsCard>
          ))}
      </Carousel>
      <hr />
    </Row>
  );
};

export default CategoryNews;
