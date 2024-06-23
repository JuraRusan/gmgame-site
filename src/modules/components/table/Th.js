import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";

import styles from "./Table.module.scss";

const Th = ({ type, href, content, children }) => {
  const length = 200;

  const tooltip = content?.length > length ? <span className={classNames(styles["full_text"])}>{content}</span> : null;

  const link = (
    <a href={href} className={classNames(styles["tableLink"])} target="_blank" rel="noreferrer">
      &#10148;
    </a>
  );

  const link_to = (
    <Link to={href} className={classNames(styles["tableLink"])}>
      &#10148;
    </Link>
  );

  const text = (
    <p className={classNames(styles["tableText"])}>
      {trimString(content, length)}
      {tooltip}
    </p>
  );

  const getTypeChildren = () => {
    if (type === "actions") {
      return children;
    } else if (type === "editing") {
      return children;
    } else if (type === "link") {
      return link;
    } else if (type === "link_to") {
      return link_to;
    } else {
      return text;
    }
  };

  const getType = getTypeChildren();

  function trimString(str, maxLength) {
    if (str?.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    } else {
      return str;
    }
  }

  return (
    <th
      className={
        type === "actions"
          ? classNames(styles["tableColumns"])
          : classNames(styles["tableColumns"], styles["tableColumnsNoCenter"])
      }
    >
      {getType}
    </th>
  );
};

export default Th;
