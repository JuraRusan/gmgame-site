import classNames from "classnames";
import React from 'react';
import MinecraftImage from "../mini-component/Minecraft-image";

import styles from "./Shulker-box-mini.module.scss";

const ShulkerBoxMini = (props) => {

  function completeArray(arr) {
    const filledArray = [];
    for (let i = 0; i <= 26; i++) {
      const item = arr.find((el) => Number(el.slot) === i);
      if (item) {
        filledArray.push(item);
      } else {
        filledArray.push({slot: String(i), id: null, id_ru: null, count: null});
      }
    }
    return filledArray;
  }

  const filledArray = completeArray(props.content);

  return (
    <div className={classNames(styles["shulkerBoxMini"])}>
      {filledArray.map((el, i) => {
        return (
          <div
            key={i}
            className={classNames(styles["item"])}
          >
            {el.id === null ? undefined : (
              <>
                <MinecraftImage
                  item_minecraft_name_id={el.id}
                  item_minecraft_id_potion={el.potion}
                  enchantsList={el.enchant}
                  armor_trim_material={el.trim?.material}
                />
                <span className={classNames(styles["count"])}>{el.count}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ShulkerBoxMini;