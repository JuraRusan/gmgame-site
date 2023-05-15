import classNames from "classnames";
import {React, useEffect, useState} from "react";
import Item from "./Item.js";
import Money from "./Money.js";
import Preload from "../../preloader/Preload.js";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import AOS from "aos";

import styles from "./My-prizes.module.scss";
import "aos/dist/aos.css";

const MyPrizes = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(true);
  const [refreshData, setRefreshData] = useState(false);
  const [refresh, setRefresh] = useState(false);

  let body = useAxios(
    "/api/get_awards/",
    'GET',
    {},
    refreshData
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (body.loading || refresh || isLoading) {
    return <Preload/>
  }

  let data = body.data;

  function showMessage(response) {
    console.log(response);
    if (response.message) {
      alert.success(response.message);
      // navigate(-1);
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

  return (
    <div className={classNames(styles["boxPrizesWrapper"])} data-aos="zoom-in">
      <h4 className={classNames(styles["prizesTitleH4"])}>У Вас {data.count} выигрышей</h4>
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
      <a target="_blank" className={classNames(styles["prizes-link"])} rel="noreferrer" href="https://discord.gg/AesVsdPsFj">Если у Вас нет выигрышей, примите участие в розыгрыше на мониторинге &#129133;</a>
    </div>
  );
};

export default MyPrizes;
