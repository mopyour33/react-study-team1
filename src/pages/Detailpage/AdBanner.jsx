import React from 'react';
import "./AdBanner.style.css";

const AdBanner = () => {
    return (
        <div className="ad-container">
            <div className="ad-item ad-item-1">
                <img
                    src="https://import.cdn.thinkific.com/523761/iKH7REn0S46Vsba5DDaP_%EA%B9%9C%EB%B0%95%ED%9A%A8%EA%B3%BC.gif?width=380"
                    alt="광고 GIF"
                    className="ad-image"
                />
            </div>
            <div className="ad-item ad-item-2">
                <img
                    src="https://search.pstatic.net/sunny/?src=https%3A%2F%2Fyt3.googleusercontent.com%2Fytc%2FAIdro_n_ZdemM8FoHJ2K2vTVGjpwa6sBYXiI95v7NalwD_G-oQ%3Ds900-c-k-c0x00ffffff-no-rj&type=sc960_832"
                    alt="유튜브 채널 광고"
                    className="ad-image"
                />
            </div>
            <div className="ad-item ad-item-3">
                <img
                    src="https://import.cdn.thinkific.com/523761/courses/2296383/JmapfTQEi6fHpVV0AdpR_nodejs%20%EB%B0%B0%EB%84%88.jpg?width=380"
                    alt="Node.js 강의"
                    className="ad-image"
                />
            </div>
        </div>
    );
};

export default AdBanner;