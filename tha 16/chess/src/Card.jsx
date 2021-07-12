import React from "react";
import "./Card.css";
const Card = (props) => {
  const {name, image} = props;
  return (
    <div>
      <div className="card">
        <div className="card_image">
          <img src={'img/' + image} alt="" />
        </div>
        <div className="card_text">
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;