import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss";

const MinecraftRegister = ({ item }) => {
  const minecraftId = `minecraft:${item.id}`;

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }

    return str;
  };

  return <p className={classNames(styles["register"])}>{truncateString(minecraftId, 50)}</p>;
};

export default MinecraftRegister;
