import React from "react";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";

import styles from "./StatusPages.module.scss";

const NotAvailable = () => {
  const isLoading = useLoading();

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={styles["status_wrapper"]}>
      <div className={styles["container"]}>
        <h1 className={styles["title"]}>Error 503</h1>
        <h2 className={styles["description"]}>Эта страница находится в разработке.</h2>
        <p className={styles["sub_description"]}>Загляните позже — скоро она станет доступной!</p>
        <a href="/" className={styles["_back"]}>
          Вернуться на главную страницу
        </a>
      </div>
    </div>
  );
};

export default NotAvailable;
