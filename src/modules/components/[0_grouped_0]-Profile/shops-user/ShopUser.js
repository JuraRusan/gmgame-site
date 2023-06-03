import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Warn from "../../warn/Warn";

import styles from "./ShopUser.module.scss";
import "aos/dist/aos.css";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ShopUser = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const userShopData = {
    "last_seen": "24 дней, 12 часов, 39 мин, 36 сек.",
    "owner": "Niksa_Viento",
    "villager": [
      {
        "shop_id": "5",
        "x": -344,
        "y": 82,
        "z": -9,
        "name": "NiksWoodman",
        "object_profession": "NONE",
        "object_villager_type": "JUNGLE"
      },
      {
        "shop_id": "7",
        "x": -292,
        "y": 85,
        "z": -21,
        "name": "NiksMasterShulk",
        "object_profession": "NITWIT",
        "object_villager_type": "SNOW"
      },
      {
        "shop_id": "11",
        "x": -337,
        "y": 84,
        "z": -37,
        "name": "NiksLiana",
        "object_profession": "LIBRARIAN",
        "object_villager_type": "SAVANNA"
      }
    ]
  }

  const deletedShop = stringToSeconds(userShopData.last_seen);

  function stringToSeconds(timeString) {
    const units = timeString.split(", ");
    let days = 0, hours = 0, minutes = 0, seconds = 0;

    units.forEach(unit => {
      if (unit.includes("дней")) {
        days = parseInt(unit);
      } else if (unit.includes("часов")) {
        hours = parseInt(unit);
      } else if (unit.includes("мин")) {
        minutes = parseInt(unit);
      } else if (unit.includes("сек")) {
        seconds = parseInt(unit);
      }
    });

    const totalSeconds = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + seconds;
    const fullDay = 2592000;

    const remainingSeconds = fullDay - totalSeconds;
    const remainingDays = Math.floor(remainingSeconds / (24 * 60 * 60));
    const remainingHours = Math.floor((remainingSeconds % (24 * 60 * 60)) / (60 * 60));
    const remainingMinutes = Math.floor((remainingSeconds % (60 * 60)) / 60);
    const remainingSecondsOutput = remainingSeconds % 60;

    const deleteShops = `${remainingDays} дней, ${remainingHours} часов, ${remainingMinutes} минут, ${remainingSecondsOutput} секунд.`

    const last = totalSeconds > fullDay
      ?
      <h4 className={classNames(styles["infoH4"])}>Магазин/ы удалён/ы</h4>
      :
      <h4 className={classNames(styles["infoH4"])}>Оставшееся время к удалению:<span>{deleteShops}</span></h4>

    return last;
  }

  return (
    <div className={classNames(styles["shopWrapper"])}>
      <div className={classNames(styles["userInfo"])}>
        <h4 className={classNames(styles["infoH4"])}>Последнее посещение игрового сервера:
          <span>{userShopData.last_seen}</span>
        </h4>
        {deletedShop}
        <div className={classNames(styles["wrapper"])}>
          <Warn inf="Магазины автоматически удаляются если игрока нету больше чем 30 дней на основном сервере"/>
        </div>
      </div>
      {userShopData.villager.map((el, index) => (
        <div className={classNames(styles["oneShopWrapper"])} key={index}>
          <div className={classNames(styles["descriptionBox"])}>
            <h4 className={classNames(styles["h4Style"])}>Название
              {el.name === ""
                ?
                <span className={classNames(styles["spanStyle"], styles["err"])}>-</span>
                :
                <span className={classNames(styles["spanStyle"])}>{el.name}</span>
              }
            </h4>
            <h4 className={classNames(styles["h4Style"])}>X:
              <span className={classNames(styles["spanStyle"])}>{el.x}</span>
            </h4>
            <h4 className={classNames(styles["h4Style"])}>Y:
              <span className={classNames(styles["spanStyle"])}>{el.y}</span>
            </h4>
            <h4 className={classNames(styles["h4Style"])}>Z:
              <span className={classNames(styles["spanStyle"])}>{el.z}</span>
            </h4>
          </div>
          <div className={classNames(styles["villagerImage"])}>
            <LazyLoadImage
              effect="blur"
              className={classNames(styles["wrapper"])}
              src={`../site_assets/villager/webp/${el.object_villager_type}_${el.object_profession}.webp`}
              width="auto"
              height="100%"
              alt="none"
            />
          </div>
        </div>
      ))}
      <div className={classNames(styles["warnWrapper"])}>
        <Warn inf="Обновление данных с сервером происходит раз в 15 минут"/>
      </div>
    </div>
  );
}

export default ShopUser;
