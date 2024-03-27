import React from "react"
import classNames from "classnames";

import styles from "./Button.module.scss"

const Button = ({className, active, children, ...props}) => {
  return (
    <button
      className={
        classNames(
          styles["image_editor_button"],
          active && styles["image_editor_button_active"],
          className
        )
      }
      {...props}
    >
      {children}
    </button>
  )
};

export default Button;