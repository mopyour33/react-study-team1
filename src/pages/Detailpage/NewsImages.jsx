import React from 'react';
import './NewsImages.style.css';

const NewsImages = ({ imageUrl, caption }) => {

    if (!imageUrl) {
        return null;
    }

    return (
        <div className='news-image-container'>
            <figure className='news-image'>
                <img
                    src={imageUrl}
                    alt={caption || "뉴스 이미지"}
                    className='news-image-main' />
                {caption && (
                    <figcaption className="news-image-caption">
                        {caption}
                    </figcaption>
                )}
            </figure>
        </div>
    )
}

export default NewsImages;