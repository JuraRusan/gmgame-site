import classNames from "classnames";
import React from "react";
import SvgWarn from "../../../bases/icons/SvgWarn.js";

import styles from "./Warn.module.scss";

const Warn = (props) => {
  return (
    <div className={classNames(styles["warnBlock"])}>
      <span className={classNames(styles["spanIcon"])}>
        <SvgWarn width="24px" height="24px" color="#ffb400"/>
      </span>
      <h4 className={classNames(styles["warnInformation"])}>{props.inf}</h4>
    </div>
  );
};

export default Warn;
