import React from "react";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";
import Link from "../../components/link/Link";
import Title from "../../components/title/Title";

import styles from "./Support.module.scss";

const LINKS = [
  {
    description: "Подарить алмазы (HotMC)",
    link: "https://hotmc.ru/promote-minecraft-server-205185?mode=packs",
  },
  {
    description: "Подарить промо баллы на (MinecraftRating)",
    link: "https://minecraftrating.ru/promote/290714/#buy-rating",
  },
  {
    description: "Проголосовать на мониторингах",
    link: "https://discord.com/channels/723912565234728972/994605541135491183/1356505401134416016",
  },
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
    name: "Minecraftrating",
    url: "https://minecraftrating.ru/server/gmgame",
  },
  {
    id: 4,
    name: "Minecraft-statistic",
    url: "https://minecraft-statistic.net/en/server/GMGame.html",
  },
  {
    id: 5,
    name: "MCLike",
    url: "https://mclike.com/minecraft-server-192962",
  },
  {
    id: 5,
    name: "Planet Minecraft",
    url: "https://www.planetminecraft.com/server/gmgame/",
  },
];

const Support = () => {
  const isLoading = useLoading();

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={styles["main_support_block"]}>
      <div className={styles["support"]}>
        <Title>Поддержать проект</Title>
        <div className={styles["information"]}>
          <div className={styles["text_wrapper"]}>
            <p className={styles["text_line"]}>
              Сервер GMGame работает уже больше четырёх лет. За это время на сервере были построены разнообразные и
              масштабные проекты, проведены различные ивенты и праздники, сервер приобрел множество друзей, соратников и
              подарил огромное количество эмоций разным людям.
            </p>
            <p className={styles["text_line"]}>
              Благодаря этим людям сервер живет и позволяет комфортно играть без лагов и читеров. Мы стараемся каждый
              день улучшить игровой опыт на сервере и будем признательны за любую помощь. Если у вас есть возможность
              помочь серверу нижеперечисленными способами, то, пожалуйста, воспользуйтесь ими.
            </p>
            <p className={styles["text_line"]}>
              На пожертвования уже куплено{" "}
              <Link
                target="_blank"
                rel="noreferrer"
                show={false}
                href="https://wiki.gmgame.ru/books/server/page/konfigi-servera"
              >
                мощное железо
              </Link>{" "}
              для сервера, источник бесперебойного питания и множество плагинов для комфортной игры. Спасибо всем
              игрокам, без вашей поддержки не было бы сервера GMGame.
            </p>
            <div className={styles["link_wrapper"]}>
              {LINKS.map((el, i) => (
                <Link target="_blank" rel="noreferrer" href={el.link} className={styles["link_support_custom"]} key={i}>
                  &#8226; {el.description}
                </Link>
              ))}
            </div>
            <p className={styles["text_line"]}>Спасибо! Ваша поддержка очень важна. &#129392;</p>
          </div>
          <div className={styles["img_wrapper"]}>
            <img
              className={styles["image"]}
              src={process.env.PUBLIC_URL + "/site_assets/pages/webp/new_7.webp"}
              width="100%"
              height="100%"
              alt="none"
            />
          </div>
        </div>
        <div className={styles["monitoring_block"]}>
          <h4 className={styles["sub_title"]}>Мы на мониторингах</h4>
          {MONITORING.map((el, i) => (
            <a className={styles["monitoring_card"]} target="_blank" rel="noreferrer" href={el.url} key={i}>
              {el.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Support;
