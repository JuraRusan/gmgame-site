import classNames from "classnames";
import React from "react";

import styles from "./Title.module.scss";

const Title = ({ ico = null, children, ...props }) => {
  return (
    <div className={classNames(styles["title_page"])} {...props}>
      {ico && <span className={classNames(styles["ico"])}>{ico}</span>}
      <span className={classNames(styles["text"])}>{children}</span>
    </div>
  );
};

export default Title;
