import React, {useEffect} from "react";
import AOS from "aos";
import {useAxios} from '../../../DataProvider';
import {NavLink, Outlet} from "react-router-dom";
import {Triangle} from 'react-loader-spinner';
import { Navigate } from "react-router-dom";

import "./Cab.scss";
import "aos/dist/aos.css";

import PlayerCabinet from "../../components/[0_grouped_0]-Profile/player-cabinet/Player-cabinet.js";
import Auth from "../../../modules/pages/auth/Auth.js";

const Cab = () => {
  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

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

  if (resParams.loading) {
    return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
  }

  console.log(resParams)
  if (!resParams.data?.discordUser) {
    return <Navigate to="/api/login" replace={true} />
  }

  if (!resParams.data.user) {
    return <Auth />
  }

  function setActive(isActive) {
    return isActive ? "tab checked" : "tab";
  }

  return (
    <div className="main-cab" data-aos="fade-up">
      <div className="box">
        <div className="col-1">
          <PlayerCabinet {...resParams.data.user} />
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
    </div>
  );
}


export default Cab;
