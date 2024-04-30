import classNames from "classnames";
import React, { useEffect, useState } from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TBody from "../../table/TBody";
import axios from "axios";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";

import styles from "./Shopkeepers-all-status.module.scss";

const ShopkeepersAllStatus = () => {
  const isLoading = useLoading();

  const [dataUserShop, setDataUserShop] = useState([]);

  function formatUnixTime(unixTime) {
    const date = new Date(unixTime);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    axios.get("https://map.gmgame.ru/api/all_shop_users").then((res) => {
      setDataUserShop(res.data.data);
    });
  }, []);

  if (isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["shopkeepers_all_status_box"])}>
      {dataUserShop.map((user, index) => (
        <div key={index} className={classNames(styles["one_users"])}>
          <p className={classNames(styles["owner_name"])}>
            {user.owner}, [{user.villager.length}/6], {formatUnixTime(user.last_seen + 2592000000)}
          </p>
          <TableMain>
            <THead>
              <Tr header={true}>
                <Th type="text" content="id" />
                <Th type="text" content="Название" />
                <Th type="text" content="X" />
                <Th type="text" content="Y" />
                <Th type="text" content="Z" />
                <Th type="text" content="Просмотр" />
              </Tr>
            </THead>
            <TBody>
              {user.villager.map((vil, index) => (
                <Tr key={index}>
                  <Th type="text" content={vil.shop_id} />
                  <Th type="text" content={vil.name === "" ? "-" : vil.name} />
                  <Th type="text" content={vil.x} />
                  <Th type="text" content={vil.y} />
                  <Th type="text" content={vil.z} />
                  <Th type="link" href={`https://map.gmgame.ru/#/${vil.x - 31}/64/${vil.z + 31}/-4/GMGameWorld/over`} />
                </Tr>
              ))}
            </TBody>
          </TableMain>
        </div>
      ))}
    </div>
  );
};

export default ShopkeepersAllStatus;
