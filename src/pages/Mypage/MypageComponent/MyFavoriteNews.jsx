import React from 'react';
import useUserInfo from '../../../stores/useUserInfo';
import MyFavoriteNewsList from './MyFavoriteNewsList';
import './MyFavoriteNews.style.css';

const MyFavoriteNews = ({ userId }) => {

    const userInfoList = useUserInfo(state => state.userInfoList);

    const targetUser = userInfoList.find(user => user.id === userId);
    const myNewsList = targetUser?.cusInfo?.myFavoriteNews || [];

    return (
        <div className='my-favorite-wrapper'>
            <h2 className='my-favorite-title'> 내가 찜한 뉴스</h2>
            <MyFavoriteNewsList userId={userId} myNewsList={myNewsList} />
        </div>
    )
}

export default MyFavoriteNews
