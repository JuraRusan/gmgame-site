import classNames from "classnames";
import React from "react";

import styles from "./Link.module.scss";

const Link = ({ show = true, className, children, ...props }) => {
  return (
    <a className={classNames(styles["link_site"], className)} {...props}>
      {children}
      {show && ` ${String.fromCharCode(10148)}`}
    </a>
  );
};

export default Link;
