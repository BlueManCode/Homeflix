import React, { useState } from 'react';
import './CardView.css';

import Card from './Card';
import CardPreviewModal from './CardPreviewModal';

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
      <CardPreviewModal showModel={showModel} modelData={modelData} />
    </div>
  );
};

export default CardView;
