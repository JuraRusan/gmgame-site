import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-armor-name.module.scss"

const MinecraftArmorName = (props) => {

  const minecraftItem = props.item

  return (
    <>
      <p className={classNames(styles["trim_style"])}>- Шаблон:
        <span className={classNames(styles["span_style"])}>{minecraftItem.trim.pattern_ru}</span>
      </p>
      <p className={classNames(styles["trim_style"])}>- Материал:
        <span className={classNames(styles["span_style"])}>{minecraftItem.trim.material_ru}</span>
      </p>
    </>
  );
};

export default MinecraftArmorName;
