import React, {useEffect} from "react";
import AOS from "aos";

import "./Maps.scss";
import "aos/dist/aos.css";

const Maps = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-maps" data-aos="fade-up">
      <div className="maps">
        <h4 className="maps-title">Уникальная web-онлайн карта</h4>
        <h5 className="maps-sub-title">Обновления карты плавающий, обновление запускается в
          течении 10 минут после предыдущего
          обновления. (Статус обновления можно видеть в углу карты)</h5>
        <a className="link-btn-map" href="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" target="_blank">Открыть
          в новом окне</a>
        <div className="prev-map-page">
          <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" width="100%"
                  height="100%"/>
        </div>
      </div>
    </div>
  );
};

export default Maps;
