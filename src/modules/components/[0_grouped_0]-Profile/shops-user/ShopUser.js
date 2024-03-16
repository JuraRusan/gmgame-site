import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Notifications from "../../notifications/Notifications";
import useLoading from "../../../loading/useLoading";
import {useAxios} from "../../../../DataProvider";
import Preload from "../../preloader/Preload";
import axios from "axios";

import styles from "./ShopUser.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const LAST = [{
  "owner": "none",
  "last_seen": 1695490743555,
  "villager": []
}]

const ShopUser = () => {

  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  const isLoading = useLoading();
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const [dataUserShop, setDataUserShop] = useState([])

  useEffect(() => {
    axios.get("https://map.gmgame.ru/api/cab_shop_user").then((res) => {
      setDataUserShop(res.data.data)
    })
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>
  }

  const userName = resParams.data.user.username
  const userShopDataFilter = dataUserShop.filter((fill) => fill.owner === userName);

  function FunData() {
    if (!userShopDataFilter || userShopDataFilter.length === 0) {
      return LAST;
    } else {
      return userShopDataFilter;
    }
  }

  const userShopData = FunData()

  const unixTime = userShopData[0].last_seen;
  const unixTimeDrop = userShopData[0].last_seen + 2592000000;

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

    return `${throughString} ${days > 0 ? `${formattedDays}, ` : ''}${hours > 0 ? `${formattedHours}, ` : ''}${minutes > 0 ? `${formattedMinutes}, ` : ''}${formattedSeconds} ${backString}`;
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

      return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
    };

    return convertUnixTime(unixTime);
  };

  return (
    <div className={classNames(styles["shop_wrapper"])}>
      {userShopData[0].owner === "none"
        ?
        null
        :
        <div className={classNames(styles["user_info"])}>
          <h4 className={classNames(styles["text_line"])}>Последнее посещение игрового сервера:
            <span>{convertUnixTime(unixTime, 'seen')} ( <UnixTimeConverter unixTime={unixTime}/> )</span>
          </h4>
          <h4 className={classNames(styles["text_line"])}>Всего магазинов:
            <span>{userShopData[0].villager.length}/6</span>
          </h4>
          {userShopData[0].villager.length === 0
            ?
            null
            :
            <h4 className={classNames(styles["text_line"])}>Оставшееся время к удалению:
              <span>{convertUnixTime(unixTimeDrop, 'drop')} ( <UnixTimeConverter unixTime={unixTimeDrop}/> )</span>
            </h4>
          }
          <div className={classNames(styles["wrapper_warn"])}>
            <Notifications
              inf="Магазины автоматически удаляются если игрока нету больше чем 30 дней на основном сервере"
              type="warn"/>
          </div>
        </div>
      }
      {userShopData[0].owner === "none"
        ?
        <div className={classNames(styles["none_box"])}>
          <h4 className={classNames(styles["smile"])}>¯\_(ツ)_/¯</h4>
          <p className={classNames(styles["text"])}>Магазины отсутствуют</p>
          <h3 className={classNames(styles["info"])}>
            Для получения магазина изучите соответствующую статью в
            <a
              href="https://wiki.gmgame.ru/books/gaidy/page/instrukciia-po-sozdaniiu-magazina"
              target="_blank"
              rel="noreferrer"
              className={classNames(styles["link_wiki"])}
            >
              Wiki &#10148;
            </a>
          </h3>
        </div>
        :
        <div className={classNames(styles["all_shop"])}>
          {userShopData[0].villager.map((el, index) => (
            <div className={classNames(styles["one_shop_wrapper"])} key={index}>
              <div className={classNames(styles["description_box"])}>
                <h4 className={classNames(styles["text"])}>Название:
                  {el.name === ""
                    ?
                    <span className={classNames(styles["span_style"], styles["err"])}>-</span>
                    :
                    <span className={classNames(styles["span_style"])}>{el.name}</span>
                  }
                </h4>
                <h4 className={classNames(styles["text"])}>X:
                  <span className={classNames(styles["span_style"])}>{el.x}</span>
                </h4>
                <h4 className={classNames(styles["text"])}>Y:
                  <span className={classNames(styles["span_style"])}>{el.y}</span>
                </h4>
                <h4 className={classNames(styles["text"])}>Z:
                  <span className={classNames(styles["span_style"])}>{el.z}</span>
                </h4>
                <a
                  href={`https://gmgame.ru/shopkeepers?scrollTo=scroll_${el.shop_id}`}
                  target="_blank"
                  rel="noreferrer"
                  className={classNames(styles["link_offers"])}
                >
                  Перейти к сделкам &#10148;
                </a>
              </div>
              <div className={classNames(styles["villager_image"])}>
                <LazyLoadImage
                  effect="blur"
                  src={`../site_assets/villager/${el.object_villager_type}_${el.object_profession}.webp`}
                  width="auto"
                  height="100%"
                  alt="none"
                />
              </div>
            </div>
          ))}
        </div>
      }
      <div className={classNames(styles["warn_box"])}>
        <Notifications inf="Обновление данных с сервером происходит раз в 15 минут" type="warn"/>
      </div>
    </div>
  );
}

export default ShopUser;
