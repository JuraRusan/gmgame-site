import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-name.module.scss"

const MinecraftName = (props) => {

  const goatHornRu = props.goat_horn_instrument_type_ru;
  const fireworkPower = props.firework_power_lvl;

  const armors_paterns_array = [
    {
      "pattern": "sentry_armor_trim_smithing_template",
      "pattern_ru": "Страж"
    },
    {
      "pattern": "vex_armor_trim_smithing_template",
      "pattern_ru": "Вредина"
    },
    {
      "pattern": "wild_armor_trim_smithing_template",
      "pattern_ru": "Дебри"
    },
    {
      "pattern": "coast_armor_trim_smithing_template",
      "pattern_ru": "Берег"
    },
    {
      "pattern": "dune_armor_trim_smithing_template",
      "pattern_ru": "Дюна"
    },
    {
      "pattern": "wayfinder_armor_trim_smithing_template",
      "pattern_ru": "Искатель"
    },
    {
      "pattern": "raiser_armor_trim_smithing_template",
      "pattern_ru": "Сборщик"
    },
    {
      "pattern": "shaper_armor_trim_smithing_template",
      "pattern_ru": "Скульптор"
    },
    {
      "pattern": "host_armor_trim_smithing_template",
      "pattern_ru": "Вождь"
    },
    {
      "pattern": "ward_armor_trim_smithing_template",
      "pattern_ru": "Хранитель"
    },
    {
      "pattern": "silence_armor_trim_smithing_template",
      "pattern_ru": "Тишина"
    },
    {
      "pattern": "tide_armor_trim_smithing_template",
      "pattern_ru": "Прилыв"
    },
    {
      "pattern": "snout_armor_trim_smithing_template",
      "pattern_ru": "Рыло"
    },
    {
      "pattern": "rib_armor_trim_smithing_template",
      "pattern_ru": "Ребро"
    },
    {
      "pattern": "eye_armor_trim_smithing_template",
      "pattern_ru": "Око"
    },
    {
      "pattern": "spire_armor_trim_smithing_template",
      "pattern_ru": "Шпиль"
    },
    {
      "pattern": "netherite_upgrade_smithing_template",
      "pattern_ru": "Незер. улучшение"
    }
  ]

  const nameSearch = armors_paterns_array.filter((fill) => fill.pattern === props.item_minecraft_name_id)

  return (
    <>
      {
        props.minecraft_custom_name === undefined || props.minecraft_custom_name === "" || props.minecraft_custom_name === null
          ?
          <h3 className={classNames(styles["name"])}>
            {props.item_name_title}
            {goatHornRu &&
              <span className={classNames(styles["custom"])}> "{goatHornRu}"</span>
            }
            {fireworkPower &&
              <span className={classNames(styles["custom"])}> lvl - {fireworkPower}</span>
            }
            {nameSearch.length > 0
              ?
              <span className={classNames(styles["custom"])}> "{nameSearch[0].pattern_ru}"</span>
              :
              null
            }
          </h3>
          :
          <>
            <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{__html: props.minecraft_custom_name}}></h3>
            {goatHornRu &&
              <h3 className={classNames(styles["name"])}>Звучание -
                <span className={classNames(styles["custom"])}> "{goatHornRu}"</span>
              </h3>
            }
            {fireworkPower &&
              <h3 className={classNames(styles["name"])}>lvl -
                <span className={classNames(styles["custom"])}> {fireworkPower}</span>
              </h3>
            }
            {nameSearch.length > 0
              ?
              <h3 className={classNames(styles["name"])}>Шаблон -
                <span className={classNames(styles["custom"])}> "{nameSearch[0].pattern_ru}"</span>
              </h3>
              :
              null
            }
          </>
      }
    </>
  );
};

export default MinecraftName;
