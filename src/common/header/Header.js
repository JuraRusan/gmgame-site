import classNames from "classnames";
import React from "react";
import LogoMainTextSvgComponent from "../../bases/icons/LogoMainText";
import GoOutSvgComponent from "../../bases/icons/goOutSvg/GoOutSvg";
import ManagerSvgComponent from "../../bases/icons/managerSvg/ManagerSvg";
import ProfileSvgComponent from "../../bases/icons/profileSvg/ProfileSvg";
import CoinsSvgComponent from "../../bases/icons/coinsSvg/CoinsSvg";

import styles from "./Header.module.scss";
import "aos/dist/aos.css";
import useHeader from "./useHeader";

const Header = () => {
  const { cabDropMenu, mainDropMenu, resParams, logout, setCabDropMenu, setMainDropMenu } = useHeader();

  const DiscordIcon = () => {
    const imgLink = !resParams.data.discordUser.avatar
      ? "../site_assets/pages/webp/avatar_undefined.webp"
      : `https://cdn.discordapp.com/avatars/${resParams.data.discordUser.id}/${resParams.data.discordUser.avatar}.png`;

    return <img className={styles["icon_player"]} src={imgLink} alt="none" />;
  };

  const Swipe = ({ to, name }) => {
    return (
      <a className={styles["swipe_page"]} href={to}>
        {name}
      </a>
    );
  };

  const ListMenu = ({ phone_show = false, href, name, icon = null, button = false, ...props }) => {
    if (!button) {
      return (
        <a
          className={classNames(styles["list"], {
            [styles["phone_list"]]: phone_show,
          })}
          href={href}
          {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
          {...props}
        >
          <span className={styles["icon_list"]}>{icon}</span>
          {name}
        </a>
      );
    } else {
      return (
        <button className={styles["list"]} {...props}>
          <span className={styles["icon_list"]}>{icon}</span>
          {name}
        </button>
      );
    }
  };

  return (
    <div className={styles["header"]}>
      <div className={styles["main_container"]}>
        <div className={classNames(styles["left_block"], styles["container_numbered"])}>
          <a className={styles["logo"]} href="/">
            <LogoMainTextSvgComponent height="100%" width="100%" />
          </a>
        </div>
        <div className={classNames(styles["center_block"], styles["container_numbered"])}>
          <Swipe to="/regulations" name="Правила" />
          <div className={styles["dropdown_menu_button"]} onClick={() => setMainDropMenu(!mainDropMenu)}>
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
                  <ListMenu phone_show name="Правила" href="/regulations" />
                  <ListMenu phone_show name="Вопросы" href="/faq" />
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
            <div className={styles["profile_button"]} onClick={() => setCabDropMenu((prev) => !prev)}>
              <DiscordIcon />
              <label className={styles["name_user"]}>{resParams.data.discordUser.username}</label>
              {cabDropMenu === false ? undefined : (
                <div className={styles["dropdown_menu_profile"]} data-aos="zoom-out-down" data-aos-duration="250">
                  <div className={styles["box_page_list"]}>
                    <div className={styles["discord_name"]}>
                      <DiscordIcon />
                      <label className={styles["string"]}>{resParams.data.discordUser.username}</label>
                    </div>
                    <div className={styles["br_line"]} />
                    {!resParams?.data?.user ? null : (
                      <div className={styles["balance"]}>
                        <span className={styles["icon_list"]}>
                          <CoinsSvgComponent width="100%" height="100%" color="#f4f4f4" />
                        </span>
                        <span className={styles["text"]}>{resParams.data.user.balance} монет</span>
                        <a className={styles["info"]} href="/">
                          ?
                        </a>
                      </div>
                    )}
                    <ListMenu
                      name="Профиль"
                      href="/cab/profile"
                      icon={<ProfileSvgComponent width="100%" height="100%" color="#f4f4f4" />}
                    />
                    {resParams?.data?.discordUser?.role === "admin" ? (
                      <ListMenu
                        name="Менеджер"
                        href="/manager"
                        icon={<ManagerSvgComponent width="100%" height="100%" color="#f4f4f4" />}
                      />
                    ) : null}

                    <ListMenu
                      button
                      name="Выйти из аккаунта"
                      onClick={logout}
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
