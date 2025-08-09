import CN from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArrayShulker } from "../function/CompleteArray";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = ({ item, size = "medium" }) => {
  const filledArray = completeArrayShulker(item.content);

  return (
    <div
      className={CN(styles["shulker_box"], {
        [styles["medium"]]: size === "medium",
        [styles["small"]]: size === "small",
      })}
    >
      {filledArray.map((el, index) =>
        el.id === null ? <OneItem key={index} size={size} /> : <OneItem key={index} item={el} size={size} />
      )}
    </div>
  );
};

export default ShulkerBox;
