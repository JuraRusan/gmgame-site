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
    return <Preload/>
  }

  const data = resParams.data;

  const profileServerAdress = "Адреса сервера";
  const profileApplicationAkk = "Статус аккаунта";
  const profileServerVersion = "Версия игры";

  const profileServerVersionOutput = "Java Edition " + data.version;

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
          <h5 className="h5-cont">{profileApplicationAkk}</h5>
          <label className="label-cout">{data.status}</label>
        </div>

        <div className="prof-cont">
          <h5 className="h5-cont">{profileServerVersion}</h5>
          <label className="label-cout font-custom-2">{profileServerVersionOutput}</label>
        </div>

        {data.user.status === 2 &&
          <div className="prof-cont-custom">
            <h5 className="h5-cont">{profileServerAdress}</h5>
            <div className="ip-list">
              <label className="label-cout-custom font-custom-2">msk.gmgame.ru</label>
              <label className="label-cout-custom font-custom-2">lv.gmgame.ru</label>
              <label className="label-cout-custom font-custom-2">by.gmgame.ru</label>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default MyProfile;
