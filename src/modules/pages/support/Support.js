import React, {useEffect} from "react";
import AOS from "aos";

import "./Support.scss";
import "aos/dist/aos.css";
import Image7 from "../../../bases/assets/7.png";
import SuperHub from "../../../bases/assets/SuperHub.webp";

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-support" data-aos="fade-up">
      <div className="support">
        <h4 className="title-support font-custom-2">Поддержать проект</h4>
        <div className="don-block">
          <div className="text">
            <p className="sub-title-support">Сервер GMGame работает уже больше двух лет. За это время на сервере были построены разнообразные и и масштабные проекты, проведены различные ивенты и праздники, сервер приобрел множество друзей, соратников и подарил множество эмоций разным людям.</p>
            <p className="sub-title-support">Благодаря этим людям сервер живет и позволяет комфортно играть без лагов и читеров. Мы стараемся каждый день улучшить игровой опыт на сервере и будем признательны за любую помощь, если у вас есть возможность помогать серверу любым способом, пожалуйста, воспользуйтесь ей.</p>
            <p className="sub-title-support">На пожертвования уже куплено мощное железо для сервера, источник бесперебойного питания и множество плагинов для комфортной игры. Спасибо всем игрокам, без вашей поддержки не было бы сервера GMGame.</p>
            <div className="link">
              <a target="_blank" className="support-link" href="https://new.donatepay.ru/@gmgame">- Донатом &#129133;</a>
              <a target="_blank" className="support-link" href="https://hotmc.ru/casino-205185">- Розыгрыш на мониторинге (HotMC) &#129133;</a>
              <a target="_blank" className="support-link" href="https://discord.gg/AesVsdPsFj">- Проголосовать на мониторингах &#129133;</a>
            </div>
            <h5 className="footer-support">Спасибо! Ваша поддержка очень важна. &#129392;</h5>
          </div>
          <div className="img-block-wight">
            <img className='info-img-wight' src={Image7} alt=""/>
          </div>
        </div>
        <div className="monitoring-block" data-aos="fade-up">
          <h4 className="block-title-sp font-custom-2">Мы на мониторингах</h4>
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
        <div className="partner-block" data-aos="fade-up">
          <h4 className="block-title-sp font-custom-2">Наши партнеры</h4>
          <div className="superHub">
            <div className="logo-line-1">
              <img className="superhub-logo" src={SuperHub} alt=""/>
            </div>
            <div className="logo-line-2">
              <h4 className="name font-custom-2">Hosting Superhub</h4>
              <h5 className="sub-name">Дешёвый и надёжный хостинг для Minecraft серверов.</h5>
              <a className="support-link font-custom-2" target="_blank" href="https://superhub.host/referral/c45b819b">Hosting Superhub &#129133;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
