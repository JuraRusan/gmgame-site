import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TButton = (props) => {
  return (
    <button className={classNames(styles["tableButton"])} onClick={props?.onClick} type={props?.type}>{props?.name}</button>
  );
};

export default TButton;
