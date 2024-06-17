import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArray } from "../function/CompleteArray";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = ({ item, full = true, customLink }) => {
  const filledArray = completeArray(item.content);

  return (
    <div className={classNames(styles["shulker_box"], full ? styles["full"] : styles["mini"])}>
      {filledArray.map((el, index) =>
        el.id === null ? (
          <OneItem key={index} mini={!full} />
        ) : (
          <OneItem key={index} item={el} mini={!full} customLink={customLink} />
        )
      )}
    </div>
  );
};

export default ShulkerBox;
