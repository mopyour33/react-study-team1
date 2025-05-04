import React from "react";
import { Button, Box } from "@mui/material";
import newsCategories from "../../../../config/categories"; // 카테고리 정보 import
import { useNavigate } from "react-router-dom"; // navigate를 위해 import
import "./CategoryBar.style.css";

const CategoryBar = ({ selected, onSelect }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onSelect(category); // 선택된 카테고리 상태 업데이트
    // 카테고리 정보와 함께 navigate로 '/news' 페이지로 이동
    navigate(`/news?category=${category}`);
  };

  return (
    <div className="category-bar">
      {newsCategories.map((cat) => (
        <button
          key={cat.value}
          className={`category-button ${selected === cat.value ? "active" : ""}`}
          onClick={() => handleCategoryClick(cat.value)} // 클릭 시 navigate
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
