import React, { useEffect } from 'react';
import './CardView.css';

import Card from './Card';

const CardView = (props) => {
  return (
    <div className="cardview">
      <div className="cardview-title">{props.title}</div>
      <div className="cardview-container">
        {props.list.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
};

export default CardView;
