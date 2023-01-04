import React from "react";
import {useAxios} from '../../../../DataProvider';

import "./My-profile.scss";
import Preload from "../../preloader/Preload.js";


const MyProfile = () => {
  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload />
  }

  const data = resParams.data;


  // const user = params.user;
  // const userDC = params.userDC;
  // const version = params.version;


  // const profileApplicationNotSubmitted = "Заявка не подана";
  // const profileApplicationUnderConsideration = "Заявка на рассмотрении";
  // const profileApplicationNotAccepted = "Заявка не принята";
  // const profileApplicationOnWhitelist = "В вайт листе";
  // const profileApplicationDroppedOffWhitelist = "Выпал из вайтлиста";
  // const profileApplicationBannedCheck = "Забанен, чекай";

  const profileServerAdress = "Адрес сервера";
  const profileApplicationAkk = "Статус аккаунта";
  const profileServerVersion = "Версия игры";

  const profileServerAdressOutput = "mine.gmgame.ru";
  const profileServerVersionOutput = "Java Edition " + data.version;

  // function activateAnimated() {
  //   var copyText = document.getElementById("myInput");
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); /* For mobile devices */
  //   navigator.clipboard.writeText(copyText.value);
  // }

  return (
    <div className="profile-block">
      <div className="ds-link">
        <img className="ds-img"
             src={`https://cdn.discordapp.com/avatars/${data.discordUser.id}/${data.discordUser.avatar}.png`}
             alt="none"></img>
        <h5 className="h5-ds">{data.discordUser.username}@{data.discordUser.discriminator}</h5>
      </div>
      <div className="prof-block">

        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerAdress}</h5>

          <div className="label-cout">
            <input className="label-cout font-custom-2" type="text" value={profileServerAdressOutput} id="myInput"
                   disabled/>
          </div>
        </div>

        <div className="prof-cont">
          <h5 className="h5-cont">{profileApplicationAkk}</h5>
          <label className="label-cout profile-application-under-consideration">{data.status}</label>
        </div>

        <div className="prof-cont"></div>

        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerVersion}</h5>
          <label className="label-cout font-custom-2">{profileServerVersionOutput}</label>
        </div>

      </div>
    </div>
  );
}

export default MyProfile;
