import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import "./Mypage.style.css";
import MypageProfile from './MypageComponet/MypageProfile';

const Mypage = () => {
  const [selectedMenu, setSelectedMenu] = useState('profile');
  

  return (
    <Box className="mypage-wrapper">
      <Box className="mypage-border">
          
          {/* 왼쪽 메뉴 영역 (1/3) */}
            <Box className="mypage-left">
              <Button 
                fullWidth 
                variant={selectedMenu === 'favorites' ? 'contained' : 'outlined'} 
                onClick={() => setSelectedMenu('favorites')}
                className="mypage-menu-button"
              >
                내가 찜한 뉴스 리스트
              </Button>
              <Button 
                fullWidth 
                variant={selectedMenu === 'interest' ? 'contained' : 'outlined'} 
                onClick={() => setSelectedMenu('interest')}
                className="mypage-menu-button"
              >
                내 주요 관심 뉴스 리스트
              </Button>
              <Button 
                fullWidth 
                variant={selectedMenu === 'profile' ? 'contained' : 'outlined'} 
                onClick={() => setSelectedMenu('profile')}
                className="mypage-menu-button"
              >
                내 정보 변경
              </Button>
            </Box>

          {/* 오른쪽 콘텐츠 영역 (2/3) */}
            <Box className="mypage-right">
              {selectedMenu === 'favorites' && <div>내가 찜한 뉴스 리스트 보여주기</div>}
              {selectedMenu === 'interest' && <div>내 주요 관심 뉴스 리스트 보여주기</div>}
              {selectedMenu === 'profile' && <div><MypageProfile /></div>}
            </Box>

      </Box>
    </Box>
  );
};

export default Mypage;
