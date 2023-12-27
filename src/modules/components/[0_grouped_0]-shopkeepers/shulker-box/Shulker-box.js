import classNames from "classnames";
import React from 'react';
import OneItem from "../one-item/One-item.js";
import OneItemNone from "../one-item/One-item-none";

import styles from "./Shulker-box.module.scss";

const ShulkerBox = (props) => {

  const minecraftItem = props.item

  function completeArray(arr) {
    const filledArray = [];
    for (let i = 0; i <= 26; i++) {
      const item = arr.find((el) => Number(el.slot) === i);
      if (item) {
        filledArray.push(item);
      } else {
        filledArray.push({slot: String(i), type: null, type_ru: null, amount: null});
      }
    }
    return filledArray;
  }

  const filledArray = completeArray(minecraftItem.content);

  return (
    <div className={classNames(styles["oneShulkerBox"])}>
      {filledArray.map((el, index) => (
        <>
          {el.type === null
            ? <OneItemNone key={index}/>
            : <OneItem key={index} item={el}/>
          }
        </>
      ))}
    </div>
  );
};

export default ShulkerBox;