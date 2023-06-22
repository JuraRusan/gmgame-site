import classNames from "classnames";
import React from "react";
import OneItem from "../one-item/One-item";
import OneItemNone from "../one-item/One-item-none";

import styles from "./One-suggestions.module.scss"

const OneSuggestions = (props) => {

  return (
    <div className={classNames(styles["oneSuggestionsBlock"])}>
      <div className={classNames(styles["twoSuggestions"])}>
        {props.item1_type_ru === undefined
          ?
          <OneItemNone/>
          :
          <OneItem
            item_name_title={props.item1_type_ru}
            item_minecraft_name_id={props.item1_type}
            item_count={props.item1_amount}
            onClick={props.onClick1}
            contentHover={props.contentHover1}
            enchantsList={props.enchantsListItem1}
            item_minecraft_id_potion={props.item_minecraft_id_potionItem1}
            storedEnchantsList={props.storedEnchantsListItem1}
            goat_horn_instrument_type_ru={props.goat_horn_instrument_type_ruItem1}
            goat_horn_instrument_type={props.goat_horn_instrument_typeItem1}
          />
        }
        {props.item2_type_ru === undefined
          ?
          <OneItemNone/>
          :
          <OneItem
            item_name_title={props.item2_type_ru}
            item_minecraft_name_id={props.item2_type}
            item_count={props.item2_amount}
            onClick={props.onClick2}
            contentHover={props.contentHover2}
            enchantsList={props.enchantsListItem2}
            item_minecraft_id_potion={props.item_minecraft_id_potionItem2}
            storedEnchantsList={props.storedEnchantsListItem2}
            goat_horn_instrument_type_ru={props.goat_horn_instrument_type_ruItem2}
            goat_horn_instrument_type={props.goat_horn_instrument_typeItem2}
          />
        }
      </div>
      <span className={classNames(styles["arrowSuggestions"])}>&#10132;</span>
      {props.resultItem_type_ru === undefined
        ?
        <OneItemNone/>
        :
        <OneItem
          item_name_title={props.resultItem_type_ru}
          item_minecraft_name_id={props.resultItem_type}
          item_count={props.resultItem_amount}
          onClick={props.onClickR}
          contentHover={props.contentHoverR}
          enchantsList={props.enchantsListResultItem}
          item_minecraft_id_potion={props.item_minecraft_id_potionResultItem}
          storedEnchantsList={props.storedEnchantsListResultItem}
          goat_horn_instrument_type_ru={props.goat_horn_instrument_type_ruResultItem}
          goat_horn_instrument_type={props.goat_horn_instrument_typeResultItem}
        />
      }
    </div>
  )
}

export default OneSuggestions;