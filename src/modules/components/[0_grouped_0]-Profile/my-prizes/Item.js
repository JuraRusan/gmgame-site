import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Button from "../../button/Button";
import ConfirmModal from "../../confirm-modal/ConfirmModal";

import styles from "./My-prizes.module.scss";

const PICTURES = [
  process.env.PUBLIC_URL + "/site_assets/items/netherite_pickaxe.webp",
  process.env.PUBLIC_URL + "/site_assets/items/netherite_axe.webp",
  process.env.PUBLIC_URL + "/site_assets/items/netherite_hoe.webp",
  process.env.PUBLIC_URL + "/site_assets/items/netherite_shovel.webp",
];

const Item = (props) => {
  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const [indexItem, setIndexItem] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexItem((prevIndex) => (prevIndex + 1) % PICTURES.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [PICTURES.length]);

  return (
    <div className={classNames(styles["prize_wrapper_container"])}>
      <div className={classNames(styles["image_container"])}>
        <div className={classNames(styles["animation_image"])}>
          {PICTURES.map((picture, i) => (
            <img
              key={i}
              src={picture}
              alt=""
              className={classNames(styles["fade"], {
                [styles["active"]]: i === indexItem,
              })}
            />
          ))}
        </div>
      </div>
      <div className={classNames(styles["description"])}>
        <h5 className={classNames(styles["information"])}>получение инструмента со случайными зачарованиями</h5>
        <div className={classNames(styles["btn_wrapper"])}>
          <Button label="Забрать" view="submit" onClick={() => setIsConfirmActive(true)} />
          <ConfirmModal
            message="Подтвердите действие «Забрать»"
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={(event) => props.action(props.id, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
