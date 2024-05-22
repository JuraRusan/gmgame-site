import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ label = "Сохранить", view = "submit", className, ...props }) => {
  return (
    <button
      className={classNames(
        styles["btn"],
        {
          [styles["submit"]]: view === "submit",
          [styles["delete"]]: view === "delete",
          [styles["view"]]: view === "view",
        },
        className
      )}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
