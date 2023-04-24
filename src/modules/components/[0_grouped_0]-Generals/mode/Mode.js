import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";

import styles from "./Mode.module.scss";
import "aos/dist/aos.css";

const Mode = (props) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["modeBlock"])} data-aos="zoom-in">
      <div className={classNames(styles["modeNameWrapper"])}>
        <h3 className={classNames(styles["nameH3"])}>{props.name}</h3>
      </div>
      <div className={classNames(styles["circle"])}></div>
      <h4 className={classNames(styles["modeInformationH4"])}>{props.info}</h4>
    </div>
  );
};

export default Mode;
