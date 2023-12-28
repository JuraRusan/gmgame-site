import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss";


const MinecraftRegister = ({item}) => {

  const goatHorn = item.instrument === undefined ? "" : `. [${item.instrument.instrument_type}]`;
  const idPotion = item.potion === undefined ? "" : `. [${item.potion}]`;
  const armorType = item.trim === undefined ? "" : `. [${item.trim.pattern}]`;
  const armorMaterial = item.trim === undefined ? "" : `. [${item.trim.material}]`;

  let minecraftId = `minecraft:${item.type}`;
  minecraftId += idPotion;
  minecraftId += goatHorn;
  minecraftId += armorType;
  minecraftId += armorMaterial;

  const truncateString = (str, maxLength) => {
    if (str.length > maxLength) {
      return str.substring(0, maxLength) + "...";
    }
    return str;
  };

  const truncatedMinecraftId = truncateString(minecraftId, 50);

  return (
    <p className={classNames(styles["minecraft_id"])}>{truncatedMinecraftId}</p>
  );
};

export default MinecraftRegister;
