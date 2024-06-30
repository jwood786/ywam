import React from 'react';

const VideoBanner = () => {
  return (
    <div className="video-banner">
      <video autoPlay muted loop>
        <source src="/assets/videos/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBanner;