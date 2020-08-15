import React, { useState } from 'react';
import './CardView.css';

import Card from './Card';

const CardView = (props) => {
  const [showModel, setshowModel] = useState(false);
  const [modelData, setmodelData] = useState([]);

  return (
    <div className="cardview">
      <div className="cardview-title">{props.title}</div>
      <div className="cardview-container">
        {props.list.map((item, key) => (
          <Card
            key={key}
            data={item}
            showModel={showModel}
            setshowModel={setshowModel}
            setmodelData={setmodelData}
          />
        ))}
      </div>
      <div
        style={{
          display: `${showModel ? 'block' : 'none'}`,
          backgroundImage: `url("${modelData.preview_poster}"`,
          backgroundSize: 'cover',
        }}
        className="cardview-model">
        <div className="cardview-model-content">
          <div>
            <img
              className="cardview-model-title"
              src={modelData.titlePNG}></img>
            <div style={{ display: 'flex' }}>
              <div className="cardview-model-data">{modelData.year}</div>
              <div className="cardview-model-data">{modelData.rating}</div>
              <div className="cardview-model-data">{modelData.length}min.</div>
            </div>
            <div className="cardview-model-overview">{modelData.overview}</div>
            <div style={{ display: 'flex' }}>
              <button className="cardview-model-btn-play">Play</button>
              <button className="cardview-model-btn-mylist">My List</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardView;
