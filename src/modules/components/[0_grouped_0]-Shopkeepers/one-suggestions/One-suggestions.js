import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item";
import OneItemNone from "../one-item/One-item-none";

import styles from "./One-suggestions.module.scss";

const OneSuggestions = ({ itemOne, itemTwo, itemRes, onClickOne, onClickTwo, onClickRes }) => {
  return (
    <div className={classNames(styles["one_suggestions_block"])}>
      <div className={classNames(styles["double_block"])}>
        {itemOne.id === undefined ? <OneItemNone /> : <OneItem item={itemOne} onClick={onClickOne} />}
        {itemTwo.id === undefined ? <OneItemNone /> : <OneItem item={itemTwo} onClick={onClickTwo} />}
      </div>
      <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
      {itemRes.id === undefined ? <OneItemNone /> : <OneItem item={itemRes} onClick={onClickRes} />}
    </div>
  );
};

export default OneSuggestions;
