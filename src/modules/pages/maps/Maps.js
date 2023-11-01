import React from "react";

import "./Maps.scss";

const Maps = () => {
  return (
    <div className="main-maps">
      <div className="maps">
        <h4 className="maps-title font-custom-2">Уникальная web-онлайн карта</h4>
        <h5 className="maps-sub-title">Обновления карты плавающий, обновление запускается в течении 10 минут после предыдущего обновления. (Статус обновления можно видеть в углу карты)</h5>
        <a className="link-btn-map" rel="noreferrer" href="https://map.gmgame.ru/" target="_blank">Открыть в новом окне &#10148;</a>
        <div className="prev-map-page" data-aos="zoom-in">
          <iframe title="map" src="https://map.gmgame.ru/" width="100%" height="100%"/>
        </div>
      </div>
    </div>
  );
};

export default Maps;
