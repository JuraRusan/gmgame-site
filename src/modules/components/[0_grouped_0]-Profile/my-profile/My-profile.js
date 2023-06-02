import classNames from "classnames";
import {React, useState, useEffect} from "react";
import {useAxios} from '../../../../DataProvider';
import Preload from "../../preloader/Preload.js";
import CopySvgComponent from "../../../../bases/icons/copySVG/copySvg";
import CheckSvgComponent from "../../../../bases/icons/checkSVG/checkSvg";
import AOS from "aos";

import styles from "./My-profile.module.scss";
import "aos/dist/aos.css";

const MyProfile = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [copiedIndex, setCopiedIndex] = useState(null);

  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload/>
  }

  const data = resParams.data;

  const ipArray = ["msk.gmgame.ru", "lv.gmgame.ru", "by.gmgame.ru"];

  const handleCopyClick = (index) => {
    navigator.clipboard.writeText(ipArray[index]);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 3000);
  };

  return (
    <div className={classNames(styles["profileBlock"])} data-aos="zoom-in">
      {/*<div className={classNames(styles["discordLinkWrapper"])}>*/}
      {/*  <img className={classNames(styles["discordImageUser"])} src={`https://cdn.discordapp.com/avatars/${data.discordUser.id}/${data.discordUser.avatar}.png`} alt=""/>*/}
      {/*  <h5 className={classNames(styles["discordNameUser"])}>{data.discordUser.username}@{data.discordUser.discriminator}</h5>*/}
      {/*</div>*/}
      <div className={classNames(styles["profileBlockWrapper"])}>

        {data.user.status === 4
          ?
          <></>
          :
          <>
            <div className={classNames(styles["profileOneCube"])}>
              <h5 className={classNames(styles["titleH5"])}>Статус аккаунта</h5>
              <label className={classNames(styles["labelText"])}>{data.status}</label>
            </div>
            <div className={classNames(styles["profileOneCube"])}>
              <h5 className={classNames(styles["titleH5"])}>Версия игры</h5>
              <label className={classNames(styles["labelText"])}>Java Edition {data.version}</label>
            </div>
          </>
        }

        {data.user.status === 2 &&
          <div className={classNames(styles["profileOneCubeCustomIp"])}>
            <h5 className={classNames(styles["titleH5"])}>Адреса сервера</h5>
            <div className={classNames(styles["ipList"])}>
              {ipArray.map((el, index) => (
                <div className={classNames(styles["wrapperIp"])} key={index}>
                  <label className={classNames(styles["text"])}>{el}</label>
                  <button className={classNames(styles["copy"])} onClick={() => handleCopyClick(index)}>
                    {copiedIndex === index
                      ?
                      <span className={classNames(styles["ico"])}>
                        <CheckSvgComponent width="100%" height="100%" color="#f4f4f4"/>
                      </span>
                      :
                      <span className={classNames(styles["ico"])}>
                        <CopySvgComponent width="100%" height="100%" color="#f4f4f4"/>
                      </span>
                    }
                  </button>
                </div>
              ))}
            </div>
          </div>
        }

      </div>
    </div>
  )
    ;
}

export default MyProfile;
