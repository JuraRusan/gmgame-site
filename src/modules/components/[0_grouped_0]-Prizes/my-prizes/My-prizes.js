import {React, useState} from "react";
import Item from "../item/Item.js";
import Money from "../money/Money.js";
import Preload from "../../preloader/Preload.js";
import {useAxios, sendRequest} from '../../../../DataProvider';
import {useAlert} from "react-alert";

import "./My-prizes.scss";

const MyPrizes = () => {
  const alert = useAlert();
  const [refreshData, setRefreshData] = useState(false);
  const [refresh, setRefresh] = useState(false);

  let body = useAxios(
    "/api/get_awards/",
    'GET',
    {},
    refreshData
  );

  if (body.loading || refresh) {
    return <Preload />
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
    <div className="box-prizes">
      <h4 className="prizes-h4">У Вас {data.count} выигрышей</h4>
      {/*<h4 className="prizes-h4">У Вас нету выигрышей, примите участие в розыгрыше на мониторинге</h4>*/}
      <div className="all-prizes">
        {data.awards.map((el, index) => {
          return (
              el.type === 'money' ? <Money {...{id: el.id, action: giveReward}}/> : <Item id={el.id} action={giveReward}/>
          );
        })}
      </div>
    </div>
  );
};

export default MyPrizes;
