import React, { useState } from 'react'
import "./Mainpage.style.css"
import 'react-multi-carousel/lib/styles.css';
import { styled } from '@mui/material/styles';
import { Col, Container, Row } from 'react-bootstrap';
import { Box, Grid, Paper } from '@mui/material';
import TopNews from './components/TopNews/TopNews';
import CategoryNews from './components/CategoryNews/CategoryNews';


// 1. 주요뉴스 가져오기
// 2. 로그인 했다면 관심카테고리 배열로 가져오기
// 3. 관심카테고리 정보가 없다면 임의로 nation, business로 가져오기

const Mainpage = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const defaultCatefory = [{ "id": "sports", "name": "스포츠" }, { "id": "business", "name": "경제 / 비지니스" }]
  // 관심분야
  const [interestCategory, setInterestCategory] = useState(defaultCatefory)

  return (
    <Container>
      <TopNews></TopNews>
      <hr />
      {interestCategory && interestCategory.map((category, index) => (

        <CategoryNews
          category={category}
          key={index}
        />

      ))}

    </Container>

  );

  /*
   <Col xs={12} md={6}> 기사 제목 사진1기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 기사 제목 </Col>
    <Col xs={12} md={6}> 사진2</Col>
    <Col xs={12} md={6}> 사진3</Col>
    <Col xs={12} md={6}> 사진4</Col>
  */

}


export default Mainpage

/*
<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
    */
