import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArrayBundle } from "../function/CompleteArray";

import styles from "./Bundle.module.scss";

const Bundle = ({ item, full = true }) => {
  const filledArray = completeArrayBundle(item.bundle);

  return (
    <div className={classNames(styles["bundle"], full ? styles["full"] : styles["mini"])}>
      {filledArray.map((el, index) =>
        el.id === null ? <OneItem key={index} mini={!full} /> : <OneItem key={index} item={el} mini={!full} />
      )}
    </div>
  );
};

export default Bundle;
