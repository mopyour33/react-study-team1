import React from 'react'
import "./Listpage.style.css"
import { Container, Grid } from '@mui/material';
import NewsCard from './components/NewsCard/NewsCard';

const articles = [
  {
    image: 'https://via.placeholder.com/345x180',
    category: '오픈AI',
    title: "오픈AI, 딥 리서치 '라이트 버전' 출시…챗GPT 무료 사용자로 확대",
    description: "오픈AI가 심층적인 정보 수집과 분석을 제공하는 도구인 챗GPT '딥 리서치'의 경량 버전을 도입했다."
  },
  {
    image: 'https://via.placeholder.com/345x180',
    category: 'Enterprise & People',
    title: "김지현 한국딥러닝 대표 “비전 OCR은 돈 버는 AI…정확도·사업성 모두 잡아”",
    description: "OCR은 빠른 성과를 낼 수 있는 AI 기술이며, 한국딥러닝은 이를 통해 공급기업 테스트를 진행했다."
  },
  {
    image: 'https://via.placeholder.com/345x180',
    category: 'Enterprise & People',
    title: "박병훈 티쓰리큐 대표 “기업 AI 도입은 '모델'로만 해결 안 돼…플랫폼으로 사…”",
    description: "단순 모델이 아닌 플랫폼 접근으로 기업의 AI 활용성을 해결해야 한다고 강조한다."
  },
];

const Listpage = () => {
  console.log("Listpage articles:", articles);
  return (
    <Container sx={{py : 4}}>
      <Grid container spcing={3}>
        {articles.map((article, index) => {
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsCard {...article}/>
          </Grid>
        })}
      </Grid>
    </Container>
  )
}

export default Listpage
