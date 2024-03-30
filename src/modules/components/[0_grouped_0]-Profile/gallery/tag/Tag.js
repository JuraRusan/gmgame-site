import classNames from "classnames";
import React from "react";

import styles from "./Tag.module.scss";

const Tag = ({ tag, btn = false, symbol = true, onClick = () => {} }) => {
  return (
    <div className={classNames(styles["tag"])}>
      <label className={classNames(styles["view_name"])}>{!symbol ? tag : "#" + tag}</label>
      {btn && (
        <button className={classNames(styles["actions"])} onClick={onClick}>
          &#10008;
        </button>
      )}
    </div>
  );
};

export default Tag;
