import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-name.module.scss"

const MinecraftName = (props) => {

  const goatHornRu = props.goat_horn_instrument_type_ru;
  const fireworkPower = props.firework_power_lvl;

  return (
    <div className={classNames(styles[""])}>
      {
        props.minecraft_custom_name === undefined || props.minecraft_custom_name === "" || props.minecraft_custom_name === null
          ?
          <h3 className={classNames(styles["name"])}>
            {props.item_name_title}
            {goatHornRu &&
              <span className={classNames(styles["goatHorn"])}> "{goatHornRu}"</span>
            }
            {fireworkPower &&
              <span className={classNames(styles["goatHorn"])}> lvl - {fireworkPower}</span>
            }
          </h3>
          :
          <>
            <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{__html: props.minecraft_custom_name}}></h3>
            {goatHornRu &&
              <h3 className={classNames(styles["name"])}>Звучание - <span
                className={classNames(styles["goatHorn"])}> "{goatHornRu}"</span>
              </h3>
            }
            {fireworkPower &&
              <h3 className={classNames(styles["name"])}>lvl - <span
                className={classNames(styles["goatHorn"])}> {fireworkPower}</span>
              </h3>
            }
          </>
      }
    </div>
  );
};

export default MinecraftName;
