import classNames from "classnames";
import React from "react";

import styles from "./FormTitle.module.scss";

const FormTitle = ({ length, min, max, title, count = true, required = true, center = false }) => {
  return (
    <div className={classNames(styles["row_block_text"], center && styles["center"])}>
      <h4 className={classNames(styles["title"])}>{title}</h4>
      {required && <span className={classNames(styles["required"])}>*</span>}
      {count !== true ? null : (
        <h4 className={classNames(styles["count"])}>
          <span
            className={classNames(styles["number"], {
              [styles["green"]]: length <= max && length >= min,
              [styles["red"]]: length < min || length > max,
              [styles["white"]]: length <= 0,
            })}
          >
            {length}/{max}
          </span>
        </h4>
      )}
    </div>
  );
};

export default FormTitle;
