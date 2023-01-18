import React from "react";

import "./One-suggestions.scss"
import OneItem from "../one-item/One-item";

const OneSuggestions = (props) => {
  return (
    <div className="one-suggestions-block">
      <OneItem id="shulker-box-item-position-00" item_name_title="Алмазоносный глубинный сланец" item_minecraft_name_id={props.currency} item_count={props.amount}/>
      <span className="arrow-suggestions">&#10132;</span>
      <OneItem id="shulker-box-item-position-00" item_name_title="Шалкеровый ящик" item_minecraft_name_id="shulker_box" item_count="1"/>
    </div>
  )
}

export default OneSuggestions;