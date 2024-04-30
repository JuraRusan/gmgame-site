import classNames from "classnames";
import React from "react";

import styles from "./MapSelectLine.module.scss";

const MapSelectLine = ({ list, onChange, defaultValue }) => {
  return (
    <select className={classNames(styles["select_style"])} onChange={onChange} defaultValue={defaultValue}>
      {list.map((el) => (
        <option className={classNames(styles["select_options"])} value={el.value}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default MapSelectLine;
