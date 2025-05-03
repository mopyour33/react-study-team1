import React from 'react'
import { useInterestCategoryNews } from '../hooks/useInterestCategoryNew'
import MyInterestCategoryNewsList from './MyInterestCategoryNewsList';
import { Alert, Spinner } from 'react-bootstrap';
import useUserInfo from '../../../stores/useUserInfo';

const MyInterestCategoryNews = ({ userId, categoryCheckbox }) => {

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
        <div>
            <h2>내 관심사 기반 추천 뉴스</h2>
            <MyInterestCategoryNewsList
                myCategories={userInfo.cusInfo.categoryILike}
                categoryNewsList={myIntertestCategoryNewsData}
            />
        </div>
    )
}

export default MyInterestCategoryNews
