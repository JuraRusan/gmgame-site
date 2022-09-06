import React from "react";
import Item from "../item/Item.js";
import Money from "../money/Money.js";

import "./My-prizes.scss";

const MyPrizes = () => {
  return (
    <div className="box-prizes">
      <h4 className="prizes-h4">У Вас 100500 выигрышей</h4>
      {/*<h4 className="prizes-h4">У Вас нету выигрышей, примите участие в розыгрыше на мониторинге</h4>*/}
      <div className="all-prizes">
        <div className="one-prizes">
          <div className="img-block">
            <Item/>
          </div>
          <div className="prizes-all">
            <h5 className="text-h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet non omnis
              provident quaerat quibusdam quos rem tempora, voluptas. Aperiam dolorum enim fugit in magnam nisi quisquam
              vel veritatis voluptas!</h5>
            <button className="pick">Забрать</button>
          </div>
        </div>
        <div className="one-prizes">
          <div className="img-block">
            <Money/>
          </div>
          <div className="prizes-all">
            <h5 className="text-h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet non omnis
              provident quaerat quibusdam quos rem tempora, voluptas. Aperiam dolorum enim fugit in magnam nisi quisquam
              vel veritatis voluptas!</h5>
            <button className="pick">Забрать</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPrizes;
