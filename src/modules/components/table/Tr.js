import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const Tr = ({ keyStyle, header, children }) => {
  return (
    <tr
      className={classNames(styles["tableRows"], {
        [styles["tableRowsBackground1"]]: keyStyle % 2 === 0,
        [styles["tableRowsBackground2"]]: keyStyle % 2 !== 0,
        [styles["tableRowsHeader"]]: header === true,
      })}
    >
      {children}
    </tr>
  );
};

export default Tr;
