import CN from "classnames";
import React, { forwardRef, useState } from "react";

import styles from "./Input.module.scss";

const CustomNumber = () => {
  return (
    <div className={CN(styles["custom_block"], styles["_number"])}>
      <div className={styles["swipe"]}>▲</div>
      <div className={styles["swipe"]}>▼</div>
    </div>
  );
};

const CustomPassword = ({ onToggle, visible }) => {
  return (
    <label className={CN(styles["custom_block"], styles["_password"])}>
      <input className={styles["no_checkmark"]} type="checkbox" checked={visible} onChange={onToggle} />
      <span className={styles["checkmark"]} />
    </label>
  );
};

const Input = forwardRef(({ type, className, ...props }, ref) => {
  const [visible, setVisible] = useState(false);

  const inputType = type === "password" ? (visible ? "text" : "password") : type;

  return (
    <div className={styles["input_customs"]}>
      <input ref={ref} type={inputType} className={CN(styles["input"], className)} {...props} />
      {type !== "number" ? null : <CustomNumber />}
      {type !== "password" ? null : <CustomPassword visible={visible} onToggle={() => setVisible(!visible)} />}
    </div>
  );
});

export default Input;
