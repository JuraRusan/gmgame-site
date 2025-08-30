import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Input.module.scss";

const CustomNumber = () => {
  return (
    <div className={styles["number_block"]}>
      <div className={styles["swipe"]}>▲</div>
      <div className={styles["swipe"]}>▼</div>
    </div>
  );
};

const Input = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className={styles["input_customs"]}>
      <input ref={ref} className={CN(styles["input"], className)} {...props} />
      {props.type !== "number" ? null : <CustomNumber />}
    </div>
  );
});

export default Input;
