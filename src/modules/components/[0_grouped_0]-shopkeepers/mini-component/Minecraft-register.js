import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss"

const MinecraftRegister = (props) => {

  const itemNameId = props.item_minecraft_name_id;
  const goatHorn = props.goat_horn_instrument_type;
  const idPotion = props.item_minecraft_id_potion;
  const armorType = props.armor_trim_type;
  const armorMaterial = props.armor_trim_material;

  return (
    <>
      <p className={classNames(styles["minecraftId"])}>minecraft:
        {itemNameId}
        {idPotion === "" || idPotion === undefined || idPotion === null ? "" : `. [${idPotion}]`}
        {goatHorn === "" || goatHorn === undefined || goatHorn === null ? "" : `. [${goatHorn}]`}
        {armorType === "" || armorType === undefined || armorType === null ? "" : `. [${armorType}]`}
        {armorMaterial === "" || armorMaterial === undefined || armorMaterial === null ? "" : `. [${armorMaterial}]`}
      </p>
    </>
  );
};

export default MinecraftRegister;
