import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Input.module.scss";

const Input = forwardRef(({ className, ...props }, ref) => {
  return <input ref={ref} className={CN(styles["input"], className)} {...props} />;
});

export default Input;
