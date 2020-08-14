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
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '30%',
          }}>
          <img
            className="preview-poster-content-title"
            src="https://i.redd.it/4qu2clxb7ir11.png"></img>
          <div className="preview-poster-content-btn">
            <button>Play</button>
            <button>More Info</button>
          </div>
        </div>
      </div>
      <div className="preview-poster-blend"></div>
    </div>
  );
};

export default Preview;
