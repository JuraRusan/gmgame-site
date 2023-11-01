import classNames from "classnames";
import React, {useState} from "react";
import Item from "./Item.js";
import Money from "./Money.js";
import Preload from "../../preloader/Preload.js";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import useLoading from "../../../loading/useLoading";

import styles from "./My-prizes.module.scss";

const MyPrizes = () => {

  const isLoading = useLoading();
  const alert = useAlert();
  const [refreshData, setRefreshData] = useState(false);
  const [refresh, setRefresh] = useState(false);

  let body = useAxios(
    "/api/get_awards/",
    'GET',
    {},
    refreshData
  );

  if (body.loading || refresh || isLoading) {
    return <Preload/>
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
    sendRequest(
      '/api/give_reward',
      'POST',
      {
        rewardId: id
      }
    ).then(response => {
      showMessage(response);
      setRefreshData(id);
      setRefresh(false);
    });
  }

  function getWordForm(count) {
    if (count % 10 === 1 && count % 100 !== 11) {
      return 'выигрыш';
    } else if (count % 10 >= 2 && count % 10 <= 4 && (count % 100 < 10 || count % 100 >= 20)) {
      return 'выигрыша';
    } else {
      return 'выигрышей';
    }
  }

  const wordForm = getWordForm(data.count);

  return (
    <div className={classNames(styles["boxPrizesWrapper"])} data-aos="zoom-in">
      <h4 className={classNames(styles["prizesTitleH4"])}>У Вас {data.count} {wordForm}</h4>
      <div className={classNames(styles["allPrizesContainer"])}>
        {data.awards.map((el, index) => {
          return (
            el.type === 'money'
              ?
              <Money {...{id: el.id, action: giveReward}} key={index}/>
              :
              <Item id={el.id} action={giveReward} key={index}/>
          );
        })}
      </div>
      <a target="_blank" className={classNames(styles["prizes-link"])} rel="noreferrer" href="https://discord.gg/AesVsdPsFj">Если у Вас нет выигрышей, примите участие в розыгрыше на мониторинге &#10148;</a>
    </div>
  );
};

export default MyPrizes;
