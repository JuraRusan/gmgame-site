import classNames from "classnames";
import React, {useEffect, useState} from "react";
import Button from "../../button/Button";

import styles from "./My-prizes.module.scss";

const Money = (props) => {

  const [indexMoney, setIndexMoney] = useState(0);
  const picturesMoney = ["../site_assets/minecraft-item/deepslate_diamond_ore.webp", "../site_assets/minecraft-item/deepslate_emerald_ore.webp", "../site_assets/minecraft-item/deepslate_gold_ore.webp", "../site_assets/minecraft-item/deepslate_redstone_ore.webp"];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexMoney((prevIndex) => (prevIndex + 1) % picturesMoney.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [picturesMoney.length]);

  return (
    <div className={classNames(styles["onePrizesWrapperBox"])}>
      <div className={classNames(styles["imgBlock"])}>
        <div className={classNames(styles["animationBackground"])}>
          {picturesMoney.map((picture, i) => (
            <img
              key={i}
              src={picture}
              alt=" "
              className={classNames(styles["fade"], i === indexMoney ? styles["active"] : "")}
            />
          ))}
        </div>
      </div>
      <div className={classNames(styles["prizesDescription"])}>
        <h5 className={classNames(styles["textInformationH5"])}>Пополнение внутриигрового виртуального баланса</h5>
        <div className={classNames(styles["btn_wrapper"])}>
          <Button
            label="Забрать"
            view="submit"
            onClick={(event) => props.action(props.id, event)}
          />
        </div>
      </div>
    </div>
  );
};

export default Money;
