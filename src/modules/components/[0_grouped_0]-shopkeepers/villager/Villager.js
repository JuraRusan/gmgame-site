import classNames from "classnames";
import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Villager.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Villager = ({shop}) => {
  return (
    <div className={classNames(styles["villager"])}>
      <div className={classNames(styles["villagerInfo"])}>
        <h4 className={classNames(styles["styleH4"])}>Владелец:
          <span className={classNames(styles["color"])}>{shop.ownerName}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Название:
          {shop.name === ""
            ? <span className={classNames(styles["red"])}> - </span>
            : <span className={classNames(styles["color"])}>{shop.name}</span>
          }
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Discord:
          <span className={classNames(styles["color"])}>Неизвестно</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Расположение:</h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Х:
          <span className={classNames(styles["color"])}>{shop.coordinatesX}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Y:
          <span className={classNames(styles["color"])}>{shop.coordinatesY}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Z:
          <span className={classNames(styles["color"])}>{shop.coordinatesZ}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Осталось предметов в наличии:
          {/*{shop.remainder < 1*/}
          {/*  ? <span className={classNames(styles["red"])}>0</span>*/}
          {/*  : <span className={classNames(styles["color"])}>{shop.remainder}</span>*/}
          {/*}*/}
          <span className={classNames(styles["color"])}>Неизвестно</span>
        </h4>
      </div>
      <div className={classNames(styles["villagerImage"])}>
        <LazyLoadImage
          effect="blur"
          className={classNames(styles["wrapper"])}
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