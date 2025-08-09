import CN from "classnames";
import React from "react";
import OneItem from "../one-item/One-item.js";
import { completeArrayBundle } from "../function/CompleteArray";

import styles from "./Bundle.module.scss";
import common from "./Inventory-elements.module.scss";

const Bundle = ({ item, size = "medium" }) => {
  const filledArray = completeArrayBundle(item.bundle);

  return (
    <div
      className={CN(common["inventory"], {
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

export default Bundle;
