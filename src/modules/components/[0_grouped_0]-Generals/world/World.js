import classNames from "classnames";
import React from "react";

import styles from "./World.module.scss";

const World = (props) => {

  return (
    <div className={classNames(styles["worlds"])}>
      <div className={classNames(styles["circle"])}></div>
      <h3 className={classNames(styles["worldsName"])}>{props.name}</h3>
      <div className={classNames(styles["hr90deg"])}></div>
      <div className={classNames(styles["worldsImagesText"])}>
        <img src={props.src} alt=""/>
        <h4 className={classNames(styles["information"])}>{props.inf}</h4>
      </div>
    </div>
  );
};

export default World;
