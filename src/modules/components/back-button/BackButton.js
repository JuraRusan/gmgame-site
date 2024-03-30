import classNames from "classnames";
import React from "react";

import styles from "./BackButton.module.scss";

const BackButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classNames(styles["back"])}>
      {"<-- Показать весь список"}
    </button>
  );
};

export default BackButton;
