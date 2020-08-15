import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div>
      <img
        onClick={() => {
          props.setmodelData(props.data);
          props.setshowModel(props.showModel ? false : true);
        }}
        className="card"
        src={props.data.card_poster}></img>
    </div>
  );
};

export default Card;
