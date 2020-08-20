import React, { useRef } from 'react';
import './MoviePlayer.css';

import MovieControls from './MovieControls';

const MoviePlayer = ({ playerData }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="video-container">
      <video ref={videoRef} autoPlay muted src={playerData.link}></video>
      <MovieControls videoRef={videoRef} containerRef={containerRef} />
    </div>
  );
};

export default MoviePlayer;
