import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MyNewsCard from './MyNewsCard';

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

const MyInterestCategoryNewsList = ({ myCategories, categoryNewsList }) => {
    return (
        <>
            {myCategories?.map((category, index) => {
                const targetcategoryNewsList = categoryNewsList.find((tagetNews) => tagetNews.category === category);

                return (
                    <div key={index} >
                        <h3>{category}</h3>
                        <Carousel responsive={responsive}>
                            {targetcategoryNewsList?.data.map((newsItem) => (
                                <>
                                <MyNewsCard newsList={newsItem} />
                                </>
                            ))}
                        </Carousel>
                    </div>
                )
            })}
        </>
    )
}

export default MyInterestCategoryNewsList
