import classNames from "classnames";
import React from "react";

import styles from "./BooleanCheck.module.scss";

const BooleanCheck = ({ value, className }) => {
  return (
    <>
      {value ? (
        <span className={classNames(styles["value"], styles["true"], className)}>&#10003;</span>
      ) : (
        <span className={classNames(styles["value"], styles["false"], className)}>&#128473;</span>
      )}
    </>
  );
};

export default BooleanCheck;
