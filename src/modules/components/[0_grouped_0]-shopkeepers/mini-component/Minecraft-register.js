import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-register.module.scss"

const MinecraftRegister = (props) => {

  const itemNameId = props.item_minecraft_name_id;
  const goatHorn = props.goat_horn_instrument_type;
  const idPotion = props.item_minecraft_id_potion;

  return (
    <>
      <p className={classNames(styles["minecraftId"])}>minecraft:
        {itemNameId}
        {idPotion === "" || idPotion === undefined || idPotion === null ? "" : `. [${idPotion}]`}
        {goatHorn === "" || goatHorn === undefined || goatHorn === null ? "" : `. [${goatHorn}]`}
      </p>
    </>
  );
};

export default MinecraftRegister;
