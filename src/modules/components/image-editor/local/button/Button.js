import React from "react";
import classNames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ className, active, type = "default", children, ...props }) => {
  return (
    <button
      className={classNames(styles["image_editor_button"], active && styles["image_editor_button_active"], className)}
      {...props}
    >
      {type === "stroke" ? <span className={classNames(styles["span_stroke"])}>{children}</span> : children}
    </button>
  );
};

export default Button;
