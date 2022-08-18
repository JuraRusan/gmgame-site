import React from "react";
import {Link} from 'react-router-dom';

import "./Button.scss";

const Button = () => {
  return (
    <Link to={'/cab/profile'}><button className="style-button font-custom-3">Подать заявку</button></Link>
  );
};

export default Button;
