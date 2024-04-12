import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TableMain = ({ children }) => {
  return <table className={classNames(styles["tableMain"])}>{children}</table>;
};

export default TableMain;
