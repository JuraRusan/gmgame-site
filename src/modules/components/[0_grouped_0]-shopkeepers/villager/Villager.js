import classNames from "classnames";
import React from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Villager.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Villager = (props) => {

  const shopVillagerInfo = props.shop

  return (
    <div className={classNames(styles["villager"])}>
      <div className={classNames(styles["villagerInfo"])}>
        <h4 className={classNames(styles["styleH4"])}>Владелец:
          <span className={classNames(styles["color"])}>{shopVillagerInfo.ownerName}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Название:
          {shopVillagerInfo.name === ""
            ? <span className={classNames(styles["red"])}> - </span>
            : <span className={classNames(styles["color"])}>{shopVillagerInfo.name}</span>
          }
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Discord:
          <span className={classNames(styles["color"])}>Неизвестно</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Расположение:</h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Х:
          <span className={classNames(styles["color"])}>{shopVillagerInfo.coordinatesX}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Y:
          <span className={classNames(styles["color"])}>{shopVillagerInfo.coordinatesY}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"], styles["left"])}>Z:
          <span className={classNames(styles["color"])}>{shopVillagerInfo.coordinatesZ}</span>
        </h4>
        <h4 className={classNames(styles["styleH4"])}>Осталось предметов в наличии:
          {/*{shopVillagerInfo.remainder < 1*/}
          {/*  ? <span className={classNames(styles["red"])}>0</span>*/}
          {/*  : <span className={classNames(styles["color"])}>{shopVillagerInfo.remainder}</span>*/}
          {/*}*/}
          <span className={classNames(styles["color"])}>Неизвестно</span>
        </h4>
      </div>
      <div className={classNames(styles["villagerImage"])}>
        <LazyLoadImage
          effect="blur"
          className={classNames(styles["wrapper"])}
          src={`./site_assets/villager/${shopVillagerInfo.villagerType}_${shopVillagerInfo.profession}.webp`}
          width="auto"
          height="100%"
          alt="none"
        />
      </div>
    </div>
  );
};

export default Villager;