import React, {useEffect} from "react";
import AOS from "aos";
import {useAxios} from '../../../DataProvider';
import {Link, Outlet} from "react-router-dom";
import {Triangle} from 'react-loader-spinner';

import "./Cab.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import PlayerCabinet from "../../components/player-cabinet/Player-cabinet.js";

const Cab = () => {
  const resParams = useAxios(
    "/api/me/",
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

  const data = resParams.data;

  if (resParams.loading) {
    return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
  }

  return (
    <div className="main-cab" data-aos="fade-up">
      <Header/>
      <div className="box">
        <div className="col-1">
          <PlayerCabinet {...data.user} />
          <div className="menu-cabinet">
            <div className="m1">
              <Link to="profile" className="tab checked">{profileMenuMyProfile}</Link>
              <Link to="territories" className="tab">{profileMenuMyTerritories}</Link>
              <Link to="markers" className="tab">{profileMenuMyMarker}</Link>
              <Link to="articles" className="tab">{profileMenuMyArticles}</Link>
              <Link to="prize" className="tab">{profileMenuMyPrizes}</Link>
            </div>
            <div className="m1">
              <Link to="change_password" className="tab">{profileMenuMyChangePassword}</Link>
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
