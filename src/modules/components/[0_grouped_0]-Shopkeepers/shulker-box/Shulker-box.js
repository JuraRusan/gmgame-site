import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import OneItemNone from "../one-item/One-item-none";
import { completeArray } from "../function/CompleteArray";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = ({ item }) => {
  const filledArray = completeArray(item.content);

  return (
    <div className={classNames(styles["oneShulkerBox"])}>
      {filledArray.map((el, index) => (
        <>{el.id === null ? <OneItemNone key={index} /> : <OneItem key={index} item={el} />}</>
      ))}
    </div>
  );
};

export default ShulkerBox;
