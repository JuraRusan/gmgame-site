import React from "react";

import "./Money.scss";

const Money = (props) => {
  return (
    <div className="one-prizes">
      <div className="img-block">
        <div className="animation-bg-money"></div>
      </div>
      <div className="prizes-all">
        <h5 className="text-h5">Пополнение внутриигрового виртуального баланса</h5>
        <button className="pick" onClick={(event) => props.action(props.id, event)}>Забрать</button>
      </div>
    </div>
  );
};

export default Money;
