import classNames from "classnames";
import React, {useEffect, useState} from "react";
import AOS from "aos";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Warn from "../../warn/Warn";

import styles from "./ShopUser.module.scss";
import "aos/dist/aos.css";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ShopUser = () => {

  const userShopData = {
    "last_seen": 1688323109428,
    "owner": "Niksa_Viento",
    "villager": [
      {
        "shop_id": "66",
        "x": -337,
        "y": 84,
        "z": -38,
        "name": "NiksLiana",
        "object_profession": "fisherman",
        "object_villager_type": "swamp",
      },
      {
        "shop_id": "67",
        "x": -344,
        "y": 82,
        "z": -10,
        "name": "NiksWoodman",
        "object_profession": "none",
        "object_villager_type": "jungle",
      },
      {
        "shop_id": "68",
        "x": -292,
        "y": 85,
        "z": -20,
        "name": "NiksMasterBox",
        "object_profession": "cartographer",
        "object_villager_type": "snow",
      },
      {
        "shop_id": "69",
        "x": -344,
        "y": 82,
        "z": -8,
        "name": "NiksLeaves",
        "object_profession": "fletcher",
        "object_villager_type": "swamp",
      },
      {
        "shop_id": "73",
        "x": -337,
        "y": 84,
        "z": -36,
        "name": "NiksFlowers",
        "object_profession": "none",
        "object_villager_type": "savanna",
      },
      {
        "shop_id": "82",
        "x": -292,
        "y": 85,
        "z": -22,
        "name": "NiksThings",
        "object_profession": "fletcher",
        "object_villager_type": "taiga",
      }
    ]
  }

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const unixTime = userShopData.last_seen;
  const unixTimeDrop = userShopData.last_seen + 2592000000;

  const formatWordByCount = (count, wordForms) => {
    const cases = [2, 0, 1, 1, 1, 2];
    let index;

    if (count % 100 > 4 && count % 100 < 20) {
      index = 2;
    } else {
      index = cases[Math.min(count % 10, 5)];
    }

    return wordForms[index];
  };

  const convertUnixTime = (unixTime, direction) => {
    let timeDifference, throughString, backString;
    if (direction === 'seen') {
      timeDifference = currentTime - unixTime;
      throughString = ""
      backString = "назад"
    } else if (direction === 'drop') {
      timeDifference = unixTime - currentTime;
      throughString = "через"
      backString = ""
    } else {
      throw new Error('Неверное направление преобразования времени.');
    }

    const seconds = Math.floor(timeDifference / 1000) % 60;
    const minutes = Math.floor(timeDifference / 1000 / 60) % 60;
    const hours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

    const daysForms = ['день', 'дня', 'дней'];
    const hoursForms = ['час', 'часа', 'часов'];
    const minutesForms = ['минута', 'минуты', 'минут'];
    const secondsForms = ['секунда', 'секунды', 'секунд'];

    const formattedDays = `${days} ${formatWordByCount(days, daysForms)}`;
    const formattedHours = `${hours} ${formatWordByCount(hours, hoursForms)}`;
    const formattedMinutes = `${minutes} ${formatWordByCount(minutes, minutesForms)}`;
    const formattedSeconds = `${seconds} ${formatWordByCount(seconds, secondsForms)}`;

    const formattedTimeDifference = `${throughString} ${days > 0 ? `${formattedDays}, ` : ''}${hours > 0 ? `${formattedHours}, ` : ''}${minutes > 0 ? `${formattedMinutes}, ` : ''}${formattedSeconds} ${backString}`;
    return formattedTimeDifference;
  };


  const UnixTimeConverter = ({unixTime}) => {
    const convertUnixTime = (unixTime) => {
      const date = new Date(parseInt(unixTime, 10));

      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);

      const hours = ('0' + date.getHours()).slice(-2);
      const minutes = ('0' + date.getMinutes()).slice(-2);
      const seconds = ('0' + date.getSeconds()).slice(-2);

      const formattedDate = `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
      return formattedDate;
    };

    return convertUnixTime(unixTime);
  };

  return (
    <div className={classNames(styles["shopWrapper"])}>
      <div className={classNames(styles["userInfo"])}>
        <h4 className={classNames(styles["infoH4"])}>Последнее посещение игрового сервера:
          <span>{convertUnixTime(unixTime, 'seen')} ( <UnixTimeConverter unixTime={unixTime}/> )</span>
        </h4>
        <h4 className={classNames(styles["infoH4"])}>Всего магазинов:
          <span>{userShopData.villager.length}/6</span>
        </h4>
        {userShopData.villager.length === 0
          ?
          null
          :
          <h4 className={classNames(styles["infoH4"])}>Оставшееся время к удалению:
            <span>{convertUnixTime(unixTimeDrop, 'drop')} ( <UnixTimeConverter unixTime={unixTimeDrop}/> )</span>
          </h4>
        }
        <div className={classNames(styles["wrapper"])}>
          <Warn inf="Магазины автоматически удаляются если игрока нету больше чем 30 дней на основном сервере"/>
        </div>
      </div>
      {userShopData.villager.length > 0
        ?
        <div className={classNames(styles["allShop"])}>
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
                <a
                  href={`http://127.0.0.1:3000/shopkeepers?scrollTo=scroll_${el.shop_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(styles["linkOffers"])}
                >
                  Перейти к сделкам &#10148;
                </a>
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
        </div>
        :
        <div className={classNames(styles["noneWrapper"])}>
          <h4 className={classNames(styles["smile"])}>¯\_(ツ)_/¯</h4>
          <p className={classNames(styles["text"])}>Магазины отсутствуют</p>
          <h3 className={classNames(styles["info"])}>
            Для получения магазина изучите соответствующую статью в
            <a
              href="https://gmgame.ru/articles_wiki"
              target="_blank"
              rel="noreferrer"
              className={classNames(styles["linkWiki"])}
            >
              Wiki &#10148;
            </a>
          </h3>
        </div>
      }
      <div className={classNames(styles["warnWrapper"])}>
        <Warn inf="Обновление данных с сервером происходит раз в 15 минут"/>
      </div>
    </div>
  );
}

export default ShopUser;
