import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss";

const truncateString = (str, maxLength) => {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
};

const MinecraftRegister = (props) => {
  const itemNameId = props.item_minecraft_name_id;
  const goatHorn = props.goat_horn_instrument_type;
  const idPotion = props.item_minecraft_id_potion;
  const armorType = props.armor_trim_type;
  const armorMaterial = props.armor_trim_material;

  let minecraftId = `minecraft:${itemNameId}`;
  minecraftId += idPotion === "" || idPotion === undefined || idPotion === null ? "" : `. [${idPotion}]`;
  minecraftId += goatHorn === "" || goatHorn === undefined || goatHorn === null ? "" : `. [${goatHorn}]`;
  minecraftId += armorType === "" || armorType === undefined || armorType === null ? "" : `. [${armorType}]`;
  minecraftId += armorMaterial === "" || armorMaterial === undefined || armorMaterial === null ? "" : `. [${armorMaterial}]`;

  const truncatedMinecraftId = truncateString(minecraftId, 50);

  return (
    <>
      <p className={classNames(styles["minecraftId"])}>
        {truncatedMinecraftId}
      </p>
    </>
  );
};

export default MinecraftRegister;
