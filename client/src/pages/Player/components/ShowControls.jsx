import React, { useState, useEffect, useRef } from 'react';
import './ShowControls.css';

const ShowControls = ({
  videoRef,
  containerRef,
  playerData,
  season,
  episode,
}) => {
  const progressRef = useRef(null);
  const [isPaused, setisPaused] = useState(false);
  const [isFullScreen, setisFullScreen] = useState(false);
  const [width, setwidth] = useState(0);
  const [timeLeftText, settimeLeftText] = useState(null);

  useEffect(() => {
    videoRef.current.addEventListener('timeupdate', () => {
      try {
        const totalSecondsRemaining =
          videoRef.current.duration - videoRef.current.currentTime;

        const hrs = (totalSecondsRemaining / 3600)
          .toString()
          .split('.')[0]
          .padStart('2', '0');

        const min = ((totalSecondsRemaining - hrs * 3600) / 60)
          .toString()
          .split('.')[0]
          .padStart('2', '0');

        const sec = (totalSecondsRemaining - (hrs * 3600 + min * 60))
          .toString()
          .split('.')[0]
          .padStart('2', '0');

        settimeLeftText(
          `${hrs ? hrs : '00'}:${min ? min : '00'}:${sec ? sec : '00'}`,
        );
        setwidth(
          (videoRef.current.currentTime / videoRef.current.duration) * 100,
        );
      } catch (error) {}
    });

    videoRef.current.addEventListener('click', () => {
      handlePlayPause();
    });

    videoRef.current.addEventListener('dblclick', () => {
      handleFullScreen();
    });

    progressRef.current.addEventListener('click', async (event) => {
      try {
        const pos =
          (event.pageX -
            (progressRef.current.offsetLeft +
              progressRef.current.offsetParent.offsetLeft)) /
          progressRef.current.offsetWidth;
        videoRef.current.currentTime = pos * videoRef.current.duration;
      } catch (error) {}
    });
  }, []);

  function handlePlayPause() {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setisPaused(false);
    } else {
      videoRef.current.pause();
      setisPaused(true);
    }
  }

  function handleFullScreen() {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setisFullScreen(true);
    } else {
      document.exitFullscreen();
      setisFullScreen(false);
    }
  }

  return (
    <div className="controls-container">
      <div className="progress-bar-container">
        <div ref={progressRef} className="progress-bar-incomplete">
          <div
            style={{ width: `${width}%` }}
            className="progress-bar-complete"></div>
          <div className="progress-bar-complete-dot"></div>
        </div>
        <span>{timeLeftText}</span>
      </div>
      <div
        style={{
          display: 'flex',
          width: '100%',
        }}>
        {/* Play/Pause Btn */}
        {isPaused ? (
          <svg
            onClick={handlePlayPause}
            className="controls-icon"
            fill="white"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        ) : (
          <svg
            onClick={handlePlayPause}
            viewBox="0 0 24 24"
            className="controls-icon"
            fill="white"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16"></rect>
            <rect x="14" y="4" width="4" height="16"></rect>
          </svg>
        )}
        {/* 10sec Back Btn */}
        <svg
          onClick={() => {
            videoRef.current.currentTime -= 10;
          }}
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
          onClick={() => {
            videoRef.current.currentTime += 10;
          }}
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
        {/* title */}
        <div
          style={{
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyItems: 'center',
          }}>
          <span style={{ fontWeight: 'bold' }}>
            {playerData.title}
            {` : S${season < 10 ? '0' + ++season : ++season}E${
              episode < 10 ? '0' + ++episode : ++episode
            }`}
          </span>
        </div>
        {/* episode selector */}
        {/* Expand and Minimize */}
        {isFullScreen ? (
          <svg
            style={{ marginLeft: 'auto' }}
            onClick={handleFullScreen}
            className="controls-icon"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
          </svg>
        ) : (
          <svg
            style={{ marginLeft: 'auto' }}
            onClick={handleFullScreen}
            className="controls-icon"
            fill="none"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        )}
      </div>
    </div>
  );
};

export default ShowControls;
