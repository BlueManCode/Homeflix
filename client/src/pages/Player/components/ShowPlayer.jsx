import React, { useRef, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import './ShowPlayer.css';

import ShowControls from './ShowControls';

const ShowPlayer = ({ playerData }) => {
  const history = useHistory();
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [season, setseason] = useState(0);
  const [episode, setepisode] = useState(0);

  const location = useLocation();

  useEffect(() => {
    setseason(location.search.split('&s=')[1].split('&e=')[0] - 1);
    setepisode(location.search.split('&e=')[1] - 1);
  }, []);

  return (
    <div ref={containerRef} className="video-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        src={playerData.seasons[season][episode]}></video>
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
      <ShowControls
        playerData={playerData}
        videoRef={videoRef}
        containerRef={containerRef}
        season={season}
        episode={episode}
      />
    </div>
  );
};

export default ShowPlayer;
