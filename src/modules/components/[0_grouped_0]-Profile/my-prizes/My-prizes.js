import classNames from "classnames";
import React, { useState } from "react";
import Item from "./Item.js";
import Preload from "../../preloader/Preload.js";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import useLoading from "../../../loading/useLoading";
import Notifications from "../../notifications/Notifications";
import Link from "../../link/Link";

import styles from "./My-prizes.module.scss";

const MyPrizes = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [refreshData, setRefreshData] = useState(false);
  const [refresh, setRefresh] = useState(false);

  let body = useAxios("/api/get_awards/", "GET", {}, refreshData);

  if (body.loading || refresh || isLoading) {
    return <Preload full={false} />;
  }

  let data = body.data;

  function showMessage(response) {
    console.log(response);
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  }

  const giveReward = (id, event) => {
    event.currentTarget.disabled = true;
    setRefresh(true);
    sendRequest("/api/give_reward", "POST", {
      rewardId: id,
    }).then((response) => {
      showMessage(response);
      setRefreshData(id);
      setRefresh(false);
    });
  };

  return (
    <div className={classNames(styles["boxPrizesWrapper"])}>
      {data.count <= 0 ? (
        <h4 className={classNames(styles["warn_title"])}>
          Если у Вас нет выигрышей, примите участие в розыгрыше на
          <Link
            className={styles["link_size"]}
            href="https://discord.gg/AesVsdPsFj"
            rel="noreferrer"
            target="_blank"
            show={false}
          >
            мониторинге
          </Link>
        </h4>
      ) : (
        <div className={classNames(styles["allPrizesContainer"])}>
          {data.awards.map((el, index) => {
            return <Item id={el.id} action={giveReward} key={index} />;
          })}
        </div>
      )}
      {!data.count ? null : (
        <div className={classNames(styles["box_warn"])}>
          <Notifications
            inf="Для получения приза необходимо находиться онлайн на основном сервере (за исключением денежных призов)"
            type="warn"
          />
        </div>
      )}
    </div>
  );
};

export default MyPrizes;
