import React from 'react'
import { useInterestCategoryNews } from '../hooks/useInterestCategoryNew'
import MyInterestCategoryNewsList from './MyInterestCategoryNewsList';
import { Alert, Spinner } from 'react-bootstrap';
import useUserInfo from '../../../stores/useUserInfo';
import './MyInterestCategoryNews.style.css';

const MyInterestCategoryNews = ({ userId }) => {

    //Znstand로 데이터 가져오기
    const getUserInfoById = useUserInfo(state => state.getUserInfoById);
    const userInfo = getUserInfoById(userId);

    const { data: myIntertestCategoryNewsData, isLoading, isError, error } = useInterestCategoryNews(userInfo.cusInfo.categoryILike);
    // console.log('awb', myIntertestCategoryNewsData);

    if (isLoading) {
        return (
            <div className='spinner-area'>
                <Spinner
                    animation='border'
                    variant='danger'
                    style={{ width: "5rem", height: "5rem" }}
                />
            </div>
        );
    }
    if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
    }
    return (
        <div className='my-interest-wrapper'>
            <h2 className='my-category-title'>내 카테고리 뉴스</h2>
            <MyInterestCategoryNewsList
                myCategories={userInfo.cusInfo.categoryILike}
                categoryNewsList={myIntertestCategoryNewsData}
            />
            <br/>
        </div>
    )
}

export default MyInterestCategoryNews
