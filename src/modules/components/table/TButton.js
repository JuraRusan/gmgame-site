import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TButton = ({ onClick, type, name }) => {
  return (
    <button className={classNames(styles["tableButton"])} onClick={onClick} type={type}>
      {name}
    </button>
  );
};

export default TButton;
