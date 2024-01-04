import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TBody = ({children}) => {
  return (
    <tbody className={classNames(styles["tableTbody"])}>{children}</tbody>
  );
};

export default TBody;
