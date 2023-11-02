import classNames from "classnames";
import React, {useState} from "react";
import {useAxios} from '../../../../DataProvider';
import Preload from "../../preloader/Preload.js";
import CopySvgComponent from "../../../../bases/icons/copySVG/copySvg";
import CheckSvgComponent from "../../../../bases/icons/checkSVG/checkSvg";
import useLoading from "../../../loading/useLoading";

import styles from "./My-profile.module.scss";
import "aos/dist/aos.css";

const MyProfile = () => {

  const isLoading = useLoading();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const resParams = useAxios(
    "/api/profile",
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>
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
    <div className={classNames(styles["profileBlock"])}>
      <div className={classNames(styles["content"])}>

        {data.user.status === 1
          ?
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>Ваша заявка на рассмотрении. Пожалуйста ожидайте.</h4>
          </div>
          :
          undefined
        }

        {data.user.status === 2
          ?
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"], styles["good"])}>Ваша заявка одобрена. Добро пожаловать на сервер!</h4>
            <h4 className={classNames(styles["text"])}>Пожалуйста, ознакомьтесь с "правилами" и разделом "Часто задаваемые вопросы" для получения полезной информации.</h4>
            <div className={classNames(styles["version"])}>
              <span className={classNames(styles["versionNumber"])}>Java Edition {data.version}</span>
            </div>
            <div className={classNames(styles["ipList"])}>
              <label className={classNames(styles["label"])}>Серверные адреса для подключения:</label>
              {ipArray.map((el, index) => (
                <div className={classNames(styles["wrapper"])} key={index} onClick={() => handleCopyClick(index)}>
                  <label className={classNames(styles["ip"], {[styles["ipTo"]]: copiedIndex === index})}>{el}</label>
                  <div className={classNames(styles["copy"])}>
                    {copiedIndex === index
                      ?
                      <span className={classNames(styles["ico"], styles["icoTo"])}>
                        <CheckSvgComponent width="100%" height="100%" color="#f4f4f4"/>
                      </span>
                      :
                      <span className={classNames(styles["ico"])}>
                        <CopySvgComponent width="100%" height="100%" color="#f4f4f4"/>
                      </span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
          :
          undefined
        }

        {data.user.status === 3
          ?
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>Ваша заявка отклонена. Спасибо за понимание.</h4>
          </div>
          :
          undefined
        }

        {data.user.status === 4
          ?
          <img className={classNames(styles["banned"])} src="../site_assets/pages/webp/banned.webp" alt="none" width="100%" height="auto"/>
          :
          undefined
        }

        {data.user.status === 5
          ?
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>Ваш аккаунт неактивен из-за продолжительного отсутствия. Обратитесь к нам в Discord, если желаете восстановить активность.</h4>
          </div>
          :
          undefined
        }

      </div>
    </div>
  );
}

export default MyProfile;
