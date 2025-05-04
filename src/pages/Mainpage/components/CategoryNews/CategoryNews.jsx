import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import SlideNewsCard from "../NewsSlide/SlideNewsCard";
import "./CategoryNews.style.css";
import { useCategoryNewsQuery } from "../../../../hooks/useCategoryNews";

const CategoryNews = ({ category, index }) => {
  const searchCategory = category.id;
  const { data: categoryData } = useCategoryNewsQuery(searchCategory);

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
        <strong>{category.name}</strong>
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
