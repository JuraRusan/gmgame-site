import classNames from "classnames";
import React from "react";
import { regulationsAllDB } from "../../../pages/regulations/regulationsAllDB";

import styles from "../../../pages/regulations/Regulations.module.scss";

const Whitelist = () => {
  return (
    <div className={classNames(styles["regulations-list"])}>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine1}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine2}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine3}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine4}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine5}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine6}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine7}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine8}</p>
      <p className={classNames(styles["one-content-p"])}>{regulationsAllDB.threeLine9}</p>
    </div>
  );
};

export default Whitelist;
