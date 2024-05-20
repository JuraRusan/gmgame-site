import classNames from "classnames";
import React from "react";

import styles from "./Link.module.scss";

const Link = ({ children, ...props }) => {
  return (
    <a className={classNames(styles["link_site"])} {...props}>
      {children} &#10148;
    </a>
  );
};

export default Link;
