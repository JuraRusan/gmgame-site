import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss";


const MinecraftRegister = (props) => {

  const minecraftItem = props.item

  const itemNameId = minecraftItem.type;
  const goatHorn = minecraftItem.instrument === undefined ? "" : `. [${minecraftItem.instrument.instrument_type}]`;
  const idPotion = minecraftItem.potion === undefined ? "" : `. [${minecraftItem.potion}]`;
  const armorType = minecraftItem.trim === undefined ? "" : `. [${minecraftItem.trim.pattern}]`;
  const armorMaterial = minecraftItem.trim === undefined ? "" : `. [${minecraftItem.trim.material}]`;

  let minecraftId = `minecraft:${itemNameId}`;
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
