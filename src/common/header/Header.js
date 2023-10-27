import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {sendRequest, useAxios} from '../../DataProvider';
import AOS from "aos";
import SvgDiscord from "../../bases/icons/SvgDiscord";

import styles from "./Header.module.scss";
import "aos/dist/aos.css";

const Header = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const resParams = useAxios(
    "/api/",
    'GET',
    {}
  );

  const logout = () => {
    sendRequest(
      '/api/logout',
      'POST',
      {}
    ).then(response => {
      localStorage.clear();
      window.location.href = '/';
    });
  }

  const [cabDropMenu, setCabDropMenu] = useState(false);
  const closeMenuCab = () => {
    setCabDropMenu(false);
  };

  useEffect(() => {
    if (cabDropMenu) {
      document.addEventListener('click', closeMenuCab);
    } else {
      document.removeEventListener('click', closeMenuCab);
    }

    return () => {
      document.removeEventListener('click', closeMenuCab);
    };
  }, [cabDropMenu]);

  const [mainDropMenu, setMainDropMenu] = useState(false);
  const closeMenuMain = () => {
    setMainDropMenu(false);
  };

  useEffect(() => {
    if (mainDropMenu) {
      document.addEventListener('click', closeMenuMain);
    } else {
      document.removeEventListener('click', closeMenuMain);
    }

    return () => {
      document.removeEventListener('click', closeMenuMain);
    };
  }, [mainDropMenu]);

  return (
    <div className={classNames(styles["header"])} data-aos="fade-down">
      <div className={classNames(styles["mainBox"])}>
        <div className={classNames(styles["leftBlock"], styles["blockNumbered"])}>
          <a className={classNames(styles["logoGeneral"])} href="/">
            <span className={classNames(styles["colored-1"])}>G</span>
            <span className={classNames(styles["colored-2"])}>M</span>
            <span className={classNames(styles["noColored"])}>GAME</span>
          </a>
        </div>
        <div className={classNames(styles["centerBlock"], styles["blockNumbered"])}>
          <a className={classNames(styles["swipePage"])} href="/regulations">Правила</a>
          <div className={classNames(styles["dropOpen"])} onClick={() => setMainDropMenu(!mainDropMenu)}>
            {mainDropMenu === false
              ?
              <span className={classNames(styles["ico"])}>&#9776;</span>
              :
              <span className={classNames(styles["ico"])}>&#128500;</span>
            }
            {mainDropMenu === false ? undefined :
              <div className={classNames(styles["dropMenuMain"])} data-aos="zoom-out-down" data-aos-duration="250">
                <div className={classNames(styles["boxList"])}>
                  <a className={classNames(styles["list"])} href="/support">Поддержать</a>
                  <a className={classNames(styles["list"])} href="/online_map">Онлайн карта</a>
                  <a className={classNames(styles["list"])} href="/statistic">Статистика</a>
                  <a className={classNames(styles["list"])} href="/articles_wiki">Вики сервера</a>
                  <a className={classNames(styles["list"])} href="/mods">Моды</a>
                  <a className={classNames(styles["list"], styles["last"])} href="/texture_pack">Текстур пак</a>
                </div>
              </div>
            }
          </div>
          <a className={classNames(styles["swipePage"])} href="/faq">Вопросы</a>
        </div>
        <div className={classNames(styles["rightBlock"], styles["blockNumbered"])}>
          {!resParams?.data?.discordUser
            ?
            <a className={classNames(styles["swipePage"])} href="/api/login">Войти</a>
            :
            <div className={classNames(styles["wrapperBoxCab"])} onClick={() => setCabDropMenu(!cabDropMenu)}>
              {resParams?.data?.discordUser?.localuser?.username === undefined
                ?
                <div className={classNames(styles["cabOpen"])}>
                  {resParams.data.discordUser.avatar === null
                    ?
                    <SvgDiscord width="36px" height="36px" color="white"/>
                    :
                    <img
                      className={classNames(styles["iconPlayer"])}
                      src={`https://cdn.discordapp.com/avatars/${resParams.data.discordUser.id}/${resParams.data.discordUser.avatar}.png`}
                      alt="none"
                    />
                  }
                  <label className={classNames(styles["nameUser"])}>{resParams.data.discordUser.username}</label>
                </div>
                :
                <div className={classNames(styles["cabOpen"])}>
                  <img
                    className={classNames(styles["iconPlayer"])}
                    src={`https://minotar.net/helm/${resParams.data.discordUser.localuser.username}/100`}
                    alt="none"
                  />
                  <label className={classNames(styles["nameUser"])}>{resParams.data.discordUser.localuser.username}</label>
                </div>
              }
              {cabDropMenu === false ? undefined :
                <div className={classNames(styles["dropMenuCab"])} data-aos="zoom-out-down" data-aos-duration="250">
                  <div className={classNames(styles["boxList"])}>
                    <div className={classNames(styles["prevDropUser"])}>
                      <label className={classNames(styles["miniName"])}>{resParams.data.discordUser.localuser.username}</label>
                    </div>
                    <a className={classNames(styles["list"])} href="/cab/profile">Профиль</a>
                    {resParams?.data?.discordUser?.role === 'admin' &&
                      <a className={classNames(styles["list"])} href="/manager">Менеджер</a>
                    }
                    <span className={classNames(styles["list"], styles["last"])} onClick={logout}>Выйти из аккаунта</span>
                  </div>
                </div>
              }
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;