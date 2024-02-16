import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TSelect = ({onChange, value, name}) => {
  return (
    <select className={classNames(styles["tableSelect"])} onChange={onChange} value={value}>{name}</select>
  );
};

export default TSelect;
