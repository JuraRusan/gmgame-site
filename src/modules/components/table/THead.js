import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const THead = ({ children }) => {
  return <thead className={classNames(styles["tableThead"])}>{children}</thead>;
};

export default THead;
