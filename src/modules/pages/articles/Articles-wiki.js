import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Articles-wiki.module.scss";
import "aos/dist/aos.css";

const ArticlesWiki = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["mainWiki"])} data-aos="zoom-in">
      <div className={classNames(styles["box"])} data-aos="zoom-in">
        <h3 className={classNames(styles["h3"])}>Страница в разработке, ожидайте в ближайшем будущем.</h3>
      </div>
    </div>
  );
};

export default ArticlesWiki;
