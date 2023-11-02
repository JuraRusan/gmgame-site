import classNames from "classnames";
import React from "react";
import {regulationsAllDB} from "../../../pages/regulations/regulationsAllDB";

import styles from "../../../pages/regulations/Regulations.module.scss"

const GeneralRules = () => {
  return (
    <div className={classNames(styles["regulations-list"])}>
      <p className={classNames(styles["one-content-p"])}>
        <span>1.</span>
        <label>{regulationsAllDB.oneRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>2.</span>
        <label>{regulationsAllDB.twoRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>3.</span>
        <label>{regulationsAllDB.threeRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>4.</span>
        <label>{regulationsAllDB.fourRegulation}
          <ul className={classNames(styles["content-ul"])}>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.fourOneRegulation}</li>
            <li className={classNames(styles["ul-content-li"])}>{regulationsAllDB.fourTwoRegulation}</li>
          </ul>
        </label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>5.</span>
        <label>{regulationsAllDB.fiveRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>6.</span>
        <label>{regulationsAllDB.sixRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>7.</span>
        <label>{regulationsAllDB.sevenRegulation}</label>
      </p>
      <p className={classNames(styles["one-content-p"])}>
        <span>8.</span>
        <label>{regulationsAllDB.eightRegulation}</label>
      </p>
    </div>
  );
};

export default GeneralRules;
