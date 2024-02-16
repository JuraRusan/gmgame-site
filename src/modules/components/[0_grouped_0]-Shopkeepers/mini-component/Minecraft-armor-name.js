import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-armor-name.module.scss"

const MinecraftArmorName = ({item}) => {
  return (
    <>
      <p className={classNames(styles["trim_style"])}>- Шаблон:
        <span className={classNames(styles["span_style"])}>{item.trim.pattern_ru}</span>
      </p>
      <p className={classNames(styles["trim_style"])}>- Материал:
        <span className={classNames(styles["span_style"])}>{item.trim.material_ru}</span>
      </p>
    </>
  );
};

export default MinecraftArmorName;
