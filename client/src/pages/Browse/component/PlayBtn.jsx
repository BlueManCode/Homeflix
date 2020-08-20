import React from 'react';
import { useHistory } from 'react-router-dom';
import './PlayBtn.css';

const PlayBtn = ({ data }) => {
  const history = useHistory();
  return (
    <button
      className="preview-poster-content-btn-play"
      onClick={() => {
        if (data.type === 'movie') {
          history.push(`/watch?type=${data.type}&id=${data._id}`);
        } else {
          history.push(`/watch?type=${data.type}&id=${data._id}&s=1&e=1`);
        }
      }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          style={{ marginRight: '1vmin' }}
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="black"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polygon points="5 3 19 12 5 21 5 3"></polygon>
        </svg>
        <div>Play</div>
      </div>
    </button>
  );
};

export default PlayBtn;
