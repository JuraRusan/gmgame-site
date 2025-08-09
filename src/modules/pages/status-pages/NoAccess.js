import React from "react";

import styles from "./StatusPages.module.scss";

const NoAccess = () => {
  return (
    <div className={styles["status_wrapper"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Error 403</h1>
        <h2 className={styles["description"]}>Доступ к этой странице ограничен!</h2>
        <p className={styles["sub_description"]}>
          Пожалуйста, свяжитесь с администратором сайта, если вы считаете, что это ошибка.
        </p>
        <a href="/" className={styles["_back"]}>
          Вернутся на главную страницу
        </a>
      </div>
    </div>
  );
};

export default NoAccess;
