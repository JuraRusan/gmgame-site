import CN from "classnames";
import React from "react";

import styles from "./ActionsButton.module.scss";

const ActionsButton = ({ ico, className, ...props }) => {
  return (
    <button className={CN(styles["actions"], className)} {...props}>
      {ico}
    </button>
  );
};

export default ActionsButton;
