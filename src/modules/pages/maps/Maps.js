import React from "react";
import classNames from "classnames";
import Title from "../../components/title/Title";
import Link from "../../components/link/Link";

import styles from "./Maps.module.scss";

const Maps = () => {
  return (
    <div className={classNames(styles["maps"])}>
      <Title>Уникальная web-онлайн карта</Title>
      <p className={classNames(styles["text"])}>
        Обновления карты плавающий, обновление запускается в течении 30 минут после предыдущего обновления. (Статус
        обновления можно видеть в углу карты)
      </p>
      <div className={classNames(styles["link_wrapper"])}>
        <Link href="https://map.gmgame.ru/" target="_blank" rel="noreferrer">
          Открыть в новом окне
        </Link>
      </div>
      <div className={classNames(styles["preview"])}>
        <iframe title="map" src="https://map.gmgame.ru/" width="100%" height="100%" />
      </div>
    </div>
  );
};

export default Maps;
