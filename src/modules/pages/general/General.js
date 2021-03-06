import React, { useEffect } from "react";
import AOS from "aos";

import "./General.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import Button from "../../../modules/components/button/Button.js";
import Mode from "../../../modules/components/mode/Mode.js";
import World from "../../../modules/components/world/World.js";
import SvgHoverMe from "../../../bases/icons/SvgHoverMe.js";
import Image1 from "../../../bases/assets/1.png";
import Image2 from "../../../bases/assets/2.png";
import Image3 from "../../../bases/assets/3.png";
import Image4 from "../../../bases/assets/4.png";
import Image5 from "../../../bases/assets/5.png";
import Image6 from "../../../bases/assets/6.png";

const General = () => {

  useEffect(() => { AOS.init({ duration: 1000 });}, []);

  const serverInformation1 = "Бесплатный строительно-выживательный сервер.";
  const serverInformation2 = "Без приватов и донат магазина.";

  const serverBlockTitleConcept = "Концепция";
  const serverBlockTitleCommunity = "Комьюнити";
  const serverBlockTitleGameProcess = "Игровой процесс";
  const serverConcept = "Мы строительный сервер, на котором каждый может реализовать свои творческие идеи.Игроки не только строят красивые здания и города, но и реализуют себя в строительстве ферм и механизмов.Архитектор, механизмер, копатель, добытчик – каждый найдёт себе место у нас.";
  const serverCommunity = "Здесь поддерживается дружеская атмосфера, токсики и неадекваты не задерживаются надолго. Каждый найдёт себе друга или даже соберет целую команду.";
  const serverGameProcess = "На сервере нет приватов, однако вы всегда находитесь под защитой администрации. Гриф и воровство запрещены, но даже если это случится, каждый игрок может рассчитывать на помощь модераторов. Сервер оснащен плагинами, повышающими комфортность игры и, вместе с тем, позволяющими не потерять полуванильный облик игрового процесса.";

  const serverInformationTps = "Для поддержания стабильного TPS, сохранения красивых нетронутых территорий и экономии аппаратных ресурсов сервер разделен на 3 мира:";

  const DivisionIntoWorlds = "Разделение на миры";
  const worldNameRes = "Ресурсный";
  const worldNameGmgame = "Основной";
  const worldNameFarm = "Фермерский";

  const survival = "Выживание";
  const skyBlock = "Скайблок";
  const creative = "Креатив";

  const serverInformationRes = "Здесь добываются все необходимые ресурсы. Мир можно копать где и как угодно. Вайпается каждое обновление майнкрафта.";
  const serverInformationGmgame = "Мир со всеми постройками и проектами. Игроки выбирают территорию и занимаются строительством. Вайпов нет, но при обновлении генерации мир расширяют.";
  const serverInformationFarm = "Все механизмы и фермы с редстоуном строятся здесь, чтобы не нагружать основной сервер. Не вайпается и расширяется по необходимости.";

  const serverModeServer = "режимы";
  const survivalInfo = "Главный режим всего сервера, где игроки выживают и творят. Вход только по заявкам.";
  const skyBlockInfo = "Неклассический режим скайблока с квестами и миссиями и другими плагинами. Без вайтлиста.";
  const creativeInfo = "Креатив с WorldEdit и другими упрощающими жизнь инструментами. Без вайтлиста.";

  return (
    <div className="main">
      <div className="row-1">
        <Header />
        <div className="main-content">
          <h1 className="main-h1 font-custom-1" data-aos="fade-up">
            <span className="colored-title-span-1">G</span>
            <span className="colored-title-span-2">M</span>GAME
          </h1>
          <h3 className="main-h3" data-aos="fade-up">{serverInformation1}</h3>
          <h3 className="main-h3" data-aos="fade-up">{serverInformation2}</h3>
          <div className="button-container" data-aos="fade-up">
            <Button />
          </div>
        </div>
        <div className="lin-bot"></div>
      </div>
      <div className="row-2">
        <div className="content-info" data-aos="fade-up">
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-left">{serverBlockTitleConcept}</h2>
            <h4 className="h4-info h4-left">{serverConcept}</h4>
          </div>
          <div className="info-img">
            <img src={Image1} alt="" />
          </div>
        </div>
        <div className="content-info" data-aos="fade-up">
          <div className="info-img">
            <img src={Image2} alt="" />
          </div>
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-right">{serverBlockTitleCommunity}</h2>
            <h4 className="h4-info h4-right">{serverCommunity}</h4>
          </div>
        </div>
        <div className="content-info" data-aos="fade-up">
          <div className="info-style">
            <h2 className="h2-info font-custom-3 h2-left">{serverBlockTitleGameProcess}</h2>
            <h4 className="h4-info h4-left">{serverGameProcess}</h4>
          </div>
          <div className="info-img">
            <img src={Image3} alt="" />
          </div>
        </div>
      </div>
      <div className="row-3">
        <div className="lin-top"></div>
        <div className="tit-block" data-aos="fade-up">
          <h2 className="title-h3 font-custom-3">{DivisionIntoWorlds}</h2>
          <h4 className="title-h4">{serverInformationTps}</h4>
        </div>
        <div className="block-w" data-aos="fade-up">
          <div className="hover-me-block"><SvgHoverMe width="500px" height="500px" color="#292929" /></div>
          <World name={worldNameRes} src={Image4} inf={serverInformationRes} />
          <World name={worldNameGmgame} src={Image5} inf={serverInformationGmgame} />
          <World name={worldNameFarm} src={Image6} inf={serverInformationFarm} />
        </div>
        <div className="lin-bot"></div>
      </div>
      <div className="row-4">
        <h3 className="mode-title font-custom-3" data-aos="fade-up">{serverModeServer}</h3>
        <div className="mode">
          <Mode name={survival} info={survivalInfo} />
          <Mode name={skyBlock} info={skyBlockInfo} />
          <Mode name={creative} info={creativeInfo} />
        </div>
        <div className="lin-bot-two"></div>
      </div>
      <div className="row-5">
        <Fotter />
      </div>
    </div>
  );
};

export default General;
