import React from 'react'
import "./Mainpage.style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from 'react-bootstrap';


// 1. 카테고리별 뉴스 가져오기
const Mainpage = () => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 5 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 3 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };


  return (
    <div>   
      <Container>
        <Row>
          <Col>  
            <p className="movie-slider-title mb-4">카테고리 1</p>
            <Carousel
              arrows
              infinite={true}
              centerMode={true}
              autoPlay
              autoPlaySpeed={3000}
              responsive={responsive}
              itemClass="carousel-item-spacing"            
            >
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
            </Carousel>
          </Col>
          </Row>            
      </Container>
    </div>
      
    
  )
}

export default Mainpage
