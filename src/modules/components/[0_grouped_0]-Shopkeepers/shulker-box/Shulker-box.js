import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArray } from "../function/CompleteArray";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = ({ item, size = "medium", full = true, onClick = (slot) => {} }) => {
  const filledArray = completeArray(item.content);

  return (
    <div className={classNames(styles["shulker_box"], full ? styles["full"] : styles["mini"])}>
      {filledArray.map((el, index) =>
        el.id === null ? (
          <OneItem key={index} mini={!full} onClick={() => onClick(index)} />
        ) : (
          <OneItem key={index} item={el} mini={!full} onClick={() => onClick(index)} />
        )
      )}
    </div>
  );
};

export default ShulkerBox;
