import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div>
      <img className="card" src={props.poster}></img>
    </div>
  );
};

export default Card;
