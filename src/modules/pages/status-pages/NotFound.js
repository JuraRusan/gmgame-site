import React from "react";
import proxy from "../../../../package.json";

import styles from "./StatusPages.module.scss";

const NotFound = () => {
  if (window.location.pathname === "/api/login") {
    window.location = `${proxy.proxy}api/login`;
    return;
  }

  return (
    <div className={styles["status_wrapper"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Error 404</h1>
        <h2 className={styles["description"]}>Данной страницы не существует!</h2>
        <p className={styles["sub_description"]}>Возможно, вы ошиблись при вводе адреса, или страница была удалена.</p>
        <a href="/" className={styles["_back"]}>
          Вернутся на главную страницу
        </a>
      </div>
    </div>
  );
};

export default NotFound;
