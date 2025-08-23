import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Select.module.scss";

const Select = forwardRef(({ list, className, ...props }, ref) => {
  return (
    <select ref={ref} className={CN(styles["select"], className)} {...props}>
      <option className={CN(styles["options"], styles["no_use"])} value="" selected="selected" disabled />
      {list.map((el, index) => (
        <option className={styles["options"]} value={el.value} key={index}>
          {el.name}
        </option>
      ))}
    </select>
  );
});

export default Select;
