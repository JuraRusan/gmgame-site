import React from "react";
import { Link } from "react-router-dom";

import "./Card.scss";

const Card = ({ name, info, image, to }) => {
  return (
    <Link to={to} className="card">
      <div className="card-info">
        <div className="card-header">
          <h1 className="name">{name}</h1>
        </div>
        <div className="card-main-info">
          <p className="info">{info}</p>
        </div>
        <div className="card-next">
          <span></span>
          <span>Подробнее</span>
          <span></span>
        </div>
      </div>
      <div className="photo">
        <img className="image" src={image} />
      </div>
    </Link>
  );
};

export default Card;
