import React, { useEffect } from 'react';
import './MoviePlayer.css';

import MovieControls from './MovieControls';

const MoviePlayer = ({ playerData }) => {
  return (
    <div className="video-container">
      <video autoPlay muted src={playerData.link}></video>
      <MovieControls />
    </div>
  );
};

export default MoviePlayer;
