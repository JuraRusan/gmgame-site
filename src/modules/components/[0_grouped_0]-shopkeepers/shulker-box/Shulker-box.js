import "./Shulker-box.scss";
import OneItem from "../one-item/One-item.js";

const ShulkerBox = (props) => {
  return (
    <div className="one-shulker-box-block">
      {props.content.map((el, i) => {
        return (
          <OneItem
            item_name_title="Песок"
            item_minecraft_name_id={el.id}
            item_count={el.count}/>
        )
      })}
    </div>
  );
};

export default ShulkerBox;