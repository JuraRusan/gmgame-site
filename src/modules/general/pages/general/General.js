import React, { useEffect } from "react";
import AOS from "aos";

import "./General.scss";
import "aos/dist/aos.css";

import Button from "../../../../modules/general/components/button/Button.js";
import SvgFilles1 from "../../../../common/icons/SvgFilles1.js";
import SvgFilles2 from "../../../../common/icons/SvgFilles2.js";
import SvgFilles3 from "../../../../common/icons/SvgFilles3.js";


const General = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="main">
      <div className="row-1" data-aos="fade-down">
        <div className="lin-top"></div>
        <div className="main-content">
          <h1 className="main-h1 font-custom-1">
            <span className="colored-title-span-1">G</span>
            <span className="colored-title-span-2">M</span>GAME
          </h1>
          <h3 className="main-h3">
            Бесплатный строительно-выживательный сервер.
          </h3>
          <h3 className="main-h3">Без приватов и донат магазина.</h3>
          <div className="button-container">
            <Button />
          </div>
        </div>
        <div className="lin-bot"></div>
      </div>
      <div className="row-2" >
        <div className="content-info" data-aos="fade-up">
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-left">Концепция</h2>
            <h4 className="h4-info h4-left">
              Мы строительный сервер, на котором каждый может реализовать свои
              творческие идеи. Игроки не только строят красивые здания и города,
              но и реализуют себя в строительстве ферм и механизмов. Архитектор,
              механизмер, копатель, добытчик – каждый найдёт себе место у нас.
            </h4>
          </div>
          <div className="info-img">
            <SvgFilles1 />
          </div>
        </div>
        <div className="content-info" data-aos="fade-up">
          <div className="info-img">
            <SvgFilles2 />
          </div>
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-right">Комьюнити</h2>
            <h4 className="h4-info h4-right">
              Здесь поддерживается дружеская атмосфера, токсики и неадекваты не
              задерживаются надолго. Каждый найдёт себе друга или даже соберет
              целую команду.
            </h4>
          </div>
        </div>
        <div className="content-info" data-aos="fade-up">
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-left">Игровой процесс</h2>
            <h4 className="h4-info h4-left">
              На сервере нет приватов, однако вы всегда находитесь под защитой
              администрации. Гриф и воровство запрещены, но даже если это
              случится, каждый игрок может рассчитывать на помощь модераторов.
              Сервер оснащен плагинами, повышающими комфортность игры и, вместе
              с тем, позволяющими не потерять полуванильный облик игрового
              процесса.
            </h4>
          </div>
          <div className="info-img">
            <SvgFilles3 />
          </div>
        </div>
      </div>
      <div className="row-3"></div>
      <div className="row-4"></div>
    </div>
  );
};

export default General;
