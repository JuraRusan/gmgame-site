import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-shield-color.module.scss"

const MinecraftShieldColor = ({item}) => {
  return (
    <p className={classNames(styles["shield_style"])}>- Цвет:
      <span className={classNames(styles["span_style"])}>{item.shield_color?.color_ru}</span>
    </p>
  );
};

export default MinecraftShieldColor;
