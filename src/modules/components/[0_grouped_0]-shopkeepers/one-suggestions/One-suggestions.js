import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item";
import OneItemNone from "../one-item/One-item-none";

import styles from "./One-suggestions.module.scss"

const OneSuggestions = (props) => {

  return (
    <div className={classNames(styles["oneSuggestionsBlock"])}>
      <div className={classNames(styles["twoSuggestions"])}>
        {props.item1_type_ru === undefined ?
          <OneItemNone/>
          :
          <OneItem
            item_name_title={props.item1_type_ru}
            item_minecraft_name_id={props.item1_type}
            item_count={props.item1_amount}
            onClick={props.onClick1}
            contentHover={props.contentHover1}
          />
        }
        {props.item2_type_ru === undefined ?
          <OneItemNone/>
          :
          <OneItem
            item_name_title={props.item2_type_ru}
            item_minecraft_name_id={props.item2_type}
            item_count={props.item2_amount}
            onClick={props.onClick2}
            contentHover={props.contentHover2}
          />
        }
      </div>
      <span className={classNames(styles["arrowSuggestions"])}>&#10132;</span>
      <OneItem
        item_name_title={props.resultItem_type_ru}
        item_minecraft_name_id={props.resultItem_type}
        item_count={props.resultItem_amount}
        onClick={props.onClickR}
        contentHover={props.contentHoverR}
      />
    </div>
  )
}

export default OneSuggestions;