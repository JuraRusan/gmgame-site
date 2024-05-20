import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ label = "Сохранить", view = "submit", ...props }) => {
  return (
    <button
      className={classNames(styles["btn"], {
        [styles["submit"]]: view === "submit",
        [styles["delete"]]: view === "delete",
        [styles["view"]]: view === "view",
      })}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
