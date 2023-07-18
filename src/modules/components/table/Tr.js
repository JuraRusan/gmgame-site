import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const Tr = (props) => {
  return (
    <tr className={
      classNames(styles["tableRows"],
        {
          [styles["tableRowsBackground1"]]: props.keyStyle % 2 === 0,
          [styles["tableRowsBackground2"]]: props.keyStyle % 2 !== 0,
          [styles["tableRowsHeader"]]: props.header  === true
        }
      )
    }
    >{props.children}</tr>
  );
};

export default Tr;
