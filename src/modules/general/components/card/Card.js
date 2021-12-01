import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import "./Card.scss";

const Card = ({ name, info, image, to }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Link to={to} className="card" data-aos="fade-up">
      <div className="card-info">
        <div className="card-header">
          <h1 className="name">{name}</h1>
        </div>
        <div className="card-main-info">
          <p className="info">{info}</p>
        </div>
        <div className="card-next"></div>
      </div>
      <div className="photo">
        <img className="image" src={image} />
      </div>
    </Link>
  );
};

export default Card;
