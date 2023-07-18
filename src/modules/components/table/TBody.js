import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TBody = (props) => {
  return (
    <tbody className={classNames(styles["tableTbody"])}>{props.children}</tbody>
  );
};

export default TBody;
