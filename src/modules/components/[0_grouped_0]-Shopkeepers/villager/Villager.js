import CN from "classnames";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NotificationsSvgComponent from "../../../../bases/icons/notificationsSvg/NotificationsSvg";

import styles from "./Villager.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const Stroke = ({ param = "", type, single = false, warn = false }) => {
  return (
    <div className={styles["stroke"]}>
      <span className={styles["text"]}>{type}</span>
      {single ? null : (
        <span
          className={CN(styles["text"], {
            [styles["red"]]: param === "",
            [styles["green"]]: param !== "",
          })}
        >
          {param === "" ? "-" : param}
        </span>
      )}
      {warn && <NotificationsSvgComponent width="20px" height="20px" color="#ff0000" />}
    </div>
  );
};

const Villager = ({ shop }) => {
  return (
    <div className={styles["villager_box"]}>
      <div className={styles["villager_info_block"]}>
        <Stroke type="Владелец:" param={shop.ownerName} />
        <Stroke type="Название:" param={shop.name} />
        <Stroke type="Discord:" param="Неизвестно" />
        <Stroke type="Расположение:" single={true} />
        <div className={styles["left"]}>
          <Stroke type="Х:" param={shop.coordinatesX} />
          <Stroke type="Y:" param={shop.coordinatesY} />
          <Stroke type="Z:" param={shop.coordinatesZ} />
        </div>
        <Stroke type="Осталось предметов в наличии:" param="Неизвестно" />
      </div>
      <div className={styles["image_wrapper"]}>
        <LazyLoadImage
          effect="blur"
          className={styles["image"]}
          src={`./site_assets/villager/${shop.villagerType}_${shop.profession}.webp`}
          width="auto"
          height="100%"
          alt="none"
        />
      </div>
    </div>
  );
};

export default Villager;
