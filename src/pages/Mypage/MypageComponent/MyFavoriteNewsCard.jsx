import React from 'react';
import './MyFavoriteNewsCard.style.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import useUserInfo from '../../../stores/useUserInfo';
import { useNavigate } from 'react-router-dom';

const MyFavoriteNewsCard = ({ userId, newsItem, myNewsList }) => {

    const { updateUserInfo } = useUserInfo();
    const navigate=useNavigate();

    const handleClickLike = (e) => {
        e.preventDefault();
        const updatedList = myNewsList.filter((item) => item.article_id !== newsItem.article_id);
        updateUserInfo(userId, { myFavoriteNews: updatedList });
    }


    return (
            <div
                className="card"
                style={{ backgroundImage: `url(${newsItem.image_url})` }}
                onClick={() =>
                    navigate(`/news/${newsItem?.article_id}`, {
                      state: { article: newsItem },
                    })
                  }
            >
                <div className="overlay">
                    <div className="card-title">{newsItem.title}</div>
                    <div className="heart" onClick={(e) => { handleClickLike(e) }}>
                        <FaHeart color='red' />
                        {/* {like === true ? <FaHeart color='red' /> : <FaRegHeart color='white'/>} */}
                    </div>
                </div>
            </div>
    )
};

export default MyFavoriteNewsCard