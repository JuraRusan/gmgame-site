import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Select.module.scss";

const Select = forwardRef(({ list, className, ...props }, ref) => {
  return (
    <select ref={ref} defaultValue="" className={CN(styles["select"], className)} {...props}>
      <option hidden value="" />
      {list.map((el, index) => (
        <option className={styles["options"]} value={el.value} key={index}>
          {el.name}
        </option>
      ))}
    </select>
  );
});

export default Select;
