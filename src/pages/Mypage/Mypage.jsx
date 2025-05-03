import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import "./Mypage.style.css";
import MypageProfile from './MypageComponent/MypageProfile';
import MyInterestCategoryNews from './MypageComponent/MyInterestCategoryNews';
import MyFavoriteNews from './MypageComponent/MyFavoriteNews';

const Mypage = ({userId}) => {
  const [selectedMenu, setSelectedMenu] = useState('profile');

  //카테고리 체크박스
  const categoryCheckbox = [
    {key:'top',value:'주요 뉴스'},
    {key:'world',value:'세계 뉴스'},
    {key:'nation',value:'국가/국내 뉴스'},
    {key:'business',value:'경제 / 비즈니스'},
    {key:'technology',value:'기술 / IT'},
    {key:'entertainment',value:'연예 / 문화'},
    {key:'sports',value:'스포츠'},
    {key:'science',value:'과학'},
    {key:'health',value:'건강 / 의료'}
  ];
  

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
              {selectedMenu === 'interest' && <div><MyInterestCategoryNews userId="AAA" categoryCheckbox={categoryCheckbox}/></div>}
              {selectedMenu === 'profile' && <div><MypageProfile userId="AAA" categoryCheckbox={categoryCheckbox}/></div>}
            </Box>

      </Box>
    </Box>
  );
};

export default Mypage;
