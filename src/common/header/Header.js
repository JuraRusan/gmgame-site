import cN from "classnames";
import React from "react";
import useHeader from "./useHeader";
import LogoMainTextSvgComponent from "../../bases/icons/LogoMainText";
import GoOutSvgComponent from "../../bases/icons/goOutSvg/GoOutSvg";
import ManagerSvgComponent from "../../bases/icons/managerSvg/ManagerSvg";
import ProfileSvgComponent from "../../bases/icons/profileSvg/ProfileSvg";
import CoinsSvgComponent from "../../bases/icons/coinsSvg/CoinsSvg";

import styles from "./Header.module.scss";
import "aos/dist/aos.css";

const Header = () => {
  const { logout, resParams, profileDropdownMenu, setProfileDropdownMenu, mainDropdownMenu, setMainDropdownMenu } =
    useHeader();

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

  const Balance = () => {
    return (
      <div className={styles["balance"]}>
        <span className={styles["icon_list"]}>
          <CoinsSvgComponent width="100%" height="100%" color="#f4f4f4" />
        </span>
        <span className={styles["text"]}>{resParams.data.user.balance} монет</span>
        <a className={styles["info"]} href="/cab/prize">
          ?
        </a>
      </div>
    );
  };

  const ListMenu = ({ phone_show = false, href, name, icon = null, button = false, ...props }) => {
    if (!button) {
      return (
        <a
          className={cN(styles["list"], {
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
        <div className={cN(styles["left_block"], styles["container_numbered"])}>
          <a className={styles["logo"]} href="/">
            <LogoMainTextSvgComponent height="100%" width="100%" />
          </a>
        </div>
        <div className={cN(styles["center_block"], styles["container_numbered"])}>
          <Swipe to="/regulations" name="Правила" />
          <div className={styles["dropdown_menu_button"]} onClick={() => setMainDropdownMenu((prev) => !prev)}>
            <span className={styles["ico"]}>{!mainDropdownMenu ? "\u2630" : "\u2716"}</span>
            {!mainDropdownMenu ? null : (
              <div className={styles["dropdown_menu_main"]} data-aos="zoom-out-down" data-aos-duration="250">
                <div className={styles["box_page_list"]}>
                  <ListMenu phone_show name="Правила" href="/regulations" />
                  <ListMenu phone_show name="Вопросы" href="/faq" />
                  <ListMenu name="Поддержать" href="/support" />
                  <ListMenu name="Онлайн карта" href="/online_map" />
                  <ListMenu name="Статистика" href="/statistic" />
                  <ListMenu name="Галерея" href="/gallery" />
                  <ListMenu name="Калькулятор" href="https://minecraft-calculator.netlify.app/" />
                  <ListMenu name="Вики сервера" href="https://wiki.gmgame.ru/" />
                  <ListMenu name="Торговая зона" href="/shopkeepers" />
                </div>
              </div>
            )}
          </div>
          <Swipe to="/faq" name="Вопросы" />
        </div>
        <div className={cN(styles["right_block"], styles["container_numbered"])}>
          {!resParams?.data?.discordUser ? (
            <Swipe to="/api/login" name="Войти" />
          ) : (
            <div className={styles["profile_button"]} onClick={() => setProfileDropdownMenu((prev) => !prev)}>
              <DiscordIcon />
              <label className={styles["name_user"]}>{resParams.data.discordUser.username}</label>
              {!profileDropdownMenu ? null : (
                <div className={styles["dropdown_menu_profile"]} data-aos="zoom-out-down" data-aos-duration="250">
                  <div className={styles["box_page_list"]}>
                    <div className={styles["discord_name"]}>
                      <DiscordIcon />
                      <label className={styles["string"]}>{resParams.data.discordUser.username}</label>
                    </div>
                    <div className={styles["br_line"]} />
                    {!resParams?.data?.user ? null : <Balance />}
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
