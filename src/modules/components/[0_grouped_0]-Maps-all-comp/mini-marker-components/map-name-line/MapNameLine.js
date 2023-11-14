import classNames from "classnames";
import React from "react";

import styles from "./MapNameLine.module.scss";

const MapNameLine = (props) => {
  return (
    <h5 className={classNames(styles["nameInput"])}>{props.label}</h5>
  );
};

export default MapNameLine;
