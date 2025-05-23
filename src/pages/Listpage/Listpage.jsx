import React, { useState, useEffect } from "react";
import "./Listpage.style.css";
import { Container, Grid } from "@mui/material";
import ReactPaginate from "react-paginate";
import NewsCard from "./components/NewsCard/NewsCard";
import { useListNewsQuery } from "../../hooks/useList";
import { useNavigate, useLocation } from "react-router-dom";
import CategoryBar from "./components/CategoryBar/CategoryBar";

const itemsPerPage = 6;

const Listpage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [category, setCategory] = useState("all");
  const location = useLocation();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useListNewsQuery(category, {
    retry: 3,
    retryDelay: 2000,
  });

  const navigate = useNavigate();

  useEffect(() => {
    // URL 파라미터에서 category 값을 추출하여 상태로 설정
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get("category");
    if (categoryFromUrl) {
      setCategory(categoryFromUrl);
    }
  }, [location.search]);

  // 로딩 중
  if (isLoading) {
    return (
      <Container>
        <div className="detail-loading">
          <div className="loading-spinner"></div>
          <h2>기사를 불러오는 중</h2>
        </div>
      </Container>
    );
  }

  if (isError) {
    const errorMessage =
      error?.response?.data?.message || "알 수 없는 오류 발생";
    return (
      <Container>
        <div className="detail-loading">
          <h2>에러 발생: {errorMessage}</h2>
        </div>
      </Container>
    );
  }

  // 데이터가 없을 경우
  if (!data || data.length === 0) {
    return (
      <Container>
        <div className="detail-loading">
          <h2>뉴스 기사가 없습니다.</h2>
        </div>
      </Container>
    );
  }

  // 페이지네이션 계산
  const offset = currentPage * itemsPerPage;
  const paginatedArticles = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleCardClick = (id, article) => {
    if (!article) {
      console.error("Article is undefined");
      return;
    }
  
    navigate(`/news/${id}`, { state: { article } });
  };

  console.log("data", data);
  return (
    <Container sx={{ py: 4 }}>
      <CategoryBar
        selected={category}
        onSelect={(value) => {
          setCategory(value);
          setCurrentPage(0);
        }}
      />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ flexWrap: "wrap", gap: "24px" }}
      >
        {paginatedArticles.map((article, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <NewsCard
              image={article?.image_url || "default-image.jpg"}
              category={article?.category || []}
              title={article?.title || "제목 없음"}
              description={article?.description || "설명 없음"}
              onClick={() => handleCardClick(article?.article_id, article)}
              article={article}
            />
          </Grid>
        ))}
      </Grid>

      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="< 이전"
        nextLabel="다음 >"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
      />
    </Container>
  );
};

export default Listpage;
