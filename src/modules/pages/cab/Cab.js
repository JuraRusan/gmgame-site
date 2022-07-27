import React, { useEffect } from "react";
import AOS from "aos";

import "./Cab.scss";
import "aos/dist/aos.css";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import PlayerCabinet from "../../components/player-cabinet/Player-cabinet.js";
import MyProfile from "../../components/my-profile/My-profile.js";
import MyTerritories from "../../components/my-territories/My-territories.js";
import MyMarkers from "../../components/my-markers/My-markers.js";
import Articles from "../../components/articles/Articles.js";
import MyPrizes from "../../components/my-prizes/My-prizes.js";
import ChangePassword from "../../components/change-password/Change-password.js";


const Cab = () => {

  useEffect(() => { AOS.init({ duration: 1000 }); }, []);

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";


  return (
    <div className="main-cab" data-aos="fade-up">
      <Header />
      <div className="box">
        <div className="col-1">
          <PlayerCabinet />
          <div className="menu-cabinet">
            <div className="m1">
              <label className="tab checked">{profileMenuMyProfile}</label>
              <label className="tab">{profileMenuMyTerritories}</label>
              <label className="tab">{profileMenuMyMarker}</label>
              <label className="tab">{profileMenuMyArticles}</label>
              <label className="tab">{profileMenuMyPrizes}</label>
            </div>
            <div className="m1">
              <label className="tab">{profileMenuMyChangePassword}</label>
              <label className="tab">{profileMenuMyGoOut}</label>
            </div>
          </div>
        </div>
        <div className="col-2">
          <MyProfile />
          {/* <MyTerritories /> */}
          {/* <MyMarkers /> */}
          {/* <Articles /> */}
          {/* <MyPrizes /> */}
          {/* <ChangePassword /> */}
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Cab;
