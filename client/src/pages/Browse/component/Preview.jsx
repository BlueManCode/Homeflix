import React, { useEffect, useRef, useState } from 'react';
import './Preview.css';

const Preview = () => {
  const posterUrl =
    'https://images.hdqwalls.com/download/captain-marvel-5k-movie-poster-4q-1920x1080.jpg';

  return (
    <div
      className="preview-poster"
      style={{
        backgroundImage: `url(${posterUrl})`,
        backgroundSize: 'cover',
      }}>
      <div className="preview-poster-content">
        <img
          className="test"
          src="https://www.pngfind.com/pngs/m/310-3100612_captain-marvel-logo-captain-marvel-title-vector-hd.png"></img>
        {/* <div className="preview-poster-content-title">Skyscraper</div> */}
        <div className="preview-poster-content-btn">
          <button>Play</button>
          <button>More Info</button>
        </div>
      </div>
      <div className="preview-poster-blend"></div>
    </div>
  );
};

export default Preview;
