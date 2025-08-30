import CN from "classnames";
import React, { forwardRef } from "react";

import styles from "./Select.module.scss";

const Select = forwardRef(({ list, className, ...props }, ref) => {
  return (
    <div className={styles["select_customs"]}>
      <select ref={ref} defaultValue="" className={CN(styles["select"], className)} {...props}>
        <option hidden value="" />
        {list.map((el, index) => (
          <option className={styles["options"]} value={el.value} key={index}>
            {el.name}
          </option>
        ))}
      </select>
      <div className={styles["swipe"]}>▼</div>
    </div>
  );
});

export default Select;
