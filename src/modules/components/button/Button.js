import classNames from "classnames";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({onClick, label, disabled, type, id, view}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      id={id}
      className={classNames(styles["btn"],
        {
          [styles["submit"]]: view === "submit",
          [styles["delete"]]: view === "delete",
          [styles["view"]]: view === "view",
        }
      )}
    >{label}</button>
  );
};

export default Button;
