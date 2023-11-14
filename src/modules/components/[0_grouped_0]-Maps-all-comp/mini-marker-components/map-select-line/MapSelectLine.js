import classNames from "classnames";
import React from "react";

import styles from "./MapSelectLine.module.scss";

const MapSelectLine = (props) => {

  const list = props.list

  return (
    <select className={classNames(styles["inputStyle"])} onChange={props.onChange} defaultValue={props.defaultValue}>
      {list.map((el) =>
        <option className={classNames(styles["optionList"])} value={el.value}>{el.name}</option>
      )}
    </select>
  );
};

export default MapSelectLine;
