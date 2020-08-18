import React from 'react';
import './MovieControls.css';

const MovieControls = () => {
  return (
    <div className="controls-container">
      <div className="progress-bar-container">
        <div style={{ width: '70%' }}>
          <div className="progress-bar-uncomplete"></div>
          <div className="progress-bar-complete"></div>
        </div>
        <span style={{ color: 'white' }}>00:00</span>
      </div>
      <div style={{ display: 'flex', width: '100%' }}>
        {/* Play/Pause Btn */}
        <svg
          className="controls-icon"
          fill="white"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        {/* 10sec Back Btn */}
        <svg
          className="controls-icon"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 8 8 12 12 16"></polyline>
          <line x1="16" y1="12" x2="8" y2="12"></line>
        </svg>
        {/* 10sec Forward Btn */}
        <svg
          className="controls-icon"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 16 16 12 12 8"></polyline>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        {/* Volume Btn */}
        <svg
          className="controls-icon"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        <div style={{ marginLeft: 'auto' }}></div>
        {/* Expand and Minimize */}
        <svg
          className="controls-icon"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round">
          <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
        </svg>
      </div>
    </div>
  );
};

export default MovieControls;
