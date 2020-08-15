import React from 'react';
import './MoreInfoBtn.css';

const MoreInfoBtn = () => {
  return (
    <button className="preview-poster-content-btn-moreinfo">
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
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <div>More Info</div>
      </div>
    </button>
  );
};

export default MoreInfoBtn;
