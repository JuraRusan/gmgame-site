import classNames from "classnames";
import React from "react";
import { useSelector } from "react-redux";

import styles from "./Minecraft-list.module.scss";

const MinecraftList = ({ item }) => {
  const lang = useSelector((state) => state.lang);

  function renderEnchantItem(name) {
    const specialEnchant =
      lang[`enchantment.${name.id}`] === "Проклятие утраты" ||
      lang[`enchantment.${name.id}`] === "Проклятие несъёмности";
    const classStyle = specialEnchant ? styles["red"] : styles["default"];

    return (
      <>
        <span className={classNames(classStyle)}>
          {lang[`enchantment.${name.id}`]} {lang[`enchantment.level.${name.lvl}`]}
        </span>
      </>
    );
  }

  return (
    <>
      <ul className={classNames(styles["list"])}>
        {item.enchant?.map((el, i) => (
          <li className={classNames(styles["item"])} key={i}>
            {renderEnchantItem(el)}
          </li>
        ))}
      </ul>
    </>
  );
};

export default MinecraftList;
