import React from "react";

import "./Item.scss";

const Item = (props) => {
  return (
    <div className="one-prizes">
      <div className="img-block">
        <div className="animation-bg-item"></div>
      </div>
      <div className="prizes-all">
        <h5 className="text-h5">Получение инструмента со случайными зачарованиями</h5>
        <button className="pick" onClick={(event) => props.action(props.id, event)}>Забрать</button>
      </div>
    </div>
  );
};

export default Item;
