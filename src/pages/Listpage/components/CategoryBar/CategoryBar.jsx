import React from "react";
import { Button, Box } from "@mui/material";
import newsCategories from "../../../../config/categories";
import "./CategoryBar.style.css";

const CategoryBar = ({ selected, onSelect }) => {
  return (
    <div className="category-bar">
      {newsCategories.map((cat) => (
        <button
          key={cat.value}
          className={`category-button ${selected === cat.value ? "active" : ""}`}
          onClick={() => onSelect(cat.value)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
