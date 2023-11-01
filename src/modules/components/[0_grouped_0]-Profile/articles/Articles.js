import classNames from "classnames";
import React from "react";

import styles from "./Articles.module.scss";

const Articles = () => {
  return (
    <div className={classNames(styles["articlesBlock"])}></div>
  );
};

export default Articles;
