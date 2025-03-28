import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { sendRequest, useAxios } from "../../../DataProvider";
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

import styles from "./Cab.module.scss";

const Cab = () => {
  const isLoading = useLoading();

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const displayElement = document.getElementById("display");

    if (displayElement) {
      if (openMenu === true) {
        displayElement.classList.add(classNames(styles["display"]));
      } else {
        displayElement.classList.remove(classNames(styles["display"]));
      }
    }
  }, [openMenu]);

  const closeMenuMain = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("click", closeMenuMain);
    } else {
      document.removeEventListener("click", closeMenuMain);
    }

    return () => {
      document.removeEventListener("click", closeMenuMain);
    };
  }, [openMenu]);

  const resParams = useAxios("/api/profile", "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={true} />;
  }

  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true} />;
  }

  if (!resParams.data.user || !resParams.data.user?.username) {
    return <Auth />;
  }

  const logout = () => {
    sendRequest("/api/logout", "POST", {}).then((response) => {
      localStorage.clear();
      window.location.href = "/";
    });
  };

  function setActive(isActive) {
    return isActive ? classNames(styles["tab"], styles["checked"]) : classNames(styles["tab"]);
  }

  return (
    <div className={classNames(styles["mainCab"])}>
      <div className={classNames(styles["boxWrapper"])}>
        <div className={classNames(styles["phoneContent"])}>
          {openMenu === false ? (
            <div className={classNames(styles["swipePhone"])} onClick={() => setOpenMenu(!openMenu)}>
              <span className={classNames(styles["ico"])}>&#9776;</span>
              <label className={classNames(styles["text"])}>Открыть меню</label>
            </div>
          ) : (
            <div className={classNames(styles["swipePhone"])} onClick={() => setOpenMenu(!openMenu)}>
              <span className={classNames(styles["ico"], styles["customColorIco"])}>&#10006;</span>
              <label className={classNames(styles["text"])}>Закрыть меню</label>
            </div>
          )}
        </div>
        <div className={classNames(styles["columnOne"])} id="display">
          <PlayerCabinet username={resParams.data.user.username} />
          <div className={classNames(styles["menuCab"])}>
            <div className={classNames(styles["blockLink"])}>
              {resParams.data.user.status === 1 ||
              resParams.data.user.status === 3 ||
              resParams.data.user.status === 4 ||
              resParams.data.user.status === 5 ||
              resParams.data.user.status === 6 ? (
                <>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["checked"])} to="profile"><ProfileSvgComponent width="100%" height="100%" color="#f4f4f4"/>Профиль</NavLink>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><MapSvgComponent width="100%" height="100%" color="#f4f4f4"/>Мои территории</span>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><span className={classNames(styles["stroke_color"])}><MarkerSvgComponent width="100%" height="100%" color="#f4f4f4"/></span>Мои метки</span>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><PrizeSvgComponent width="100%" height="100%" color="#f4f4f4"/>Призы</span>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><ImageSvgComponent width="100%" height="100%" color="#f4f4f4"/>Моя галерея</span>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><span className={classNames(styles["stroke_color"])}><ShopSvgComponent width="100%" height="100%" color="#f4f4f4"/></span>Мои магазины</span>
                  {/* prettier-ignore */}
                  <span onClick={() => {setOpenMenu(false);}} className={classNames(styles["tab"], styles["disabled"])}><SettingsSvgComponent width="100%" height="100%" color="#f4f4f4"/>Изменить пароль</span>
                </>
              ) : (
                <>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="profile"><ProfileSvgComponent width="100%" height="100%" color="#f4f4f4"/>Профиль</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="territories"><MapSvgComponent width="100%" height="100%" color="#f4f4f4"/>Мои территории</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="markers"><span className={classNames(styles["stroke_color"])}><MarkerSvgComponent width="100%" height="100%" color="#f4f4f4"/></span>Мои метки</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="prize"><PrizeSvgComponent width="100%" height="100%" color="#f4f4f4"/>Призы</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="gallery"><ImageSvgComponent width="100%" height="100%" color="#f4f4f4"/>Моя галерея</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="shop_user"><span className={classNames(styles["stroke_color"])}><ShopSvgComponent width="100%" height="100%" color="#f4f4f4"/></span>Мои магазины</NavLink>
                  {/* prettier-ignore */}
                  <NavLink onClick={() => {setOpenMenu(false);}} className={({isActive}) => setActive(isActive)} to="change_password"><SettingsSvgComponent width="100%" height="100%" color="#f4f4f4"/>Изменить пароль</NavLink>
                </>
              )}
              {
                resParams.data.discordUser.role === "admin" && <Link to="/manager" className={classNames(styles["tab"])}><ManagerSvgComponent width="100%" height="100%" color="#f4f4f4"/>Менеджер</Link> // prettier-ignore
              }
            </div>
            <div className={classNames(styles["blockLink"], styles["blockLinkLogout"])}>
              <button className={classNames(styles["tab"], styles["logout"])} onClick={logout}>
                <GoOutSvgComponent width="100%" height="100%" color="#f4f4f4" />
                Выйти
              </button>
            </div>
            <div className={classNames(styles["delimiter"])}>
              <span className={classNames(styles["bullet"])}>&#8226;</span>
              <span className={classNames(styles["bullet"])}>&#8226;</span>
              <span className={classNames(styles["bullet"])}>&#8226;</span>
              <span className={classNames(styles["bullet"])}>&#8226;</span>
              <span className={classNames(styles["bullet"])}>&#8226;</span>
            </div>
          </div>
        </div>
        <div className={classNames(styles["columnTwo"])}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Cab;
