import classNames from "classnames";
import React from "react";
import {Triangle} from 'react-loader-spinner';

import styles from "./Preload.module.scss";

function Preload() {
  return (
    <div className={classNames(styles["preloaderWrapper"])}>
      <Triangle wrapperClass="preloader"/>
    </div>
  );
}

export default Preload;