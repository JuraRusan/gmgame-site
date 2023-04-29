import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./NoAccess.module.scss";
import "aos/dist/aos.css";

const NoAccess = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["mainNoAccess403"])} data-aos="zoom-in">
      <div className={classNames(styles["NoAccessContainer"])}>
        <div className={classNames(styles["wrapperLock"])}>
          <div className={classNames(styles["lock"])}></div>
        </div>
        <div className={classNames(styles["lockMessage"])}>
          <h1 className={classNames(styles["TitleH1"])}>Error 403</h1>
          <h2 className={classNames(styles["TitleLockH2"])}>Доступ к этой странице ограничен!</h2>
          <p className={classNames(styles["subTitleLock"])}>Пожалуйста, свяжитесь с администратором сайта, если вы считаете, что это ошибка.</p>
          <a href="/" className={classNames(styles["back403"])}>Вернутся на главную страницу</a>
        </div>
      </div>
    </div>
  );
};

export default NoAccess;
