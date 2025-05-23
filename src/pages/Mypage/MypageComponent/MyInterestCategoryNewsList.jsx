import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MyNewsCard from './MyNewsCard';
import translateCategoryName from '../util/translateCategoryName';
import './MyInterestCategoryNewsList.style.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    }
};

const MyInterestCategoryNewsList = ({ myCategories, categoryNewsList }) => {
    return (
        <>
            {myCategories?.map((category, index) => {
                const targetcategoryNewsList = categoryNewsList.find((newsGroup) => newsGroup.category === category);

                if (!Array.isArray(targetcategoryNewsList?.data) || targetcategoryNewsList.data.length === 0) {
                    return (
                        <div className='category-block' key={index}>
                            <h3>{translateCategoryName(category, 'english', 'korean')}</h3>
                            <div className='category-block'>(데이터가 없어유 ㅠㅠ)</div>
                        </div>
                    );
                }

                return (
                    <div className='category-block' key={index} >
                        <h3>{translateCategoryName(category, 'english', 'korean')}</h3>
                        <Carousel responsive={responsive} containerClass="custom-carousel">
                            {targetcategoryNewsList?.data.map((newsItem, index) => (
                                <>
                                    <MyNewsCard newsList={newsItem} key={index} />
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
