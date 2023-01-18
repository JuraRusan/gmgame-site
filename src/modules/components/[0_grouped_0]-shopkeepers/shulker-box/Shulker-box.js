import React from "react";

import "./Shulker-box.scss";
import OneItem from "../one-item/One-item.js";
import OneItemNone from "../one-item/One-item-none.js";

const ShulkerBox = (props) => {
  return (
    <div className="one-shulker-box-block">
      {props.content.map((el, i) => {
        return(
          <>
            <OneItem id="shulker-box-item-position-00" item_name_title="Песок" item_minecraft_name_id={el.id} item_count={el.count} />
          </>
        )
        if (i < 26) {
          <OneItemNone id="shulker-box-item-position-26" />
        }
      })}
    </div>
  );
};

export default ShulkerBox;
