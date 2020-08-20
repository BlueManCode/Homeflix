import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './MoviePlayer.css';

import MovieControls from './MovieControls';

const MoviePlayer = ({ playerData }) => {
  const history = useHistory();
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="video-container">
      <video ref={videoRef} autoPlay muted src={playerData.link}></video>
      <div>
        <svg
          style={{
            cursor: 'pointer',
            position: 'fixed',
            top: '0',
            left: '0',
            padding: '30px 0 0 20px',
          }}
          onClick={() => {
            history.push('/browse');
          }}
          viewBox="0 0 24 24"
          width="34"
          height="34"
          stroke="white"
          stroke-width="3"
          strokeLinecap="round"
          strokeLinejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
      </div>
      <MovieControls
        playerData={playerData}
        videoRef={videoRef}
        containerRef={containerRef}
      />
    </div>
  );
};

export default MoviePlayer;
