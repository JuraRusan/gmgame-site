import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TableMain = (props) => {
  return (
    <table className={classNames(styles["tableMain"])}>{props.children}</table>
  );
};

export default TableMain;
