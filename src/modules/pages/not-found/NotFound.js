import classNames from "classnames";
import React from "react";
import proxy from '../../../../package.json';

import styles from "./NotFound.module.scss";

const NotFound = () => {

  if (window.location.pathname === '/api/login') {
    window.location = `${proxy.proxy}api/login`;
    return;
  }

  return (
    <div className={classNames(styles["mainNotFound404"])}>
      <div className={classNames(styles["Wrapper"])}>
        <div className={classNames(styles["notFoundContainer"])}>
          <h1 className={classNames(styles["TitleH1"])}>Error 404</h1>
          <h2 className={classNames(styles["information"])}>Данной страницы не существует, проверьте указанный адрес</h2>
          <a href="/" className={classNames(styles["back404"])}>Вернутся на главную страницу</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
