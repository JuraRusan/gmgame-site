import classNames from "classnames";
import React from "react";

import styles from "./One-item.module.scss"

const OneItemNone = () => {
  return (
    <div className={classNames(styles["oneItemBlock"])}>
      <div className={classNames(styles["photoItemNone"])}></div>
    </div>
  );
};

export default OneItemNone;
