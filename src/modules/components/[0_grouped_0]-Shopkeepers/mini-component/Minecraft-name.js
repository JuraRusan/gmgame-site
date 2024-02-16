import classNames from "classnames";
import React from "react";

import styles from "./Minecraft-name.module.scss"

const ARMORS_PATTERNS_ARRAY = [
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

const MinecraftName = ({item}) => {

  const goatHornRu = item.instrument?.instrument_type_ru;
  const fireworkPower = item.firework_power;
  const customName = item.minecraft_custom;

  const nameSearch = ARMORS_PATTERNS_ARRAY.filter((fill) => fill.pattern === item.type)

  return (
    <>
      {
        customName === undefined || customName === "" || customName === null
          ?
          <h3 className={classNames(styles["name"])}>
            {item.type_ru}
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
            <h3 className={classNames(styles["name"])} dangerouslySetInnerHTML={{__html: customName}}></h3>
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
