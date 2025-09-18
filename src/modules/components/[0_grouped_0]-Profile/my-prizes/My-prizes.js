import cN from "classnames";
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
    type: "item",
    id: "netherite_pickaxe",
    name: "Незеритовая кирка",
    amount: 9999,
    enchantments: {
      efficiency: 5,
      mending: 1,
      unbreaking: 5,
      silk_touch: 1,
    },
  },
  {
    type: "item",
    id: "netherite_hoe",
    name: "Незеритовая мотыга",
    amount: 9999,
    enchantments: {
      efficiency: 5,
      mending: 1,
      unbreaking: 5,
      silk_touch: 1,
    },
  },
  {
    type: "item",
    id: "netherite_axe",
    name: "Незеритовая топор",
    amount: 9999,
    enchantments: {
      efficiency: 5,
      mending: 1,
      unbreaking: 5,
      silk_touch: 1,
    },
  },
  {
    type: "perms",
    id: "custom",
    name: "Игровые дополнение",
    amount: 9999,
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    type: "item",
    id: "netherite_shovel",
    name: "Незеритовая лопата",
    amount: 9999,
    enchantments: {
      efficiency: 5,
      mending: 1,
      unbreaking: 5,
      silk_touch: 1,
    },
  },
  {
    type: "item",
    id: "elytra",
    name: "Елитра",
    amount: 9999,
    enchantments: {
      mending: 1,
      unbreaking: 5,
    },
  },
  {
    type: "item",
    id: "stick",
    name: "Палка вышибалка",
    amount: 9999,
    enchantments: {
      knockback: 1,
      mending: 1,
    },
  },
];

const MyPrizes = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [refreshData, setRefreshData] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const [type, setType] = useState(0);

  const resParams = useAxios("/api/get_awards/", "GET", {}, refreshData);

  const Btn = ({ name, mini, number }) => {
    return (
      <button
        onClick={() => setType(number)}
        className={cN(styles["switch"], {
          [styles["active"]]: number === type,
          [styles["mini"]]: mini,
        })}
      >
        {name}
      </button>
    );
  };

  const Guide = () => {
    return (
      <div className={styles["guide"]}>
        <p className={styles["text"]}>Голосуя за сервер, вы поддерживаете его развитие и получаете награды</p>
        <p className={styles["text"]}>
          За каждый голос начисляется 10 монет, а также есть шанс получить случайный зачарованный предмет
        </p>
        <p className={styles["text"]}>
          Заработанные монеты можно тратить в магазине (Ассортимент обновляется каждую неделю, не пропустите редкие
          товары)
        </p>
        <br />
        <p className={styles["text"]}>Голосовать можно на популярных мониторингах:</p>
        <ul className={styles["list_links"]}>
          <li className={styles["text"]}>
            &#8226; C шансом на приз и монеты
            <Link
              href="https://hotmc.ru/minecraft-server-205185"
              className={styles["link_size"]}
              rel="noreferrer"
              target="_blank"
            >
              HotMc
            </Link>
          </li>
          <li className={styles["text"]}>
            &#8226; C шансом на приз и монеты
            <Link href="https://mineserv.top/gmgame" className={styles["link_size"]} rel="noreferrer" target="_blank">
              Mineserv
            </Link>
          </li>
          <li className={styles["text"]}>
            &#8226; Без наград, но очень важен для продвижения
            <Link
              href="https://minecraftrating.ru/server/gmgame/"
              className={styles["link_size"]}
              rel="noreferrer"
              target="_blank"
            >
              MinecraftRating
            </Link>
          </li>
          <li className={styles["text"]}>
            &#8226; Без наград, но очень важен для продвижения
            <Link
              href="https://mclike.com/minecraft-server-192962"
              className={styles["link_size"]}
              rel="noreferrer"
              target="_blank"
            >
              McLike
            </Link>
          </li>
        </ul>
        <br />
        <p className={styles["text"]}>Оставляйте отзывы — это помогает привлекать новых игроков.</p>
      </div>
    );
  };

  const Free = () => {
    return (
      <div className={styles["type_container"]}>
        {resParams.data.count <= 0 ? (
          <h4 className={styles["warn_title"]}>
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
            {resParams.data.awards.map((el, index) => (
              <Item id={el.id} action={giveReward} key={index} />
            ))}
          </>
        )}
      </div>
    );
  };

  const Paid = () => {
    return (
      <div className={styles["type_container"]}>
        <ItemBuy item={test[0]} />
        <ItemBuy item={test[3]} />
        <ItemBuy item={test[4]} />
        <ItemBuy item={test[5]} />
        <ItemBuy item={test[6]} />
      </div>
    );
  };

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  };

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

  if (resParams.loading || refresh || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={styles["prizes_container"]}>
      <div className={styles["local_nav"]}>
        <Btn number={1} name="Призы" />
        <Btn number={0} name="?" mini />
        <Btn number={2} name="Магазин" />
      </div>
      <div className={styles["br_line"]} />
      {type !== 0 ? null : <Guide />}
      {type !== 1 ? null : <Free />}
      {type !== 2 ? null : <Paid />}
    </div>
  );
};

export default MyPrizes;
