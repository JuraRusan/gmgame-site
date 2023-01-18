import React from "react";

import "./Shopkeepers.scss";
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";

const Shopkeepers = () => {

  return (
    <div className="main-shopkeepers-block">
      <h4 className="title-shop-h4 font-custom-2">Товары игроков сервера</h4>
      <div className="shop-block-center">
        <div className="shop-all-suggestions">
          <OneSuggestions/>
        </div>
        <div className="shop-one-suggestions"><ShulkerBox/></div>
      </div>
    </div>
  );
};

export default Shopkeepers;
