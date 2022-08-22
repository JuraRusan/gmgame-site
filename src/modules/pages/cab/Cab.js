import React, {useEffect, useContext} from "react";
import AOS from "aos";
// import {useAxios} from '../../../DataProvider';
import {NavLink, Outlet} from "react-router-dom";
import {UserContext} from '../../../Context';
// import {Triangle} from 'react-loader-spinner';
import { Navigate } from "react-router-dom";

import "./Cab.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import PlayerCabinet from "../../components/player-cabinet/Player-cabinet.js";
// import Auth from "../../../modules/pages/auth/Auth.js";

const Cab = () => {
  const {userContext} = useContext(UserContext);
  // const resParams = useAxios(
  //   "/api/me/",
  //   'GET',
  //   {}
  // );

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";

  // const data = resParams.data;

  // if (resParams.loading) {
  //   return <div className="preloader-box"><Triangle wrapperClass="preloader"/></div>
  // }
  console.log(userContext.discordUser)
  if (userContext.discordUser === 'not_auth') {
    return <Navigate to="/login" replace={true} />
  }

  // if (userContext.user === 'not_found') {
  //   return <Auth />
  // }

  function setActive(isActive) {
    return isActive ? "tab checked" : "tab";
  }

  return (
    <div className="main-cab" data-aos="fade-up">
      <Header/>
      <div className="box">
        <div className="col-1">
          <PlayerCabinet {...userContext.user} />
          <div className="menu-cabinet">
            <div className="m1">
              <NavLink to="profile" className={({ isActive }) => setActive(isActive)}>{profileMenuMyProfile}</NavLink>
              <NavLink to="territories" className={({ isActive }) => setActive(isActive)}>{profileMenuMyTerritories}</NavLink>
              <NavLink to="markers" className={({ isActive }) => setActive(isActive)}>{profileMenuMyMarker}</NavLink>
              <NavLink to="articles" className={({ isActive }) => setActive(isActive)}>{profileMenuMyArticles}</NavLink>
              <NavLink to="prize" className={({ isActive }) => setActive(isActive)}>{profileMenuMyPrizes}</NavLink>
              <NavLink to="change_password" className={({ isActive }) => setActive(isActive)}>{profileMenuMyChangePassword}</NavLink>
            </div>
            <div className="m1">
              <label className="tab">{profileMenuMyGoOut}</label>
            </div>
          </div>
        </div>
        <div className="col-2">
          <Outlet/>
        </div>
      </div>
      <Fotter/>
    </div>
  );
}


export default Cab;
