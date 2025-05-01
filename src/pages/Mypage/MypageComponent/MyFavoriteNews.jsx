import React from 'react';
import useUserInfo from '../../../stores/useUserInfo';
import MyFavoriteNewsList from './MyFavoriteNewsList';

const MyFavoriteNews = ({ userId }) => {

    const userInfoList = useUserInfo(state => state.userInfoList);

    const targetUser = userInfoList.find(user => user.id === userId);
    const myNewsList = targetUser?.cusInfo?.myFavoriteNews || [];

    return (
        <div>
            <h2>MyFavoriteNews</h2>
            <MyFavoriteNewsList userId={userId} myNewsList={myNewsList} />
        </div>
    )
}

export default MyFavoriteNews
