import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const TInput = (props) => {
  return (
    <input
      onChange={props?.onChange}
      id={props?.id}
      defaultValue={props?.defaultValue}
      className={
        classNames(styles["tableInput"],
          {
            [styles["tableInputSmall"]]: props.size === "small",
            [styles["tableInputMiddle"]]: props.size === "middle",
            [styles["tableInputLarge"]]: props.size === "large",
            [styles["tableInputSuperLarge"]]: props.size === "super_large",
          }
        )}
    />
  );
};

export default TInput;
