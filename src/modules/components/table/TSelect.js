import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TSelect = (props) => {
  return (
    <select className={classNames(styles["tableSelect"])} onChange={props?.onChange} value={props?.value}>{props?.name}</select>
  );
};

export default TSelect;
