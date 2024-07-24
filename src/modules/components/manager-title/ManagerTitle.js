import classNames from "classnames";
import React from "react";

import styles from "./ManagerTitle.module.scss";

const ManagerTitle = ({ text, count = 0 }) => {
  return (
    <h4 className={classNames(styles["manager_title"])}>
      {text} - {count}
    </h4>
  );
};

export default ManagerTitle;
