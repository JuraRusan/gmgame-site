import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-armor-name.module.scss"

const MinecraftArmorName = (props) => {

  return (
    <>
      <p className={classNames(styles["trimStyle"])}>- Шаблон:
      <span>{props.armor_trim_type_ru}</span>
      </p>
      <p className={classNames(styles["trimStyle"])}>- Материал:
      <span>{props.armor_trim_material_ru}</span>
      </p>
    </>
  );
};

export default MinecraftArmorName;
