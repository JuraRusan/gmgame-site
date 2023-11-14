import classNames from "classnames";
import React, {useEffect, useState} from "react";
import {sendRequest, useAxios} from '../../../DataProvider';
import {Link, Navigate, NavLink, Outlet} from "react-router-dom";
import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
import Auth from "../../../modules/pages/auth/Auth.js";
import Preload from "../../components/preloader/Preload.js";
import useLoading from "../../loading/useLoading";

import styles from "./Cab.module.scss";

const Cab = () => {

  const isLoading = useLoading();

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const displayElement = document.getElementById("display");

    if (displayElement) {
      if (openMenu === true) {
        displayElement.classList.add(classNames(styles["display"]))
      } else {
        displayElement.classList.remove(classNames(styles["display"]))
      }
    }
  }, [openMenu]);

  const closeMenuMain = () => {
    setOpenMenu(false);
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener('click', closeMenuMain);
    } else {
      document.removeEventListener('click', closeMenuMain);
    }

    return () => {
      document.removeEventListener('click', closeMenuMain);
    };
  }, [openMenu]);

  const resParams = useAxios("/api/profile", 'GET', {});

  if (resParams.loading || isLoading) {
    return <Preload full={true}/>
  }

  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true}/>
  }

  if (!resParams.data.user || !resParams.data.user?.username) {
    return <Auth/>
  }

  const logout = () => {
    sendRequest('/api/logout', 'POST', {}).then(response => {
      localStorage.clear();
      window.location.href = '/';
    });
  }

  function setActive(isActive) {
    return isActive ? classNames(styles["tab"], styles["checked"]) : classNames(styles["tab"]);
  }

  return (<div className={classNames(styles["mainCab"])}>
    <div className={classNames(styles["boxWrapper"])}>
      <div className={classNames(styles["phoneContent"])}>
        {openMenu === false
          ?
          <div className={classNames(styles["swipePhone"])} onClick={() => setOpenMenu(!openMenu)}>
            <span className={classNames(styles["ico"])}>&#9776;</span>
            <label className={classNames(styles["text"])}>Открыть меню</label>
          </div>
          :
          <div className={classNames(styles["swipePhone"])} onClick={() => setOpenMenu(!openMenu)}>
            <span className={classNames(styles["ico"], styles["customColorIco"])}>&#128500;</span>
            <label className={classNames(styles["text"])}>Закрыть меню</label>
          </div>
        }
      </div>
      <div className={classNames(styles["columnOne"])} id="display">
        <PlayerCabinet username={resParams.data.user.username}/>
        <div className={classNames(styles["menuCab"])}>
          <div className={classNames(styles["blockLink"])}>
            {resParams.data.user.status === 1 || resParams.data.user.status === 3 || resParams.data.user.status === 4 || resParams.data.user.status === 5 || resParams.data.user.status === 6
              ?
              <>
                <NavLink onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["checked"])} to="profile">Профиль</NavLink>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Мои территории</span>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Мои метки</span>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Статьи</span>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Призы</span>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Моя галерея</span>
                <span onClick={() => {setOpenMenu(false)}} className={classNames(styles["tab"], styles["disabled"])}>Изменить пароль</span>
              </>
              :
              <>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="profile">Профиль</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="territories">Мои территории</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="markers">Мои метки</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="articles">Статьи</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="prize">Призы</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="gallery">Моя галерея</NavLink>
                <NavLink onClick={() => {setOpenMenu(false)}} className={({isActive}) => setActive(isActive)} to="change_password">Изменить пароль</NavLink>
              </>
            }
            {resParams.data.discordUser.role === 'admin' &&
              <Link to="/manager" className={classNames(styles["tab"])}>Менеджер</Link>
            }
          </div>
          <div className={classNames(styles["blockLink"], styles["blockLinkLogout"])}>
            <button className={classNames(styles["tab"], styles["logout"])} onClick={logout}>Выйти</button>
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
        <Outlet/>
      </div>
    </div>
  </div>);
}


export default Cab;
