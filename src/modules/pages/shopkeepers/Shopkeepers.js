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
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
          <OneSuggestions/>
        </div>
        <div className="shop-one-suggestions">
          <div className="prew-shulker">
            <ShulkerBox/>
          </div>
          <div className="villager-shop-info">
            <div className="villager-info">
              <h4 className="h4-style">Владелец: <span className="span-custom-color font-custom-2">SoftPanda3</span></h4>
              <h4 className="h4-style">Расположение:</h4>
              <h4 className="h4-style h4-margin-left">Х: <span className="span-custom-color font-custom-2">12345</span></h4>
              <h4 className="h4-style h4-margin-left">Y: <span className="span-custom-color font-custom-2">12345</span></h4>
              <h4 className="h4-style h4-margin-left">Z: <span className="span-custom-color font-custom-2">12345</span></h4>
              <h4 className="h4-style">Осталось предметов в наличии: <span className="span-custom-color font-custom-2">12345</span></h4>
            </div>
            <div className="villager-img">
              <h2 className="villager-nameplate">Кузнечный магазин</h2>
              <img className="margin-top-img" src="./site_assets/villager/webp/Savanna_Fisherman.webp" width="100%" height="100%" alt="none"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopkeepers;
