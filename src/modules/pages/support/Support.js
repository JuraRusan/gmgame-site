import classNames from "classnames";
import React, {useEffect} from "react";
import AOS from "aos";
import {monitoringBase} from "./monitoringBase";

import styles from "./Support.module.scss";
import "aos/dist/aos.css";

const Support = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className={classNames(styles["mainSupport"])} data-aos="zoom-in">
      <div className={classNames(styles["support"])}>
        <h4 className={classNames(styles["titleSupport"])}>Поддержать проект</h4>
        <div className={classNames(styles["donatBlock"])}>
          <div className={classNames(styles["text"])}>
            <p className={classNames(styles["subTitleSupport"])}>Сервер GMGame работает уже больше двух лет. За это время на сервере были построены разнообразные и масштабные проекты, проведены различные ивенты и праздники, сервер приобрел множество друзей, соратников и подарил огромное количество эмоций разным людям.</p>
            <p className={classNames(styles["subTitleSupport"])}>Благодаря этим людям сервер живет и позволяет комфортно играть без лагов и читеров. Мы стараемся каждый день улучшить игровой опыт на сервере и будем признательны за любую помощь. Если у вас есть возможность помочь серверу нижеперечисленными способами, то, пожалуйста, воспользуйтесь ими.</p>
            <p className={classNames(styles["subTitleSupport"])}>На пожертвования уже куплено мощное железо для сервера, источник бесперебойного питания и множество плагинов для комфортной игры. Спасибо всем игрокам, без вашей поддержки не было бы сервера GMGame.</p>
            <div className={classNames(styles["linkWrapper"])}>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="/support">- Переводом по номеру карты 2202 2032 5684 4806 &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://hotmc.ru/promote-minecraft-server-205185?mode=packs">- Подарить алмазы (HotMC) &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://hotmc.ru/casino-205185">- Розыгрыш на мониторинге (HotMC) &#10148;</a>
              <a className={classNames(styles["supportLink"])} target="_blank" rel="noreferrer" href="https://discord.gg/AesVsdPsFj">- Проголосовать на мониторингах &#10148;</a>
            </div>
            <h5 className={classNames(styles["footerSupport"])}>Спасибо! Ваша поддержка очень важна. &#129392;</h5>
          </div>
          <div className={classNames(styles["imgBlockWrapper"])}>
            <img className={classNames(styles["image"])} src="./site_assets/pages/webp/7.webp" width="100%" height="100%" alt="none"/>
          </div>
        </div>
        <div className={classNames(styles["monitoringBlock"])} data-aos="zoom-in">
          <h4 className={classNames(styles["titleAll"])}>Мы на мониторингах</h4>
          {monitoringBase.map((el, i) =>
            <a data-aos="zoom-in" className={classNames(styles["monitoringCard"])} target="_blank" rel="noreferrer" href={el.url} key={i}>{el.name}</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Support;
