import classNames from "classnames";
import React from "react";
import SvgWarn from "../../../bases/icons/SvgWarn.js";

import styles from "./Error.module.scss";

const Error = (props) => {
  return (
    <div className={classNames(styles["errorBlock"])}>
      <span className={classNames(styles["spanIcon"])}>
        <SvgWarn width="24px" height="24px" color="#ff0000"/>
      </span>
      <h4 className={classNames(styles["errorInformation"])}>{props.inf}</h4>
    </div>
  );
};

export default Error;
