import classNames from "classnames";
import React from "react";
import {useAxios} from '../../../../DataProvider';
import Preload from "../../preloader/Preload.js";

import styles from "./My-profile.module.scss";

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

  const ipArray = ["msk.gmgame.ru", "lv.gmgame.ru", "by.gmgame.ru"]

  return (
    <div className={classNames(styles["profileBlock"])}>
      <div className={classNames(styles["discordLinkWrapper"])}>
        <img className={classNames(styles["discordImageUser"])} src={`https://cdn.discordapp.com/avatars/${data.discordUser.id}/${data.discordUser.avatar}.png`} alt=""/>
        <h5 className={classNames(styles["discordNameUser"])}>{data.discordUser.username}@{data.discordUser.discriminator}</h5>
      </div>
      <div className={classNames(styles["profileBlockWrapper"])}>

        <div className={classNames(styles["profileOneCube"])}>
          <h5 className={classNames(styles["titleH5"])}>Статус аккаунта</h5>
          <label className={classNames(styles["labelText"])}>{data.status}</label>
        </div>

        <div className={classNames(styles["profileOneCube"])}>
          <h5 className={classNames(styles["titleH5"])}>Версия игры</h5>
          <label className={classNames(styles["labelText"])}>Java Edition {data.version}</label>
        </div>

        {data.user.status === 2 &&
          <div className={classNames(styles["profileOneCubeCustomIp"])}>
            <h5 className={classNames(styles["titleH5"])}>Адреса сервера</h5>
            <div className={classNames(styles["ipList"])}>
              {ipArray.map((item) =>
                <label className={classNames(styles["labelText"])}>{item}</label>
              )}
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default MyProfile;
