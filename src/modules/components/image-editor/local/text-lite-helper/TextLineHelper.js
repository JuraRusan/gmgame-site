import React from "react";
import classNames from "classnames";

import styles from "./TextLineHelper.module.scss";

const TextLineHelper = ({ className, id, text }) => {
  return (
    <label id={id} className={classNames(styles["text_helper"], className)}>
      {text}
    </label>
  );
};

export default TextLineHelper;
