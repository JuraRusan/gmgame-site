import classNames from "classnames";
import React from "react";
import useLoading from "../../loading/useLoading";
import { useAxios } from "../../../DataProvider";
import Preload from "../../components/preloader/Preload";
import Link from "../../components/link/Link";
import Title from "../../components/title/Title";

import styles from "./Support.module.scss";

const LINKS = [
  { description: "Переводом по номеру карты 2202 2032 5684 4806", link: "/support" },
  { description: "Подарить алмазы (HotMC)", link: "https://hotmc.ru/promote-minecraft-server-205185?mode=packs" },
  { description: "Розыгрыш на мониторинге (HotMC)", link: "https://hotmc.ru/casino-205185" },
  { description: "Проголосовать на мониторингах", link: "https://discord.gg/AesVsdPsFj" },
];

const MONITORING = [
  {
    id: 1,
    name: "HotMC",
    url: "https://hotmc.ru/minecraft-server-205185",
  },
  {
    id: 2,
    name: "MineServ",
    url: "https://mineserv.top/gmgame",
  },
  {
    id: 3,
    name: "Monitoring minecraft",
    url: "https://monitoringminecraft.ru/server/694954",
  },
  {
    id: 4,
    name: "Minecraftrating",
    url: "https://minecraftrating.ru/server/gmgame",
  },
  {
    id: 5,
    name: "MNSgame",
    url: "https://mnsgame.ru/server/86",
  },
  {
    id: 6,
    name: "Gamemonitoring",
    url: "https://gamemonitoring.ru/minecraft/servers/662160",
  },
  {
    id: 7,
    name: "MC-servera",
    url: "https://mc-servera.net/92122",
  },
  {
    id: 8,
    name: "MC-monitoring",
    url: "https://mc-monitoring.info/server/17637",
  },
  {
    id: 9,
    name: "MC-monitor",
    url: "https://mc-monitor.org/server/gmgame",
  },
  {
    id: 10,
    name: "Klauncher",
    url: "https://klauncher.ru/monitoring/server/2316",
  },
  {
    id: 11,
    name: "Serversminecraft",
    url: "https://serversminecraft.ru/server/944",
  },
  {
    id: 12,
    name: "Top.grmc",
    url: "https://top.grmc.su/server/2508",
  },
];

const Support = () => {
  const isLoading = useLoading();

  const resParams = useAxios("/api/get_goals", "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["main_support_block"])}>
      <div className={classNames(styles["support"])}>
        <Title>Поддержать проект</Title>
        <div className={classNames(styles["information"])}>
          <div className={classNames(styles["text_wrapper"])}>
            <p className={classNames(styles["text_line"])}>
              Сервер GMGame работает уже больше двух лет. За это время на сервере были построены разнообразные и
              масштабные проекты, проведены различные ивенты и праздники, сервер приобрел множество друзей, соратников и
              подарил огромное количество эмоций разным людям.
            </p>
            <p className={classNames(styles["text_line"])}>
              Благодаря этим людям сервер живет и позволяет комфортно играть без лагов и читеров. Мы стараемся каждый
              день улучшить игровой опыт на сервере и будем признательны за любую помощь. Если у вас есть возможность
              помочь серверу нижеперечисленными способами, то, пожалуйста, воспользуйтесь ими.
            </p>
            <p className={classNames(styles["text_line"])}>
              На пожертвования уже куплено мощное железо для сервера, источник бесперебойного питания и множество
              плагинов для комфортной игры. Спасибо всем игрокам, без вашей поддержки не было бы сервера GMGame.
            </p>
            <div className={classNames(styles["link_wrapper"])}>
              {LINKS.map((el, i) => (
                <Link target="_blank" rel="noreferrer" href={el.link}>
                  &#8226; {el.description}
                </Link>
              ))}
            </div>
            <p className={classNames(styles["text_line"])}>Спасибо! Ваша поддержка очень важна. &#129392;</p>
          </div>
          <div className={classNames(styles["img_wrapper"])}>
            <img
              className={classNames(styles["image"])}
              src="./site_assets/pages/webp/new_7.webp"
              width="100%"
              height="100%"
              alt="none"
            />
          </div>
        </div>
        <div className={classNames(styles["monitoring_block"])}>
          <h4 className={classNames(styles["sub_title"])}>Мы на мониторингах</h4>
          {MONITORING.map((el, i) => (
            <a className={classNames(styles["monitoring_card"])} target="_blank" rel="noreferrer" href={el.url} key={i}>
              {el.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
