import classNames from "classnames";
import React from "react";

import styles from "./Articles.module.scss";

const Articles = () => {
  return (
    <div className={classNames(styles["articlesBlock"])}>
      <h4 className={classNames(styles["articlesTitleH4"])}>Страница в разработке, ожидайте в ближайшем будущем.</h4>
    </div>
  );
};

export default Articles;
