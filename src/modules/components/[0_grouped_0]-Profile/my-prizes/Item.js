import classNames from "classnames";
import React, {useEffect, useState} from "react";

import styles from "./My-prizes.module.scss";

const Item = (props) => {

  const [indexItem, setIndexItem] = useState(0);
  const picturesItem = ["../site_assets/minecraft-item/png/netherite_pickaxe.png", "../site_assets/minecraft-item/png/netherite_axe.png", "../site_assets/minecraft-item/png/netherite_hoe.png", "../site_assets/minecraft-item/png/netherite_shovel.png"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexItem((prevIndex) => (prevIndex + 1) % picturesItem.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [picturesItem.length]);

  return (
    <div className={classNames(styles["onePrizesWrapperBox"])}>
      <div className={classNames(styles["imgBlock"])}>
        <div className={classNames(styles["animationBackground"])}>
          {picturesItem.map((picture, i) => (
            <img
              key={i}
              src={picture}
              alt=" "
              className={classNames(styles["fade"], i === indexItem ? styles["active"] : "")}
            />
          ))}
        </div>
      </div>
      <div className={classNames(styles["prizesDescription"])}>
        <h5 className={classNames(styles["textInformationH5"])}>Получение инструмента со случайными зачарованиями</h5>
        <button className={classNames(styles["pick"])} onClick={(event) => props.action(props.id, event)}>Забрать</button>
      </div>
    </div>
  );
};

export default Item;
