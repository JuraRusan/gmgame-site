import React from "react";

import "./Cab.scss";

import Header from "../../../common/header/Header.js";
import Fotter from "../../../common/fotter/Fotter.js";
import MyProfile from "../../components/my-profile/My-profile.js";
import MyTerritories from "../../components/my-territories/My-territories.js";
import MyMarkers from "../../components/my-markers/My-markers.js";


const Cab = () => {

  const profileMenuMyProfile = "Профиль";
  const profileMenuMyTerritories = "Мои территории";
  const profileMenuMyMarker = "Мои метки";
  const profileMenuMyArticles = "Статьи";
  const profileMenuMyPrizes = "Призы";
  const profileMenuMyChangePassword = "Изменить пароль";
  const profileMenuMyGoOut = "Выйти";


  return (
    <div className="main-cab">
      <Header />
      <div className="box">
        <div className="col-1">
          <div className="player-box">
            <img className="img-player" src="https://minotar.net/avatar/prestig9110/100" alt="none"></img>
            <h5 className="h5-name-player font-custom-2">prestig9110</h5>
          </div>
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
        </div>
      </div>
      <Fotter />
    </div>
  );
};

export default Cab;
