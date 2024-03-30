import classNames from "classnames";
import React from "react";

import styles from "./ActionsButton.module.scss";

const ActionsButton = ({ onClick, ico }) => {
  return (
    <button className={classNames(styles["actions"])} onClick={onClick}>
      {ico}
    </button>
  );
};

export default ActionsButton;
