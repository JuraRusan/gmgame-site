import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const THead = (props) => {
  return (
    <thead className={classNames(styles["tableThead"])}>{props.children}</thead>
  );
};

export default THead;
