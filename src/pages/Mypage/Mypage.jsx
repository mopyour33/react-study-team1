import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import "./Mypage.style.css";
import MypageProfile from './MypageComponent/MypageProfile';
import MyInterestCategoryNews from './MypageComponent/MyInterestCategoryNews';
import MyFavoriteNews from './MypageComponent/MyFavoriteNews';

const Mypage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');
  

  return (
    <Box className="mypage-wrapper">
      <Box className="mypage-border">
          
          {/* 왼쪽 메뉴 영역 (1/3) */}
            <Box className="mypage-left">
              <Button 
                fullWidth 
                onClick={() => setSelectedMenu('favorites')}
                className={`mypage-menu-button ${selectedMenu === 'favorites' ? 'selected' : ''}`}
              >
                내가 찜한 뉴스 리스트
              </Button>
              <Button 
                fullWidth  
                onClick={() => setSelectedMenu('interest')}
                className={`mypage-menu-button ${selectedMenu === 'interest' ? 'selected' : ''}`}
              >
                내 주요 관심 뉴스 리스트
              </Button>
              <Button 
                fullWidth 
                onClick={() => setSelectedMenu('profile')}
                className={`mypage-menu-button ${selectedMenu === 'profile' ? 'selected' : ''}`}
              >
                내 정보 변경
              </Button>
            </Box>

          {/* 오른쪽 콘텐츠 영역 (2/3) */}
            <Box className="mypage-right">
              {selectedMenu === 'favorites' && <div><MyFavoriteNews userId="AAA"/></div>}
              {selectedMenu === 'interest' && <div><MyInterestCategoryNews userId="AAA"/></div>}
              {selectedMenu === 'profile' && <div><MypageProfile userId="AAA" /></div>}
            </Box>

      </Box>
    </Box>
  );
};

export default Mypage;
