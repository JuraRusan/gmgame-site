import classNames from "classnames";
import React from "react";

import styles from "./MapInputLine.module.scss";

const MapInputLine = (props) => {
  return (
    <input
      className={classNames(styles["inputStyle"], {[styles["custom"]]: props.small === true})}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    />
  );
};

export default MapInputLine;
