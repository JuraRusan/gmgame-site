import React from "react";

import "./My-prizes.scss";

const MyPrizes = () => {


  return (
    <div className="box-prizes">
      <h4 className="prizes-h4 font-custom-2">У Вас 100500 выигрышей</h4>
      <div className="one-prizes">
        <div className="img-block">
          <div className="animation-bg"></div>
        </div>
        <div className="prizes-all">
          <h5 className="text-h5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet non omnis provident quaerat quibusdam
            quos rem tempora, voluptas. Aperiam dolorum enim fugit in magnam nisi quisquam vel veritatis voluptas!</h5>
          <button className="pick">Забрать</button>
        </div>
      </div>
    </div>
  );
};

export default MyPrizes;
