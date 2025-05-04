import React, { useState } from 'react'
import "./Mainpage.style.css"
import 'react-multi-carousel/lib/styles.css';
import { Container } from 'react-bootstrap';
import TopNews from './components/TopNews/TopNews';
import CategoryNews from './components/CategoryNews/CategoryNews';

const Mainpage = () => {
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
}


export default Mainpage
