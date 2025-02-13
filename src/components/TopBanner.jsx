import React from 'react';
import topBannerImg from '../assets/topBanner.jpg'; // Replace with your image path

const TopBanner = () => {
  return (
    <div className="top-banner-container">
      <img src={topBannerImg} alt="Top Banner" className="top-banner-image" />
    </div>
  );
};

export default TopBanner;
