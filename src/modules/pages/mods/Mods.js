import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Mods.module.scss";
import "aos/dist/aos.css";

const Mods = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["mainMods"])} data-aos="zoom-in">
      <div className={classNames(styles["boxWrapperMods"])} data-aos="zoom-in">
        <h3 className={classNames(styles["titleH3Mods"])}>Страница в разработке, ожидайте в ближайшем будущем. </h3>
      </div>
    </div>
  );
};

export default Mods;
