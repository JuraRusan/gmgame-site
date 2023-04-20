import React from "react";
import {useAxios, sendRequest} from '../../../DataProvider';
import {NavLink, Outlet, Link, Navigate} from "react-router-dom";

import "./Cab.scss";

import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
import Auth from "../../../modules/pages/auth/Auth.js";
import Preload from "../../components/preloader/Preload.js";

const Cab = () => {
  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyGallery = "My gallery";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";

  if (resParams.loading) {
    return <Preload />
  }

  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true} />
  }

  if (!resParams.data.user || !resParams.data.user?.username) {
    return <Auth />
  }

  function setActive(isActive) {
    return isActive ? "tab checked" : "tab";
  }

  function phCabFunctionAdd() {
    document.getElementById("phOpacity1").classList.add("col-1-render");
    document.getElementById("phOpacity2").classList.add("col-2-render");
    document.getElementById("btAdd").classList.add("bt-no");
    document.getElementById("btDel").classList.remove("bt-no");
  }

  function phCabFunctionRemove() {
    document.getElementById("phOpacity1").classList.remove("col-1-render");
    document.getElementById("phOpacity2").classList.remove("col-2-render");
    document.getElementById("btDel").classList.add("bt-no");
    document.getElementById("btAdd").classList.remove("bt-no");
  }

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

  return (
    <div className="main-cab">
      <div className="box">
        <button id="btDel" className="bt-ph bt-no" onClick={phCabFunctionRemove}>&#128473;</button>
        <button id="btAdd" className="bt-ph" onClick={phCabFunctionAdd}>&#9776;</button>
        <div className="col-1" id="phOpacity1">
          <PlayerCabinet {...resParams.data.user} />
          <div className="menu-cabinet">
            <div className="m1">
              <NavLink onClick={phCabFunctionRemove} to="profile" className={({isActive}) => setActive(isActive)}>{profileMenuMyProfile}</NavLink>
              {resParams.data.user.status === 2 &&
              <>
                <NavLink onClick={phCabFunctionRemove} to="territories" className={({isActive}) => setActive(isActive)}>{profileMenuMyTerritories}</NavLink>
                <NavLink onClick={phCabFunctionRemove} to="markers" className={({isActive}) => setActive(isActive)}>{profileMenuMyMarker}</NavLink>
                <NavLink onClick={phCabFunctionRemove} to="articles" className={({isActive}) => setActive(isActive)}>{profileMenuMyArticles}</NavLink>
                {/*<NavLink onClick={phCabFunctionRemove} to="gallery" className={({isActive}) => setActive(isActive)}>{profileMenuMyGallery}</NavLink>*/}
                <NavLink onClick={phCabFunctionRemove} to="prize" className={({isActive}) => setActive(isActive)}>{profileMenuMyPrizes}</NavLink>
                <NavLink onClick={phCabFunctionRemove} to="change_password" className={({isActive}) => setActive(isActive)}>{profileMenuMyChangePassword}</NavLink>
              </>
              }
              {resParams.data.discordUser.role === 'admin' && <Link to="/manager" className="tab">Админка</Link>}
            </div>
            <div className="m1">
              <button className="tab" onClick={logout}>{profileMenuMyGoOut}</button>
            </div>
          </div>
        </div>
        <div className="col-2" id="phOpacity2">
          <Outlet/>
        </div>
      </div>
    </div>
  );
}


export default Cab;
