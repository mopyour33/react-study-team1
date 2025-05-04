import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MyFavoriteNewsCard from './MyFavoriteNewsCard';
import './MyFavoriteNewsList.style.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1
    }
};

const MyFavoriteNewsList = ({ userId, myNewsList }) => {
    console.log("ddd", myNewsList);


    const sampleNews = {
        article_id: "sample001",
        title: "이것은 테스트 뉴스 카드입니다.",
        image_url: "https://www.newscj.com/news/photo/202505/3264936_3327968_3538.jpg", // 테스트용 이미지
        link: "https://www.newscj.com/news/articleView.html?idxno=3264936"
    };

    return (

        <div className='favorite-carousel-wrapper'>
        <Carousel responsive={responsive}>
            {myNewsList.map((newsItem, index) => {
                return (
                    <MyFavoriteNewsCard key={index} userId={userId} newsItem={newsItem} myNewsList={myNewsList} />
                );
            })}
        </Carousel>
        </div>
    );
}

export default MyFavoriteNewsList
