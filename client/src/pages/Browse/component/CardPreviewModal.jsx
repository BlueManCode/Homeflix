import React, { useState } from 'react';
import './CardPreviewModal.css';

import PlayBtn from './PlayBtn';
import MyListBtn from './MyListBtn';

const CardPreviewModal = ({ showModel, modelData }) => {
  return (
    <div
      style={{
        display: `${showModel ? 'block' : 'none'}`,
        backgroundImage: `url("${modelData.preview_poster}"`,
        backgroundSize: 'cover',
      }}
      className="cardview-model">
      <div className="cardview-model-content">
        <div>
          <img className="cardview-model-title" src={modelData.titlePNG}></img>
          <div style={{ display: 'flex' }}>
            <div className="cardview-model-data">{modelData.year}</div>
            <div className="cardview-model-data">{modelData.rating}</div>
            <div className="cardview-model-data">{modelData.length}min</div>
            {modelData.seasons ? (
              <div className="cardview-model-data">
                {modelData.seasons.length} Seasons
              </div>
            ) : null}
          </div>
          <div className="cardview-model-overview">{modelData.overview}</div>
          <div style={{ display: 'flex', marginTop: '2vmin' }}>
            <PlayBtn data={modelData} />
            <MyListBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPreviewModal;
