import classNames from "classnames";
import React from "react";

import styles from "./CabNotAvailable.module.scss";

const CabNotAvailable = () => {
  return (
    <div className={classNames(styles["wrapper_not_available"])}>
      <h4 className={classNames(styles["title"])}>Страница находится в процессе разработки, ожидайте в ближайшем будущем.</h4>
    </div>
  );
};

export default CabNotAvailable;
