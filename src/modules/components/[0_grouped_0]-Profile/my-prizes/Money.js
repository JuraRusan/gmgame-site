import classNames from "classnames";
import React, {useEffect, useState} from "react";

import styles from "./My-prizes.module.scss";

const Money = (props) => {

  const [indexMoney, setIndexMoney] = useState(0);
  const picturesMoney = ["../site_assets/minecraft-item/png/deepslate_diamond_ore.png", "../site_assets/minecraft-item/png/deepslate_emerald_ore.png", "../site_assets/minecraft-item/png/deepslate_gold_ore.png", "../site_assets/minecraft-item/png/deepslate_redstone_ore.png"];

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
        <button className={classNames(styles["pick"])} onClick={(event) => props.action(props.id, event)}>Забрать</button>
      </div>
    </div>
  );
};

export default Money;
