import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = forwardRef(({ checked, onChange, onClick, message, className, ...props }, ref) => {
  const handleChange = (e) => {
    if (onChange) {
      onChange(e);
    }
    if (onClick) {
      onClick(e.target.checked);
    }
  };

  return (
    <label className={CN(styles["wrapper"], className)}>
      <input type="checkbox" ref={ref} checked={checked} onChange={handleChange} {...props} />
      <span className={styles["checkmark"]} />
      <span className={styles["message"]}>{message}</span>
    </label>
  );
});

export default Checkbox;
