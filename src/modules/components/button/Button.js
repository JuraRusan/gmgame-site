import classNames from "classnames";
import React from "react";
import {Link} from 'react-router-dom';

import styles from "./Button.module.scss";

const Button = () => {
  return (
    <Link to={'/cab/profile'}>
      <button className={classNames(styles["buttonStyle"])}>Подать заявку</button>
    </Link>
  );
};

export default Button;
