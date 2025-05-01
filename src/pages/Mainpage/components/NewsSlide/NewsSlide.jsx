import React from 'react'
import { useTopNewsQuery } from '../../../../hooks/useTopNews';
import Carousel from 'react-multi-carousel';
import NewsCard from '../NewsCard/NewsCard';
import SlideNewsCard from './SlideNewsCard';


const NewSlide = ({newsList}) => {

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 640 }, items: 1 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 1 },
  };

  return (
    <div>
        

        <Carousel
            arrows
            infinite={true}
            centerMode={true}
            autoPlay
            autoPlaySpeed={6000}
            responsive={responsive}
            itemClass="movie-slider p-1"
            containerClass="carousel-container h-[440px]"    
            
            rtl={false}
          >        
              {newsList &&newsList.map((news, index)=>(
                <SlideNewsCard
                    key={index}
                    news={news}
                     ></SlideNewsCard>
                ))}

        </Carousel>
    </div>
  )
}

export default NewsSlide
