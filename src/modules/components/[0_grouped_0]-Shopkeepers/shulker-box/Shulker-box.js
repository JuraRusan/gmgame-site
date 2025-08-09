import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArrayShulker } from "../function/CompleteArray";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = ({ item, full = true }) => {
  const filledArray = completeArrayShulker(item.content);

  return (
    <div className={classNames(styles["shulker_box"], full ? styles["full"] : styles["mini"])}>
      {filledArray.map((el, index) =>
        el.id === null ? <OneItem key={index} mini={!full} /> : <OneItem key={index} item={el} mini={!full} />
      )}
    </div>
  );
};

export default ShulkerBox;
