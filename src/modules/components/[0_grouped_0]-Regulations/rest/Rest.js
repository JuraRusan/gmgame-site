import classNames from "classnames";
import React from "react";
import { regulationsAllDB } from "../../../pages/regulations/regulationsAllDB";

import styles from "../../../pages/regulations/Regulations.module.scss";

const Rest = () => {
  return (
    <div className={classNames(styles["regulations-list"])}>
      <p className={classNames(styles["one-content-p"])}>
        <span>1.</span>
        <label>{regulationsAllDB.fourInfo}</label>
      </p>
    </div>
  );
};

export default Rest;
