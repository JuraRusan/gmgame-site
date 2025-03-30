import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { sendRequest, useAxios } from "../../DataProvider";
import AOS from "aos";
import LogoMainTextSvgComponent from "../../bases/icons/LogoMainText";
import GoOutSvgComponent from "../../bases/icons/goOutSvg/GoOutSvg";
import ManagerSvgComponent from "../../bases/icons/managerSvg/ManagerSvg";
import ProfileSvgComponent from "../../bases/icons/profileSvg/ProfileSvg";
import CoinsSvgComponent from "../../bases/icons/coinsSvg/CoinsSvg";

import styles from "./Header.module.scss";
import "aos/dist/aos.css";

const Header = () => {
  const resParams = useAxios("/api/profile", "GET", {});

  const [cabDropMenu, setCabDropMenu] = useState(false);
  const [mainDropMenu, setMainDropMenu] = useState(false);

  const closeMenuMain = () => {
    setMainDropMenu(false);
  };

  const closeMenuCab = () => {
    setCabDropMenu(false);
  };

  const logout = () => {
    sendRequest("/api/logout", "POST", {}).then((response) => {
      localStorage.clear();
      window.location.href = "/";
    });
  };

  const DiscordIcon = () => {
    if (resParams.data.discordUser.avatar === null) {
      return (
        <img
          className={classNames(styles["icon_player"])}
          src={`../site_assets/pages/webp/avatar_undefined.webp`}
          alt="none"
        />
      );
    } else {
      return (
        <img
          className={classNames(styles["icon_player"])}
          src={`https://cdn.discordapp.com/avatars/${resParams.data.discordUser.id}/${resParams.data.discordUser.avatar}.png`}
          alt="none"
        />
      );
    }
  };

  const Swipe = ({ to, name }) => {
    return (
      <a className={classNames(styles["swipe_page"])} href={to}>
        {name}
      </a>
    );
  };

  const ListMenu = ({ phone_show = false, href, name, icon = null, button = false, ...props }) => {
    if (!button) {
      return (
        <a
          className={classNames(styles["list"], phone_show && styles["phone_list"])}
          href={href}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          {...props}
        >
          <span className={classNames(styles["icon_list"])}>{icon}</span>
          {name}
        </a>
      );
    } else {
      return (
        <button className={classNames(styles["list"])} {...props}>
          <span className={classNames(styles["icon_list"])}>{icon}</span>
          {name}
        </button>
      );
    }
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
      <div className={classNames(styles["main_container"])}>
        <div className={classNames(styles["left_block"], styles["container_numbered"])}>
          <a className={classNames(styles["logo"])} href="/">
            <LogoMainTextSvgComponent height="100%" width="100%" />
          </a>
        </div>
        <div className={classNames(styles["center_block"], styles["container_numbered"])}>
          <Swipe to="/regulations" name="Правила" />
          <div className={classNames(styles["dropdown_menu_button"])} onClick={() => setMainDropMenu(!mainDropMenu)}>
            {mainDropMenu === false ? (
              <span className={classNames(styles["ico"])}>&#9776;</span>
            ) : (
              <span className={classNames(styles["ico"])}>&#10006;</span>
            )}
            {mainDropMenu === false ? null : (
              <div
                className={classNames(styles["dropdown_menu_main"])}
                data-aos="zoom-out-down"
                data-aos-duration="250"
              >
                <div className={classNames(styles["box_page_list"])}>
                  <ListMenu phone_show={true} name="Правила" href="/regulations" />
                  <ListMenu phone_show={true} name="Вопросы" href="/faq" />
                  <ListMenu name="Поддержать" href="/support" />
                  <ListMenu name="Онлайн карта" href="/online_map" />
                  <ListMenu name="Статистика" href="/statistic" />
                  <ListMenu name="Галерея" href="/gallery" />
                  <ListMenu name="Калькулятор" href="https://wiki.gmgame.ru/" />
                  <ListMenu name="Вики сервера" href="https://wiki.gmgame.ru/" />
                  <ListMenu name="Торговая зона" href="/shopkeepers" />
                </div>
              </div>
            )}
          </div>
          <Swipe to="/faq" name="Вопросы" />
        </div>
        <div className={classNames(styles["right_block"], styles["container_numbered"])}>
          {!resParams?.data?.discordUser ? (
            <Swipe to="/api/login" name="Войти" />
          ) : (
            <div className={classNames(styles["profile_button"])} onClick={() => setCabDropMenu(!cabDropMenu)}>
              <DiscordIcon />
              <label className={classNames(styles["name_user"])}>{resParams.data.discordUser.username}</label>
              {cabDropMenu === false ? undefined : (
                <div
                  className={classNames(styles["dropdown_menu_profile"])}
                  data-aos="zoom-out-down"
                  data-aos-duration="250"
                >
                  <div className={classNames(styles["box_page_list"])}>
                    <div className={classNames(styles["discord_name"])}>
                      <DiscordIcon />
                      <label className={classNames(styles["string"])}>{resParams.data.discordUser.username}</label>
                    </div>
                    <div className={classNames(styles["br_line"])} />
                    {!resParams?.data?.user ? null : (
                      <div className={classNames(styles["balance"])}>
                        <span className={classNames(styles["icon_list"])}>
                          <CoinsSvgComponent width="100%" height="100%" color="#f4f4f4" />
                        </span>
                        <span className={classNames(styles["text"])}>{resParams.data.user.balance} монет</span>
                        <a className={classNames(styles["info"])} href="/">
                          ?
                        </a>
                      </div>
                    )}
                    <ListMenu
                      name="Профиль"
                      href="/cab/profile"
                      icon={<ProfileSvgComponent width="100%" height="100%" color="#f4f4f4" />}
                    />
                    {resParams?.data?.discordUser?.role === "admin" && (
                      <ListMenu
                        name="Менеджер"
                        href="/manager"
                        icon={<ManagerSvgComponent width="100%" height="100%" color="#f4f4f4" />}
                      />
                    )}
                    <ListMenu
                      name="Выйти из аккаунта"
                      onClick={logout}
                      button={true}
                      icon={<GoOutSvgComponent width="100%" height="100%" color="#f4f4f4" />}
                    />
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
