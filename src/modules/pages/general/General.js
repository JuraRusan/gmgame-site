import CN from "classnames";
import React, { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-router-dom";
import HoverMeSvgComponent from "../../../bases/icons/hoverMeSvg/HoverMeSvg";
import LogoMainTextSvgComponent from "../../../bases/icons/LogoMainText";

import styles from "./General.module.scss";
import "aos/dist/aos.css";

const INFORMATION_1 = "Бесплатный строительно-выживательный сервер.";
const INFORMATION_2 = "Без приватов и донат магазина.";

const TITLE_CONCEPT = "Концепция";
const TITLE_COMMUNITY = "Комьюнити";
const TITLE_GAME_PROCESS = "Игровой процесс";

const CONCEPT = "Мы строительный сервер, на котором каждый может реализовать свои творческие идеи. Игроки не только строят красивые здания и города, но и реализуют себя в строительстве ферм и механизмов. Архитектор, механизмер, копатель, добытчик – каждый найдёт себе место у нас."; // prettier-ignore
const COMMUNITY = "Здесь поддерживается дружеская атмосфера, токсики и неадекваты не задерживаются надолго. Каждый найдёт себе друга или даже соберет целую команду."; // prettier-ignore
const GAME_PROCESS = "На сервере нет приватов, однако вы всегда находитесь под защитой администрации. Гриф и воровство запрещены, но даже если это случится, каждый игрок может рассчитывать на помощь модераторов. Сервер оснащен плагинами, повышающими комфортность игры и, вместе с тем, позволяющими не потерять полуванильный облик игрового процесса."; // prettier-ignore

const INFORMATION_TPS = "Для поддержания стабильного TPS, сохранения красивых нетронутых территорий и экономии аппаратных ресурсов сервер разделен на 3 мира:"; // prettier-ignore

const DIVISION_INTO_WORLDS = "Разделение на миры";

const NAME_RES = "Ресурсный";
const NAME_GMGAME = "Основной";
const NAME_FARM = "Фермерский";

const INFORMATION_RES = "Здесь добываются все необходимые ресурсы. Мир можно копать где и как угодно. Вайпается каждое обновление майнкрафта."; // prettier-ignore
const INFORMATION_GMGAME = "Мир со всеми постройками и проектами. Игроки выбирают территорию и занимаются строительством. Вайпов нет, но при обновлении генерации мир расширяют."; // prettier-ignore
const INFORMATION_FARM = "Все механизмы и фермы с редстоуном строятся здесь, чтобы не нагружать основной сервер. Не вайпается и расширяется по необходимости."; // prettier-ignore

const World = ({ name, src, inf }) => {
  return (
    <div className={styles["worlds"]}>
      <div className={styles["circle"]} />
      <h3 className={styles["name"]}>{name}</h3>
      <div className={styles["hr_90_deg"]} />
      <div className={styles["image_text"]}>
        <img src={src} alt="" />
        <h4 className={styles["information"]}>{inf}</h4>
      </div>
    </div>
  );
};

const General = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles["main"]}>
      <div className={styles["row_container_one"]}>
        <div className={styles["line_no_content_top"]}></div>
        <div className={styles["main_content"]}>
          <div className={styles["logo"]}>
            <LogoMainTextSvgComponent height="100%" width="100%" />
          </div>
          <h3 className={styles["main_text"]} data-aos="zoom-in">
            {INFORMATION_1}
          </h3>
          <h3 className={styles["main_text"]} data-aos="zoom-in">
            {INFORMATION_2}
          </h3>
          <div className={styles["button_application"]} data-aos="zoom-in">
            <Link to={"/cab/profile"}>
              <button className={styles["btn"]}>Подать заявку</button>
            </Link>
          </div>
        </div>
        <div className={styles["line_no_content_bottom"]}></div>
      </div>

      <div className={styles["row_container_two"]}>
        <div className={styles["content_information"]} data-aos="zoom-in">
          <div className={styles["information_text_div_style"]}>
            <h2 className={CN(styles["h2_information"], styles["left_h2"])}>{TITLE_CONCEPT}</h2>
            <h4 className={CN(styles["h4_information"], styles["left_h4"])}>{CONCEPT}</h4>
          </div>
          <div className={styles["information_wrapper_image"]}>
            <img
              className={styles["information_image_style"]}
              src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_1.webp"}
              alt=""
            />
          </div>
        </div>
        <div className={CN(styles["content_information"], styles["reverse"])} data-aos="zoom-in">
          <div className={styles["information_wrapper_image"]}>
            <img
              className={styles["information_image_style"]}
              src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_2.webp"}
              alt=""
            />
          </div>
          <div className={styles["information_text_div_style"]}>
            <h2 className={CN(styles["h2_information"], styles["right_h2"])}>{TITLE_COMMUNITY}</h2>
            <h4 className={CN(styles["h4_information"], styles["right_h4"])}>{COMMUNITY}</h4>
          </div>
        </div>
        <div className={styles["content_information"]} data-aos="zoom-in">
          <div className={styles["information_text_div_style"]}>
            <h2 className={CN(styles["h2_information"], styles["left_h2"])}>{TITLE_GAME_PROCESS}</h2>
            <h4 className={CN(styles["h4_information"], styles["left_h4"])}>{GAME_PROCESS}</h4>
          </div>
          <div className={styles["information_wrapper_image"]}>
            <img
              className={styles["information_image_style"]}
              src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_3.webp"}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className={styles["row_container_three"]}>
        <div className={styles["line_no_content_top"]}></div>
        <div className={styles["title_block"]} data-aos="zoom-in">
          <h2 className={styles["title_h3"]}>{DIVISION_INTO_WORLDS}</h2>
          <h4 className={styles["title_h4"]}>{INFORMATION_TPS}</h4>
        </div>
        <div className={styles["block_worlds"]} data-aos="zoom-in">
          <div className={styles["hove_me"]}>
            <HoverMeSvgComponent width="100%" height="100%" color="#292929" />
          </div>
          <World
            name={NAME_RES}
            src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_4.webp"}
            inf={INFORMATION_RES}
          />
          <World
            name={NAME_GMGAME}
            src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_5.webp"}
            inf={INFORMATION_GMGAME}
          />
          <World
            name={NAME_FARM}
            src={process.env.PUBLIC_URL + "./site_assets/pages/webp/new_6.webp"}
            inf={INFORMATION_FARM}
          />
        </div>
        <div className={styles["line_no_content_bottom"]} />
      </div>
    </div>
  );
};

export default General;
