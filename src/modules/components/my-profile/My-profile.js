import React from "react";

import "./My-profile.scss";

const MyProfile = () => {

 const profileApplicationNotSubmitted = "Заявка не подана";
 const profileApplicationUnderConsideration = "Заявка на рассмотрении";
 const profileApplicationNotAccepted = "Заявка не принята";
 const profileApplicationOnWhitelist = "В вайт листе";
 const profileApplicationDroppedOffWhitelist = "Выпал из вайтлиста";
 const profileApplicationBannedCheck = "Забанен, чекай";

 const profileServerAdress = "Адрес сервера";
 const profileApplicationAkk = "Статус аккаунта";
 const profileServerVersion = "Версия игры";

 const profileServerAdressOutput = "mine.gmgame.ru";
 const profileServerVersionOutput = "Java Edition 1.19";

 return (
  <div className="profile-block">
   <div className="ds-link">
    <img className="ds-img" src="https://minotar.net/avatar/prestig9110/75" alt="none"></img>
    <h5 className="h5-ds">prestig9110@1026</h5>
   </div>
   <div className="prof-block">
    <div className="prof-cont">
     <h5 className="h5-cont">{profileServerAdress}</h5>
     <label className="label-cout font-custom-2 ">{profileServerAdressOutput}<span>#</span></label>
    </div>
    <div className="prof-cont">
     <h5 className="h5-cont">{profileApplicationAkk}</h5>
     <label className="label-cout profile-application-under-consideration">{profileApplicationUnderConsideration}</label>
    </div>
    <div className="prof-cont">

    </div>
    <div className="prof-cont">
     <h5 className="h5-cont">{profileServerVersion}</h5>
     <label className="label-cout font-custom-2">{profileServerVersionOutput}</label>
    </div>
   </div>
  </div>
 );
}

export default MyProfile;
