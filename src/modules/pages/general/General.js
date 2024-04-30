import classNames from "classnames";
import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import World from "../../components/[0_grouped_0]-Generals/world/World.js";
import HoverMeSvgComponent from "../../../bases/icons/hoverMeSvg/HoverMeSvg";
import LogoMainTextSvgComponent from "../../../bases/icons/LogoMainText";

import styles from "./General.module.scss";
import "aos/dist/aos.css";

const General = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const serverInformation1 = "Бесплатный строительно-выживательный сервер.";
  const serverInformation2 = "Без приватов и донат магазина.";

  const serverBlockTitleConcept = "Концепция";
  const serverBlockTitleCommunity = "Комьюнити";
  const serverBlockTitleGameProcess = "Игровой процесс";
  const serverConcept =
    "Мы строительный сервер, на котором каждый может реализовать свои творческие идеи. Игроки не только строят красивые здания и города, но и реализуют себя в строительстве ферм и механизмов. Архитектор, механизмер, копатель, добытчик – каждый найдёт себе место у нас.";
  const serverCommunity =
    "Здесь поддерживается дружеская атмосфера, токсики и неадекваты не задерживаются надолго. Каждый найдёт себе друга или даже соберет целую команду.";
  const serverGameProcess =
    "На сервере нет приватов, однако вы всегда находитесь под защитой администрации. Гриф и воровство запрещены, но даже если это случится, каждый игрок может рассчитывать на помощь модераторов. Сервер оснащен плагинами, повышающими комфортность игры и, вместе с тем, позволяющими не потерять полуванильный облик игрового процесса.";

  const serverInformationTps =
    "Для поддержания стабильного TPS, сохранения красивых нетронутых территорий и экономии аппаратных ресурсов сервер разделен на 3 мира:";

  const DivisionIntoWorlds = "Разделение на миры";
  const worldNameRes = "Ресурсный";
  const worldNameGMGame = "Основной";
  const worldNameFarm = "Фермерский";

  const serverInformationRes =
    "Здесь добываются все необходимые ресурсы. Мир можно копать где и как угодно. Вайпается каждое обновление майнкрафта.";
  const serverInformationGMGame =
    "Мир со всеми постройками и проектами. Игроки выбирают территорию и занимаются строительством. Вайпов нет, но при обновлении генерации мир расширяют.";
  const serverInformationFarm =
    "Все механизмы и фермы с редстоуном строятся здесь, чтобы не нагружать основной сервер. Не вайпается и расширяется по необходимости.";

  return (
    <div className={classNames(styles["main"])}>
      <div className={classNames(styles["rowContainerNumberOne"])}>
        <div className={classNames(styles["lineNoContentTop"])}></div>
        <div className={classNames(styles["mainContent"])}>
          {/*<h1 className={classNames(styles["mainTitleH1"])} data-aos="zoom-in">*/}
          {/*  <span className={classNames(styles["coloredTitleSpanOne"])}>G</span>*/}
          {/*  <span className={classNames(styles["coloredTitleSpanTwo"])}>M</span>GAME*/}
          {/*</h1>*/}
          <div className={classNames(styles["logo"])}>
            <LogoMainTextSvgComponent height="100%" width="100%" />
          </div>
          <h3 className={classNames(styles["mainTextH3"])} data-aos="zoom-in">
            {serverInformation1}
          </h3>
          <h3 className={classNames(styles["mainTextH3"])} data-aos="zoom-in">
            {serverInformation2}
          </h3>
          <div className={classNames(styles["buttonContainerWrapper"])} data-aos="zoom-in">
            <Link to={"/cab/profile"}>
              <button className={classNames(styles["btn"])}>Подать заявку</button>
            </Link>
          </div>
        </div>
        <div className={classNames(styles["lineNoContentBottom"])}></div>
      </div>

      <div className={classNames(styles["rowContainerNumberTwo"])}>
        <div className={classNames(styles["contentInformation"])} data-aos="zoom-in">
          <div className={classNames(styles["informationTextDivStyle"])}>
            <h2 className={classNames(styles["h2Information"], styles["leftH2"])}>{serverBlockTitleConcept}</h2>
            <h4 className={classNames(styles["h4Information"], styles["leftH4"])}>{serverConcept}</h4>
          </div>
          <div className={classNames(styles["informationWrapperImage"])}>
            <img
              className={classNames(styles["informationImageStyle"])}
              src="./site_assets/pages/webp/new_1.webp"
              alt=""
            />
          </div>
        </div>
        <div className={classNames(styles["contentInformation"], styles["reverse"])} data-aos="zoom-in">
          <div className={classNames(styles["informationWrapperImage"])}>
            <img
              className={classNames(styles["informationImageStyle"])}
              src="./site_assets/pages/webp/new_2.webp"
              alt=""
            />
          </div>
          <div className={classNames(styles["informationTextDivStyle"])}>
            <h2 className={classNames(styles["h2Information"], styles["rightH2"])}>{serverBlockTitleCommunity}</h2>
            <h4 className={classNames(styles["h4Information"], styles["rightH4"])}>{serverCommunity}</h4>
          </div>
        </div>
        <div className={classNames(styles["contentInformation"])} data-aos="zoom-in">
          <div className={classNames(styles["informationTextDivStyle"])}>
            <h2 className={classNames(styles["h2Information"], styles["leftH2"])}>{serverBlockTitleGameProcess}</h2>
            <h4 className={classNames(styles["h4Information"], styles["leftH4"])}>{serverGameProcess}</h4>
          </div>
          <div className={classNames(styles["informationWrapperImage"])}>
            <img
              className={classNames(styles["informationImageStyle"])}
              src="./site_assets/pages/webp/new_3.webp"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={classNames(styles["rowContainerNumberThree"])}>
        <div className={classNames(styles["lineNoContentTop"])}></div>
        <div className={classNames(styles["titleBlock"])} data-aos="zoom-in">
          <h2 className={classNames(styles["titleH3"])}>{DivisionIntoWorlds}</h2>
          <h4 className={classNames(styles["titleH4"])}>{serverInformationTps}</h4>
        </div>
        <div className={classNames(styles["blockWorlds"])} data-aos="zoom-in">
          <div className={classNames(styles["hoverMeBlock"])}>
            <HoverMeSvgComponent width="100%" height="100%" color="#292929" />
          </div>
          <World name={worldNameRes} src="./site_assets/pages/webp/new_4.webp" inf={serverInformationRes} />
          <World name={worldNameGMGame} src="./site_assets/pages/webp/new_5.webp" inf={serverInformationGMGame} />
          <World name={worldNameFarm} src="./site_assets/pages/webp/new_6.webp" inf={serverInformationFarm} />
        </div>
        <div className={classNames(styles["lineNoContentBottom"])}></div>
      </div>
    </div>
  );
};

export default General;
