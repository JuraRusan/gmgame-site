import React, {useEffect} from "react";
import AOS from "aos";

import "./Support.scss";
import "aos/dist/aos.css";

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-support" data-aos="fade-up">
      <div className="support">
        <h4 className="title-support">Поддержать проект</h4>
        <h5 className="sub-title-support">Сервер GMGame является абсолютно бесплатным. Он существует и развивается
          только за счет активных игроков,
          ламповой атмосферы и ваших пожертвований.</h5>
        <a target="_blank" className="support-link" href="https://new.donatepay.ru/@gmgame">- Донатом &#129133;</a>
        <a target="_blank" className="support-link" href="https://hotmc.ru/casino-205185">- Розыгрыш на мониторинге (HotMC) &#129133;</a>
        <a target="_blank" className="support-link" href="https://discord.gg/AesVsdPsFj">- Проголосовать на мониторингах &#129133;</a>
        <h5 className="footer-support">Спасибо! Ваша поддержка очень важна. &#129392;</h5>
        <div className="monitoring-block">
          <h4 className="monitoring-title">Мы на мониторингах:</h4>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://hotmc.ru/minecraft-server-205185">HotMC</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://mineserv.top/gmgame">MineServ</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://monitoringminecraft.ru/server/694954">Monitoring minecraft</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://minecraftrating.ru/server/gmgame/">Minecraftrating</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://mnsgame.ru/server/86">MNSgame</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://gamemonitoring.ru/minecraft/servers/662160">Gamemonitoring</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://mc-servera.net/92122">MC-servera</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://mc-monitoring.info/server/17637">MC-monitoring</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://mc-monitor.org/server/gmgame">MC-monitor</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://klauncher.ru/monitoring/server/2316">Klauncher</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://serversminecraft.ru/server/944">Serversminecraft</a>
          <a className="monitoring-card font-custom-2" target="_blank" href="https://top.grmc.su/server/2508">Top.grmc</a>
        </div>
      </div>
    </div>
  );
};

export default Support;
