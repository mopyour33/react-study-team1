import React, { useState } from 'react';
import { Grid, Box, Button, IconButton } from '@mui/material';
import "./Mypage.style.css";
import MypageProfile from './MypageComponent/MypageProfile';
import MyInterestCategoryNews from './MypageComponent/MyInterestCategoryNews';
import MyFavoriteNews from './MypageComponent/MyFavoriteNews';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation } from 'react-router-dom';

const Mypage = () => {

  const location = useLocation();
  const userId = location.state?.userId;

  const [selectedMenu, setSelectedMenu] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  }

  //카테고리 체크박스
  const categoryCheckbox = [
    { key: 'top', value: '주요 뉴스' },
    { key: 'world', value: '세계 뉴스' },
    { key: 'nation', value: '국가/국내 뉴스' },
    { key: 'business', value: '경제/비즈니스' },
    { key: 'technology', value: '기술/IT' },
    { key: 'entertainment', value: '연예/문화' },
    { key: 'sports', value: '스포츠' },
    { key: 'science', value: '과학' },
    { key: 'health', value: '건강/의료' }
  ];


  return (
    <Box className="mypage-wrapper">
      <Box className="mypage-border">

        {/* 모바일 전용 메뉴 버튼 */}
        <Box className="mypage-mobile-menu-toggle">
          <IconButton onClick={toggleMobileMenu} >
            <MenuIcon />
          </IconButton>
        </Box>

        {/* 왼쪽 메뉴 영역 (1/3) */}
        <Box className={`mypage-left ${isMobileMenuOpen ? 'open' : ''}`}>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('favorites');
              setIsMobileMenuOpen(false)
            }}
            className={`mypage-menu-button ${selectedMenu === 'favorites' ? 'selected' : ''}`}
          >
            내가 찜한 뉴스
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('interest');
              setIsMobileMenuOpen(false);
            }}
            className={`mypage-menu-button ${selectedMenu === 'interest' ? 'selected' : ''}`}
          >
            내 카테고리 뉴스
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('profile');
              setIsMobileMenuOpen(false);
            }}
            className={`mypage-menu-button ${selectedMenu === 'profile' ? 'selected' : ''}`}
          >
            정보 변경
          </Button>

          {/* ✅ 모바일 하단 닫기 버튼 추가 */}
          {isMobileMenuOpen && (
            <Button
              className="mobile-menu-close-button"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              메뉴 닫기
            </Button>
          )}
        </Box>

        {/* 오른쪽 콘텐츠 영역 (2/3) */}
        <Box className="mypage-right">
          {selectedMenu === 'favorites' && <div><MyFavoriteNews userId={userId} /></div>}
          {selectedMenu === 'interest' && <div><MyInterestCategoryNews userId={userId} categoryCheckbox={categoryCheckbox} /></div>}
          {selectedMenu === 'profile' && <div><MypageProfile userId={userId} categoryCheckbox={categoryCheckbox} /></div>}
        </Box>

      </Box>
    </Box>
  );
};

export default Mypage;
