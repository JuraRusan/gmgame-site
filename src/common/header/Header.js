import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { sendRequest, useAxios } from "../../DataProvider";
import AOS from "aos";
import LogoMainTextSvgComponent from "../../bases/icons/LogoMainText";

import styles from "./Header.module.scss";
import "aos/dist/aos.css";

const Header = () => {
  const resParams = useAxios("/api/", "GET", {});

  const logout = () => {
    sendRequest("/api/logout", "POST", {}).then((response) => {
      localStorage.clear();
      window.location.href = "/";
    });
  };

  const [cabDropMenu, setCabDropMenu] = useState(false);
  const closeMenuCab = () => {
    setCabDropMenu(false);
  };

  useEffect(() => {
    if (cabDropMenu) {
      document.addEventListener("click", closeMenuCab);
    } else {
      document.removeEventListener("click", closeMenuCab);
    }

    return () => {
      document.removeEventListener("click", closeMenuCab);
    };
  }, [cabDropMenu]);

  const [mainDropMenu, setMainDropMenu] = useState(false);
  const closeMenuMain = () => {
    setMainDropMenu(false);
  };

  useEffect(() => {
    if (mainDropMenu) {
      document.addEventListener("click", closeMenuMain);
    } else {
      document.removeEventListener("click", closeMenuMain);
    }

    return () => {
      document.removeEventListener("click", closeMenuMain);
    };
  }, [mainDropMenu]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className={classNames(styles["header"])}>
      <div className={classNames(styles["mainBox"])}>
        <div className={classNames(styles["leftBlock"], styles["blockNumbered"])}>
          <a className={classNames(styles["logoGeneral"])} href="/">
            <div className={classNames(styles["logo"])}>
              <LogoMainTextSvgComponent height="100%" width="100%" />
            </div>
          </a>
        </div>
        <div className={classNames(styles["centerBlock"], styles["blockNumbered"])}>
          <a className={classNames(styles["swipePage"])} href="/regulations">
            Правила
          </a>
          <div className={classNames(styles["dropOpen"])} onClick={() => setMainDropMenu(!mainDropMenu)}>
            {mainDropMenu === false ? (
              <span className={classNames(styles["ico"])}>&#9776;</span>
            ) : (
              <span className={classNames(styles["ico"])}>&#10006;</span>
            )}
            {mainDropMenu === false ? null : (
              <div className={classNames(styles["dropMenuMain"])} data-aos="zoom-out-down" data-aos-duration="250">
                <div className={classNames(styles["boxList"])}>
                  <a className={classNames(styles["list"], styles["phoneLink"])} href="/regulations">
                    Правила
                  </a>
                  <a className={classNames(styles["list"], styles["phoneLink"])} href="/faq">
                    Вопросы
                  </a>
                  <a className={classNames(styles["list"])} href="/support">
                    Поддержать
                  </a>
                  <a className={classNames(styles["list"])} href="/online_map">
                    Онлайн карта
                  </a>
                  <a className={classNames(styles["list"])} href="/statistic">
                    Статистика
                  </a>
                  <a className={classNames(styles["list"])} href="/gallery">
                    Галерея
                  </a>
                  <a
                    className={classNames(styles["list"])}
                    href="https://minecraft-calculator.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Калькулятор
                  </a>
                  <a
                    className={classNames(styles["list"])}
                    href="https://wiki.gmgame.ru/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Вики сервера
                  </a>
                  <a className={classNames(styles["list"])} href="/shopkeepers">
                    Торговая зона
                  </a>
                </div>
              </div>
            )}
          </div>
          <a className={classNames(styles["swipePage"])} href="/faq">
            Вопросы
          </a>
        </div>
        <div className={classNames(styles["rightBlock"], styles["blockNumbered"])}>
          {!resParams?.data?.discordUser ? (
            <a className={classNames(styles["swipePage"])} href="/api/login">
              Войти
            </a>
          ) : (
            <div className={classNames(styles["wrapperBoxCab"])} onClick={() => setCabDropMenu(!cabDropMenu)}>
              <div className={classNames(styles["cabOpen"])}>
                {resParams.data.discordUser.avatar === null ? (
                  <img
                    className={classNames(styles["iconPlayer"])}
                    src={`../site_assets/pages/webp/avatar_undefined.webp`}
                    alt="none"
                  />
                ) : (
                  <img
                    className={classNames(styles["iconPlayer"])}
                    src={`https://cdn.discordapp.com/avatars/${resParams.data.discordUser.id}/${resParams.data.discordUser.avatar}.png`}
                    alt="none"
                  />
                )}
                <label className={classNames(styles["nameUser"])}>{resParams.data.discordUser.username}</label>
              </div>
              {cabDropMenu === false ? undefined : (
                <div className={classNames(styles["dropMenuCab"])} data-aos="zoom-out-down" data-aos-duration="250">
                  <div className={classNames(styles["boxList"])}>
                    <div className={classNames(styles["prevDropUser"])}>
                      <label className={classNames(styles["miniName"])}>{resParams.data.discordUser.username}</label>
                    </div>
                    <a className={classNames(styles["list"])} href="/cab/profile">
                      Профиль
                    </a>
                    {resParams?.data?.discordUser?.role === "admin" && (
                      <a className={classNames(styles["list"])} href="/manager">
                        Менеджер
                      </a>
                    )}
                    <span className={classNames(styles["list"], styles["last"])} onClick={logout}>
                      Выйти из аккаунта
                    </span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
