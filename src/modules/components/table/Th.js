import classNames from "classnames";
import React from "react";

import styles from "./Table.module.scss";

const Th = (props) => {

  const type = props.type;

  const link = <a href={props?.href} className={classNames(styles["tableLink"])} target="_blank" rel="noreferrer">&#10148;</a>
  const text = <p className={classNames(styles["tableText"])}>{props?.content}</p>

  const getTypeChildren = () => {
    if (type === "actions") {
      return props?.children;
    } else if (type === "editing") {
      return props?.children;
    } else if (type === "link") {
      return link;
    } else {
      return text;
    }
  };
  const getType = getTypeChildren();

  return (
    <th className={type === "actions" ? classNames(styles["tableColumns"]) : classNames(styles["tableColumns"], styles["tableColumnsNoCenter"])}>{getType}</th>
  );
};

export default Th;