import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Articles.module.scss";
import "aos/dist/aos.css";

const Articles = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["articlesBlock"])} data-aos="zoom-in">
      <h4 className={classNames(styles["articlesTitleH4"])}>Страница в разработке, ожидайте в ближайшем будущем.</h4>
    </div>
  );
};

export default Articles;
