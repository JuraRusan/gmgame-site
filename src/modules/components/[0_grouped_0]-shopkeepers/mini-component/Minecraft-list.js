import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-list.module.scss"

const MinecraftList = (props) => {

  function renderEnchantItem(el) {
    const isSpecialEnchant = el.enchant_id_ru === "Проклятье утраты" || el.enchant_id_ru === "Проклятие несъёмности";
    const mainClass = isSpecialEnchant ? styles["red"] : styles["main"];
    return (
      <>
        <span className={classNames(mainClass)}>{el.enchant_id_ru} </span>- {el.lvl}
      </>
    );
  }

  return (
    <>
      <ul className={classNames(styles["listWrapper"])}>
        {props.enchantsList?.map((el, i) => (
          <li className={classNames(styles["list"])} key={i}>
            {renderEnchantItem(el)}
          </li>
        ))}
        {props.storedEnchantsList?.map((el, i) => (
          <li className={classNames(styles["list"])} key={i}>
            {renderEnchantItem(el)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MinecraftList;
