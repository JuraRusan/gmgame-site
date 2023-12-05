import classNames from "classnames";
import React from "react";

import styles from "./MapNameLine.module.scss";

const MapNameLine = ({label}) => {
  return (
    <h5 className={classNames(styles["name_parameters"])}>{label}</h5>
  );
};

export default MapNameLine;
