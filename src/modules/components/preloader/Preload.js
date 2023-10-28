import classNames from "classnames";
import React from "react";
import {Triangle} from 'react-loader-spinner';

import styles from "./Preload.module.scss";

function Preload() {
  return (
    <div className={classNames(styles["preloaderWrapper"])}>
      <div className={classNames(styles["preloader"])}>
        <Triangle color="#e4007f"/>
      </div>
    </div>
  );
}

export default Preload;