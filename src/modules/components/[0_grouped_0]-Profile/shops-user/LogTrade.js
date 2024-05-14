import classNames from "classnames";
import React from "react";
import OneItem from "../../[0_grouped_0]-Shopkeepers/one-item/One-item";

import styles from "./LogTrade.module.scss";

const DATA_TEST = {
  1: {
    id: "1",
    shopper: "Dalandis",
    count: "1",
    date: new Date().toUTCString(),
    price: {
      slot1: {
        id: "deepslate_diamond_ore",
        improvement: "",
        amount: 32,
        content: [],
        minecraft_custom: "",
        enchant: [],
      },
      slot2: {},
    },
    product: {
      id: "elytra",
      improvement: "",
      amount: 1,
      content: [],
      minecraft_custom: "",
      enchant: [
        {
          id: "mending",
          lvl: 1,
        },
        {
          id: "unbreaking",
          lvl: 3,
        },
      ],
    },
  },
  2: {
    id: "1",
    shopper: "SoftPanda3",
    count: "4",
    date: new Date().toUTCString(),
    price: {
      slot1: {
        id: "deepslate_diamond_ore",
        improvement: "",
        amount: 32,
        content: [],
        minecraft_custom: "",
        enchant: [],
      },
      slot2: {},
    },
    product: {
      id: "sand",
      improvement: "",
      amount: 1,
      content: [],
      minecraft_custom: "",
      enchant: [],
    },
  },
  3: {
    id: "1",
    shopper: "Niksa_Viento",
    count: "2",
    date: new Date().toUTCString(),
    price: {
      slot1: {
        id: "deepslate_diamond_ore",
        improvement: "",
        amount: 1,
        content: [],
        minecraft_custom: "",
        enchant: [],
      },
      slot2: {},
    },
    product: {
      id: "glass",
      improvement: "",
      amount: 1,
      content: [],
      minecraft_custom: "",
      enchant: [],
    },
  },
};

const LogTrade = () => {
  return (
    <div className={classNames(styles["log_wrapper"])}>
      <div className={classNames(styles["one_trade"])}>
        <span className={classNames(styles["text"])}>{DATA_TEST["1"].date}</span>
        <div className={classNames(styles["items"])}>
          <OneItem customLink=".." item={DATA_TEST["1"].price.slot1} />
          <OneItem customLink=".." item={DATA_TEST["1"].price.slot1} />
          <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
          <OneItem customLink=".." item={DATA_TEST["1"].product} />
        </div>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["1"].shopper}</span>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["1"].count}х</span>
      </div>
      <div className={classNames(styles["one_trade"])}>
        <span className={classNames(styles["text"])}>{DATA_TEST["2"].date}</span>
        <div className={classNames(styles["items"])}>
          <OneItem customLink=".." item={DATA_TEST["2"].price.slot1} />
          <OneItem customLink=".." item={DATA_TEST["2"].price.slot1} />
          <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
          <OneItem customLink=".." item={DATA_TEST["2"].product} />
        </div>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["2"].shopper}</span>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["2"].count}х</span>
      </div>
      <div className={classNames(styles["one_trade"])}>
        <span className={classNames(styles["text"])}>{DATA_TEST["3"].date}</span>
        <div className={classNames(styles["items"])}>
          <OneItem customLink=".." item={DATA_TEST["3"].price.slot1} />
          <OneItem customLink=".." item={DATA_TEST["3"].price.slot1} />
          <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
          <OneItem customLink=".." item={DATA_TEST["3"].product} />
        </div>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["3"].shopper}</span>
        <span className={classNames(styles["text"], styles["w"])}>{DATA_TEST["3"].count}х</span>
      </div>
    </div>
  );
};

export default LogTrade;
