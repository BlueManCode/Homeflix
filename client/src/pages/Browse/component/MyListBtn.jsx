import React from 'react';
import './MyListBtn.css';

const MyListBtn = () => {
  return (
    <button className="preview-poster-content-btn-mylist">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg
          style={{ marginRight: '1vmin' }}
          viewBox="0 0 24 24"
          width="24"
          height="24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <div>My List</div>
      </div>
    </button>
  );
};

export default MyListBtn;
