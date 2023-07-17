import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TTextarea = (props) => {
  return (
    <textarea className={classNames(styles["tableTextarea"])} onChange={props?.onChange} id={props?.id} defaultValue={props?.defaultValue} rows={props?.rows}/>
  );
};

export default TTextarea;
