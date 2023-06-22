import classNames from "classnames";
import React from 'react';
import OneItem from "../one-item/One-item.js";
import OneItemNone from "../one-item/One-item-none";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = (props) => {

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
    <div className={classNames(styles["oneShulkerBox"])}>
      {filledArray.map((el, i) => (
        <>
          {el.id === null
            ?
            <OneItemNone key={i}/>
            :
            <OneItem
              key={i}
              item_name_title={el.id_ru}
              item_minecraft_name_id={el.id}
              item_count={el.count}
              enchantsList={el.enchant}
              item_minecraft_id_potion={el.potion}
              storedEnchantsList={el.stored_enchant}
              goat_horn_instrument_type={el.instrument?.instrument_type}
              goat_horn_instrument_type_ru={el.instrument?.instrument_type_ru}
              minecraft_custom_name={el.minecraft_custom}
              firework_power_lvl={el.firework_power}
            />
          }
        </>
      ))}
    </div>
  );
};

export default ShulkerBox;