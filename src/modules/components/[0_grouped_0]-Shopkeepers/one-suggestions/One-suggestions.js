import React from "react";
import OneItem from "../one-item/One-item";

import styles from "./One-suggestions.module.scss";

const OneSuggestions = ({ itemOne, itemTwo, itemRes, onClickOne, onClickTwo, onClickRes }) => {
  return (
    <div className={styles["one_suggestions_block"]}>
      <div className={styles["double_block"]}>
        {!itemOne.id ? <OneItem /> : <OneItem item={itemOne} onClick={onClickOne} />}
        {!itemTwo.id ? <OneItem /> : <OneItem item={itemTwo} onClick={onClickTwo} />}
      </div>
      <span className={styles["arrow_suggestions"]}>&#10132;</span>
      {!itemRes.id ? <OneItem /> : <OneItem item={itemRes} onClick={onClickRes} />}
    </div>
  );
};

export default OneSuggestions;
