import classNames from "classnames";
import React, { useState } from "react";
import { useAlert } from "react-alert";
import { useAxios } from "../../../../DataProvider";
import Preload from "../../preloader/Preload.js";
import CopySvgComponent from "../../../../bases/icons/copySvg/CopySvg";
import CheckSvgComponent from "../../../../bases/icons/checkSvg/CheckSvg";
import useLoading from "../../../loading/useLoading";
import { sendRequest } from "../../../../DataProvider";
import Button from "../../button/Button";

import styles from "./My-profile.module.scss";

const MyProfile = () => {
  const alert = useAlert();

  const isLoading = useLoading();
  const [copiedIndex, setCopiedIndex] = useState(null);

  const resParams = useAxios("/api/profile", "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
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

  const resubmit = () => {
    sendRequest("/api/resubmit", "POST", {}).then((response) => {
      if (!response.error) {
        window.location.reload(true);
      } else {
        alert.error(response.body?.error || response.error);
      }
    });
  };

  return (
    <div className={classNames(styles["profileBlock"])}>
      <div className={classNames(styles["content"])}>
        {data.user.status === 1 ? (
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>Ваша заявка на рассмотрении. Пожалуйста ожидайте.</h4>
          </div>
        ) : null}

        {data.user.status === 2 ? (
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"], styles["good"])}>Ваша заявка одобрена. Добро пожаловать на сервер!</h4>
            <h4 className={classNames(styles["text"])}>Пожалуйста, ознакомьтесь с правилами, вики и разделом часто задаваемые вопросы для получения полезной информации.</h4>
            <div className={classNames(styles["version"])}>
              <span className={classNames(styles["versionNumber"])}>Java Edition {data.version}</span>
            </div>
            <div className={classNames(styles["ipList"])}>
              <label className={classNames(styles["label"])}>Серверные адреса для подключения:</label>
              {ipArray.map((el, index) => (
                <div className={classNames(styles["wrapper"])} key={index} onClick={() => handleCopyClick(index)}>
                  <label className={classNames(styles["ip"], {[styles["ipTo"]]: copiedIndex === index,})}>{el}</label>
                  <div className={classNames(styles["copy"])}>
                    {copiedIndex === index
                      ? (<span className={classNames(styles["ico"], styles["icoTo"])}><CheckSvgComponent width="100%" height="100%" color="#f4f4f4"/></span>)
                      : (<span className={classNames(styles["ico"])}><CopySvgComponent width="100%" height="100%" color="#f4f4f4"/></span>)
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {data.user.status === 3 ? (
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>Ваша заявка отклонена. Спасибо за понимание.</h4>
            {!data.user.reapplication && data.user.status === 3 ?
              <>
                <div className={classNames(styles["user_update_statement"])}>
                  <Button view="submit" label="Переподать заявку" onClick={() => resubmit()}/>
                </div>
                <h4 className={classNames(styles["text"])}>Чтобы увеличить вероятность вашего принятия, пожалуйста, уделите больше внимания деталям в заявке.</h4>
              </>
              : null
            }
          </div>
        ) : null}

        {data.user.status === 4 ? (
          <img
            className={classNames(styles["banned"])}
            src="../site_assets/pages/webp/banned.webp"
            alt="none"
            width="100%"
            height="auto"
          />
        ) : null}

        {data.user.status === 5 ? (
          <div className={classNames(styles["wrapperText"])}>
            <h4 className={classNames(styles["text"])}>
              Ваш аккаунт неактивен из-за продолжительного отсутствия.
              Обратитесь к нам в Discord, если желаете восстановить активность.
            </h4>
          </div>
        ) : undefined}
      </div>
    </div>
  );
};

export default MyProfile;
