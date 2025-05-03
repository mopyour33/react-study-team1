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
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const MyFavoriteNewsList = ({ userId, myNewsList }) => {
    console.log("ddd", myNewsList);

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
