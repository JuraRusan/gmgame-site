import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TInput = ({ onChange, id, defaultValue, size }) => {
  return (
    <input
      onChange={onChange}
      id={id}
      defaultValue={defaultValue}
      className={classNames(styles["tableInput"], {
        [styles["tableInputSmall"]]: size === "small",
        [styles["tableInputMiddle"]]: size === "middle",
        [styles["tableInputLarge"]]: size === "large",
        [styles["tableInputSuperLarge"]]: size === "super_large",
      })}
    />
  );
};

export default TInput;
