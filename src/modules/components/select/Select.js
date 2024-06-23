import classNames from "classnames";
import React from "react";

import styles from "./Select.module.scss";

const Select = ({ list, ...props }) => {
  return (
    <select className={classNames(styles["select"])} {...props}>
      <option className={classNames(styles["options"])} value="" disabled={true} />
      {list.map((el, index) => (
        <option className={classNames(styles["options"])} value={el.value} key={index}>
          {el.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
