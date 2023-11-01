import classNames from "classnames";
import React from "react";

import styles from "./NotAvailable.module.scss";

const NotAvailable = () => {
  return (
    <div className={classNames(styles["not_available"])}>
      <div className={classNames(styles["not_available_wrapper"])}>
        <h3 className={classNames(styles["title"])}>Страница находится в процессе разработки, ожидайте в ближайшем будущем.</h3>
      </div>
    </div>
  );
};

export default NotAvailable;
