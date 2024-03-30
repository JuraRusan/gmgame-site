import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TTextarea = ({ onChange, id, defaultValue, rows }) => {
  return (
    <textarea
      className={classNames(styles["tableTextarea"])}
      onChange={onChange}
      id={id}
      defaultValue={defaultValue}
      rows={rows}
    />
  );
};

export default TTextarea;
