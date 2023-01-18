import React from "react";
import {useAxios} from '../../../DataProvider';
import Preload from "../../components/preloader/Preload";

import "./Shopkeepers.scss";
import ShulkerBox from "../../components/[0_grouped_0]-shopkeepers/shulker-box/Shulker-box";
import OneSuggestions from "../../components/[0_grouped_0]-shopkeepers/one-suggestions/One-suggestions.js";

const Shopkeepers = () => {
  const resParams = useAxios(
    "/api/get_shops",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload/>;
  }

  const data = resParams.data;

  return (
    <div className="main-shopkeepers-block">
      <h4 className="title-shop-h4 font-custom-2">Товары игроков сервера</h4>
      {data.map((el, index) => {
        return(
          el.offers.map(offer => {
            return (
              <div className="shop-block-center">
                <div className="shop-all-suggestions">
                  <OneSuggestions amount={offer.amount} currency={offer.currency}/>
                </div>
                <div className="shop-one-suggestions"><ShulkerBox content={offer.content}/></div>
              </div>
            );
          })
        )
      })}
    </div>
  );
};

export default Shopkeepers;
