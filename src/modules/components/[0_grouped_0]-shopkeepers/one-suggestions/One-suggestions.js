import React from "react";

import "./One-suggestions.scss"
import OneItem from "../one-item/One-item";

const OneSuggestions = (props) => {

  return (
    <div className="one-suggestions-block">
      <OneItem
        item_name_title="Алмазоносный глубинный сланец"
        item_minecraft_name_id={props.currency}
        item_count={props.amount}
        onClick={props.onClick}/>
      <span className="arrow-suggestions">&#10132;</span>
      <OneItem
        item_name_title="Шалкеровый ящик"
        item_minecraft_name_id={props.name}
        item_count="1"
        onClick={props.onClick}/>
    </div>
  )
}

export default OneSuggestions;