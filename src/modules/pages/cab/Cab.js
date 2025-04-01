import cN from "classnames";
import React from "react";
import { Link, Navigate, NavLink, Outlet } from "react-router-dom";
import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
import Auth from "../../../modules/pages/auth/Auth.js";
import Preload from "../../components/preloader/Preload.js";
import useLoading from "../../loading/useLoading";
import ProfileSvgComponent from "../../../bases/icons/profileSvg/ProfileSvg";
import MarkerSvgComponent from "../../../bases/icons/markerSvg/MarkerSvg";
import MapSvgComponent from "../../../bases/icons/mapSvg/MapSvg";
import PrizeSvgComponent from "../../../bases/icons/prizeSvg/PrizeSvg";
import ImageSvgComponent from "../../../bases/icons/imageSvg/ImageSvg";
import SettingsSvgComponent from "../../../bases/icons/settingsSvg/SettingsSvg";
import ManagerSvgComponent from "../../../bases/icons/managerSvg/ManagerSvg";
import GoOutSvgComponent from "../../../bases/icons/goOutSvg/GoOutSvg";
import ShopSvgComponent from "../../../bases/icons/shopSvg/ShopSvg";
import useCab from "./useCab";

import styles from "./Cab.module.scss";

const Cab = () => {
  const isLoading = useLoading();
  const { resParams, openMenu, setOpenMenu, closeMenuMain, activeTab, logout } = useCab();

  const compact = cN(styles["tab"], styles["checked"]);

  if (resParams.loading || isLoading) {
    return <Preload full={true} />;
  }

  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true} />;
  }

  if (!resParams.data.user || !resParams.data.user?.username) {
    return <Auth />;
  }

  return (
    <div className={styles["main_profile_container"]}>
      <div className={styles["wrapper_container"]}>
        <div className={styles["phone_content"]}>
          <div className={styles["swipe_phone"]} onClick={() => setOpenMenu((prev) => !prev)}>
            <span
              className={cN(styles["ico"], {
                [styles["custom_color_ico"]]: openMenu,
              })}
            >
              {!openMenu ? "\u2630" : "\u2716"}
            </span>
            <label className={styles["text"]}>{!openMenu ? "Открыть меню" : "Закрыть меню"}</label>
          </div>
        </div>
        <div className={styles["column_one"]} id="display">
          <PlayerCabinet username={resParams.data.user.username} />
          <div className={styles["menu_profile"]}>
            <div className={styles["block_link"]}>
              {[1, 3, 4, 5, 6].includes(resParams.data.user.status) ? (
                <>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={compact} to="profile"><ProfileSvgComponent/>Профиль</NavLink>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><MapSvgComponent/>Мои территории</span>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><span className={styles["stroke_color"]}><MarkerSvgComponent/></span>Мои метки</span>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><PrizeSvgComponent/>Призы</span>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><ImageSvgComponent/>Моя галерея</span>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><span className={styles["stroke_color"]}><ShopSvgComponent/></span>Мои магазины</span>
                  {/* prettier-ignore */}
                  <span onClick={closeMenuMain} className={compact}><SettingsSvgComponent/>Изменить пароль</span>
                </>
              ) : (
                <>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="profile"><ProfileSvgComponent/>Профиль</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="territories"><MapSvgComponent/>Мои территории</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="markers"><span className={styles["stroke_color"]}><MarkerSvgComponent/></span>Мои метки</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="prize"><PrizeSvgComponent/>Призы</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="gallery"><ImageSvgComponent/>Моя галерея</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="shop_user"><span className={styles["stroke_color"]}><ShopSvgComponent/></span>Мои магазины</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={closeMenuMain} className={activeTab} to="change_password"><SettingsSvgComponent/>Изменить пароль</NavLink>
                </>
              )}
              {resParams.data.discordUser.role === "admin" ? (
                <Link to="/manager" className={cN(styles["tab"])}>
                  <ManagerSvgComponent />
                  Менеджер
                </Link>
              ) : null}
            </div>
            <div className={cN(styles["block_link"], styles["block_link_logout"])}>
              <button className={cN(styles["tab"], styles["logout"])} onClick={logout}>
                <GoOutSvgComponent />
                Выйти
              </button>
            </div>
            <div className={styles["delimiter"]}>
              <span className={styles["bullet"]}>&#8226;</span>
              <span className={styles["bullet"]}>&#8226;</span>
              <span className={styles["bullet"]}>&#8226;</span>
              <span className={styles["bullet"]}>&#8226;</span>
              <span className={styles["bullet"]}>&#8226;</span>
            </div>
          </div>
        </div>
        <div className={styles["column_two"]}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Cab;
