import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Button from "../../button/Button";

import styles from "./My-prizes.module.scss";

const Item = (props) => {
  const [indexItem, setIndexItem] = useState(0);
  const picturesItem = [
    "../site_assets/items/netherite_pickaxe.webp",
    "../site_assets/items/netherite_axe.webp",
    "../site_assets/items/netherite_hoe.webp",
    "../site_assets/items/netherite_shovel.webp",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexItem((prevIndex) => (prevIndex + 1) % picturesItem.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [picturesItem.length]);

  return (
    <div className={classNames(styles["prize_wrapper_container"])}>
      <div className={classNames(styles["img_block"])}>
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
        <div className={classNames(styles["btn_wrapper"])}>
          <Button label="Забрать" view="submit" onClick={(event) => props.action(props.id, event)} />
        </div>
      </div>
    </div>
  );
};

export default Item;
