import React, { useEffect, useState } from 'react';
import { Grid, Box, Button, IconButton } from '@mui/material';
import "./Mypage.style.css";
import MypageProfile from './MypageComponent/MypageProfile';
import MyInterestCategoryNews from './MypageComponent/MyInterestCategoryNews';
import MyFavoriteNews from './MypageComponent/MyFavoriteNews';
import MenuIcon from '@mui/icons-material/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserInfo from '../../stores/useUserInfo';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Mypage = () => {

  const location = useLocation();
  const userId = location.state?.userId;
  const navigate = useNavigate();
  const { userInfoList } = useUserInfo();

  const AuthenticationIdFlag = userInfoList.find(userInfo => userInfo.id === userId);

  console.log("dtetet", userInfoList);

  const [selectedMenu, setSelectedMenu] = useState('profile');
  const [isAuthPopupOpen, setIsAuthPopupOpen] = useState(false);

  useEffect(() => {
    if (!AuthenticationIdFlag) {
      setIsAuthPopupOpen(true);
    };

  }, [AuthenticationIdFlag])

  //카테고리 체크박스
  const categoryCheckbox = [
    { key: 'top', value: '주요 뉴스' },
    { key: 'world', value: '세계 뉴스' },
    { key: 'business', value: '경제/비즈니스' },
    { key: 'technology', value: '기술/IT' },
    { key: 'nation', value: '국가/국내 뉴스' },
    { key: 'entertainment', value: '연예/문화' },
    { key: 'sports', value: '스포츠' },
    { key: 'science', value: '과학' },
    { key: 'health', value: '건강/의료' }
  ];

  useEffect(() => {
    const handleChange = (e) => {
      setSelectedMenu(e.detail);
    };

    window.addEventListener("changeMypageMenu", handleChange);
    return () => window.removeEventListener("changeMypageMenu", handleChange);
  }, []);

  if (!AuthenticationIdFlag) {
    return (
      <Popup open={isAuthPopupOpen} modal closeOnDocumentClick={false} className="auth-popup">
        {(close) => (
          <div style={{ padding: '20px', textAlign: 'center' }}>
            <h4>회원정보 미등록<br />다시 회원가입 해주세요.</h4>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: '16px' }}
              onClick={() => {
                close();
                navigate("/");
              }}
            >
              확인
            </Button>
          </div>
        )}
      </Popup>
    );
  }

  return (
    <Box className="mypage-wrapper">
      <Box className="mypage-border">

        {/* 왼쪽 메뉴 영역 (1/3) */}
        <Box className='mypage-left'>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('favorites');
            }}
            className={`mypage-menu-button ${selectedMenu === 'favorites' ? 'selected' : ''}`}
          >
            내가 찜한 뉴스
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('interest');
            }}
            className={`mypage-menu-button ${selectedMenu === 'interest' ? 'selected' : ''}`}
          >
            내 카테고리 뉴스
          </Button>
          <Button
            fullWidth
            onClick={() => {
              setSelectedMenu('profile');
            }}
            className={`mypage-menu-button ${selectedMenu === 'profile' ? 'selected' : ''}`}
          >
            정보 변경
          </Button>
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
