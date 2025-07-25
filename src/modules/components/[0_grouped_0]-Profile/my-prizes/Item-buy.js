import cN from "classnames";
import React, { useState } from "react";
import Button from "../../button/Button";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import Notifications from "../../notifications/Notifications";

import styles from "./My-prizes.module.scss";

const DEFAULT_ENCHANTMENTS = {
  mending: { lv: 1, name: "Починка" },
  soul_speed: { lv: 3, name: "Скорость души" },
  protection: { lv: 4, name: "Защита" },
  projectile_protection: { lv: 4, name: "Защита от снарядов" },
  bane_of_arthropods: { lv: 5, name: "Бич членистоногих" },
  quick_charge: { lv: 3, name: "Быстрая перезарядка" },
  depth_strider: { lv: 3, name: "Подводная ходьба" },
  silk_touch: { lv: 1, name: "Шёлковое касание" },
  unbreaking: { lv: 3, name: "Прочность" },
  wind_burst: { lv: 3, name: "Порыв ветра" },
  blast_protection: { lv: 4, name: "Взрывоустойчивость" },
  channeling: { lv: 1, name: "Громовержец" },
  fire_aspect: { lv: 2, name: "Заговор огня" },
  flame: { lv: 1, name: "Воспламенение" },
  punch: { lv: 2, name: "Откидывание" },
  riptide: { lv: 3, name: "Тягун" },
  breach: { lv: 4, name: "Пробитие" },
  efficiency: { lv: 5, name: "Эффективность" },
  fire_protection: { lv: 4, name: "Огнеупорность" },
  piercing: { lv: 4, name: "Пронзающая стрела" },
  power: { lv: 5, name: "Сила" },
  density: { lv: 5, name: "Плотность" },
  sweeping_edge: { lv: 3, name: "Разящий клинок" },
  sharpness: { lv: 5, name: "Острота" },
  loyalty: { lv: 3, name: "Верность" },
  feather_falling: { lv: 4, name: "Невесомость" },
  aqua_affinity: { lv: 1, name: "Подводник" },
  luck_of_the_sea: { lv: 3, name: "Везучий рыбак" },
  infinity: { lv: 1, name: "Бесконечность" },
  fortune: { lv: 3, name: "Удача" },
  impaling: { lv: 5, name: "Пронзатель" },
  looting: { lv: 3, name: "Добыча" },
  smite: { lv: 5, name: "Небесная кара" },
  swift_sneak: { lv: 3, name: "Проворство" },
  respiration: { lv: 3, name: "Подводное дыхание" },
  multishot: { lv: 1, name: "Тройной выстрел" },
  frost_walker: { lv: 2, name: "Ледоход" },
  knockback: { lv: 2, name: "Отдача" },
  lure: { lv: 3, name: "Приманка" },
  thorns: { lv: 3, name: "Шипы" },
  curse_of_vanishing: { lv: 1, name: "Проклятие утраты" },
  curse_of_binding: { lv: 1, name: "Проклятие несъёмности" },
};

const ItemBuy = ({ item }) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const enchantments = !item.enchantments ? [] : Object.keys(item.enchantments);

  const image = () => {
    let src = "";
    if (item.type === "item") src = process.env.PUBLIC_URL + `/site_assets/items/${item.id}.webp`;
    if (item.type === "perms") src = process.env.PUBLIC_URL + `/site_assets/items/tipped_arrow_wind_charged.webp`;

    return src;
  };

  return (
    <div className={cN(styles["prize_wrapper_container"], styles["pink"])}>
      <div className={styles["image_container"]}>
        <div className={styles["animation"]}>
          <img src={image()} alt="" className={cN(styles["fade"], styles["active"])} />
        </div>
      </div>
      <span className={styles["price"]}>{item.amount} монет</span>
      <div className={styles["description"]}>
        <div className={styles["custom_text"]}>
          <p className={styles["name"]}>{item.name}</p>
          {!item.enchantments ? null : (
            <ul className={styles["list_container"]}>
              {enchantments.map((el, i) => (
                <li className={styles["list"]}>
                  &#8226; {DEFAULT_ENCHANTMENTS[el].name} - {item.enchantments[el]} (v.{DEFAULT_ENCHANTMENTS[el].lv})
                </li>
              ))}
            </ul>
          )}
          {!item.comment ? null : <p className={styles["information"]}>{item.comment}</p>}
        </div>
        <p className={styles["information"]}>
          {item.type === "item"
            ? "покупка предмета из фиксированым зачарованием"
            : "покупка дополнения производится навсегда"}
        </p>
      </div>
      <div className={styles["btn_wrapper"]}>
        <Button label="Купить" view="submit" onClick={() => setIsConfirmActive(true)} />
        <ConfirmModal
          children={
            <Notifications
              inf="Для получения предмета необходимо находиться онлайн на основном сервере!"
              type="warn"
              format="center"
            />
          }
          time={10000}
          message="Подтвердите действие «Купить»"
          open={isConfirmActive}
          close={() => setIsConfirmActive(false)}
          no={() => setIsConfirmActive(false)}
          yes={() => console.log("успех")}
        />
      </div>
    </div>
  );
};

export default ItemBuy;
