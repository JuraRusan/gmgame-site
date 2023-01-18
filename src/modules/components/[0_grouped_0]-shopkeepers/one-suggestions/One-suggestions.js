import React from "react";

import "./One-suggestions.scss"
import OneItem from "../one-item/One-item";

const OneSuggestions = () => {
  return (
    <div className="one-suggestions-block">
      <OneItem id="shulker-box-item-position-00" item_name_title="Алмазоносный глубинный сланец" item_minecraft_name_id="deepslate_diamond_ore" item_count="12"/>
      <span className="arrow-suggestions">&#10132;</span>
      <OneItem id="shulker-box-item-position-00" item_name_title="Шалкеровый ящик" item_minecraft_name_id="shulker_box" item_count="1"/>
    </div>
  )
}

export default OneSuggestions;