import classNames from "classnames";
import React from "react";

import styles from "./MapTextareaLine.module.scss";

const MapTextareaLine = ({ defaultValue, onChange }) => {
  return <textarea className={classNames(styles["textarea_style"])} defaultValue={defaultValue} onChange={onChange} />;
};

export default MapTextareaLine;
