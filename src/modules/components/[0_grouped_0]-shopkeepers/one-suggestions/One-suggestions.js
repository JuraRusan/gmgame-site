import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item";
import OneItemNone from "../one-item/One-item-none";

import styles from "./One-suggestions.module.scss"

const OneSuggestions = (props) => {

  const itemOne = props.itemOne
  const itemTwo = props.itemTwo
  const itemRes = props.itemRes

  return (
    <div className={classNames(styles["one_suggestions_block"])}>
      <div className={classNames(styles["double_block"])}>
        {itemOne.type_ru === undefined
          ?
          <OneItemNone/>
          :
          <OneItem item={itemOne} onClick={props.onClickOne}/>
        }
        {itemTwo.type_ru === undefined
          ?
          <OneItemNone/>
          :
          <OneItem item={itemTwo} onClick={props.onClickTwo}/>
        }
      </div>
      <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
      {itemRes.type_ru === undefined
        ?
        <OneItemNone/>
        :
        <OneItem item={itemRes} onClick={props.onClickRes}/>
      }
    </div>
  )
}

export default OneSuggestions;