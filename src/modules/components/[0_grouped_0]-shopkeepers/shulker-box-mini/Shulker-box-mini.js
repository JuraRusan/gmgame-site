import classNames from "classnames";
import React from 'react';
import MinecraftImage from "../mini-component/Minecraft-image";
import MinecraftBanner from "../mini-component/Minecraft-banner";
import MinecraftShield from "../mini-component/Minecraft-shield";
import {completeArray} from "../function/CompleteArray";

import styles from "./Shulker-box-mini.module.scss";

const ShulkerBoxMini = ({item}) => {

  const filledArray = completeArray(item.content);

  return (
    <div className={classNames(styles["shulker_box_mini"])}>
      {filledArray.map((el, i) => {
        return (
          <div key={i} className={classNames(styles["item"])}>
            {el.type === null ? undefined : (
              <>
                {el.banner_pattern === undefined && el.shield_color?.color === undefined ? <MinecraftImage item={el}/> : null}
                {el.banner_pattern !== undefined && el.shield_color?.color === undefined ? <MinecraftBanner item={el} type="center"/> : null}
                {el.shield_color?.color !== undefined ? <MinecraftShield item={el} type="center"/> : null}
                <span className={classNames(styles["count"])}>{el.amount}</span>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ShulkerBoxMini;