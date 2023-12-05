import classNames from "classnames";
import React from "react";

import styles from "./MapInputLine.module.scss";

const MapInputLine = ({defaultValue, small, onChange}) => {
  return (
    <input
      className={classNames(styles["input_style"], {[styles["custom"]]: small === true})}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};

export default MapInputLine;
