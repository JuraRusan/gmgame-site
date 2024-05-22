import classNames from "classnames";
import React from "react";

import styles from "./Textarea.module.scss";

const Textarea = ({ ...props }) => {
  return <textarea className={classNames(styles["textarea"])} {...props} />;
};

export default Textarea;
