import React, { useState, useEffect } from "react";
import "./Mainpage.style.css";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import TopNews from "./components/TopNews/TopNews";
import CategoryNews from "./components/CategoryNews/CategoryNews";
import CategoryBar from "./components/CategoryBar/CategoryBar";
import useUserInfo from "../../stores/useUserInfo";
import useSignupStore from "../../stores/useSignupStore";

const Mainpage = () => {
  const { getUserInfoById } = useUserInfo();
  const { userId } = useSignupStore();

  const defaultCategory = [
    { value: "sports", label: "스포츠" },
    { value: "business", label: "경제 / 비지니스" },
  ];
  // 관심분야
  const [interestCategory, setInterestCategory] = useState(defaultCategory);
  const [category, setCategory] = useState("all");

  useEffect(() => {
    const isLogin = localStorage.getItem("isLoggedIn");
    console.log("isLogin", isLogin);
    if (isLogin && userId) {
      const user = getUserInfoById(userId);
      console.log(user);
      // 유저 정보가 정상적으로 반환된 경우에만 업데이트
      if (user && user.cusInfo && user.cusInfo.categoryILike) {
        setInterestCategory(user.cusInfo.categoryILike);
      }
    }
  }, [userId, getUserInfoById]);  // userId가 변경될 때마다 실행
  
  return (
    <Container>
      <CategoryBar
        selected={category} // 선택된 카테고리를 전달
        onSelect={(value) => {
          setCategory(value); // 카테고리 변경 시 상태 업데이트
        }}
      />
      <TopNews />
      <hr />
      {interestCategory && 
        interestCategory.map((interestCategory, index) => (
          <CategoryNews category={interestCategory} key={index} />
        ))}
    </Container>
  );
};

export default Mainpage;
