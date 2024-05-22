import classNames from "classnames";
import React from "react";

import styles from "./Checkbox.module.scss";

const Checkbox = ({ checked, onChange, onClick, message, className }) => {
  const handleChange = () => {
    onChange(!checked);
    if (onClick) {
      onClick(!checked);
    }
  };

  return (
    <label className={classNames(styles["wrapper"], className)}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={classNames(styles["checkmark"])} />
      <span className={classNames(styles["message"])}>{message}</span>
    </label>
  );
};

export default Checkbox;
