import classNames from "classnames";
import React, { useState } from "react";
import Item from "./Item.js";
import Preload from "../../preloader/Preload.js";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useAlert } from "@blaumaus/react-alert";
import useLoading from "../../../loading/useLoading";
import Link from "../../link/Link";
import ItemBuy from "./Item-buy";

import styles from "./My-prizes.module.scss";

const test = [
  {
    id: "netherite_pickaxe",
    name: "Незеритовая кирка",
    lore: `['["",{"text":"Уникальная кирка, которая получена за голосование из мониторинга","color":"gold"}]']`,
    amount: 9999,
    enchantments: {
      efficiency: 5,
      mending: 1,
      unbreaking: 3,
      silk_touch: 1,
    },
  },
];

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
    <div className={classNames(styles["prizes_container"])}>
      <div className={classNames(styles["type_container"])}>
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
          <>
            {data.awards.map((el, index) => (
              <Item id={el.id} action={giveReward} key={index} />
            ))}
          </>
        )}
      </div>
      <div className={styles["br_line"]} />
      <div className={classNames(styles["type_container"])}>
        <ItemBuy item={test[0]} />
        <ItemBuy item={test[0]} />
        <ItemBuy item={test[0]} />
        <ItemBuy item={test[0]} />
        <ItemBuy item={test[0]} />
      </div>
    </div>
  );
};

export default MyPrizes;
