import classNames from "classnames";
import React, { useEffect, useMemo, useState } from "react";
import TableMain from "../../table/TableMain";
import THead from "../../table/THead";
import Tr from "../../table/Tr";
import Th from "../../table/Th";
import TBody from "../../table/TBody";
import axios from "axios";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import { useAlert } from "@blaumaus/react-alert";

import styles from "./Shopkeepers-all-status.module.scss";

const ShopkeepersAllStatus = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [dataUserShop, setDataUserShop] = useState([]);
  const [dataAllLogs, setDataAllLogs] = useState({});
  const [filteredLogs, setFilteredLogs] = useState({});

  const [loaded, setLoaded] = useState(false);
  const [loadedAll, setLoadedAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadingAll, setLoadingAll] = useState(true);

  const [init, setInit] = useState(false);

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

  const AllTime = useMemo(() => {
    const keys = Object.keys(dataAllLogs);
    let count = 0;

    for (let a = 0; a < keys.length; a++) count += dataAllLogs[keys[a]].logs_count;

    return count;
  }, [dataAllLogs]);

  useEffect(() => {
    if (init !== true) {
      axios
        .get("https://map.gmgame.ru/api/user_shop")
        .then((res) => {
          setDataUserShop(res.data.data);
        })
        .catch((error) => {
          alert.error(error);
        })
        .finally(() => {
          setLoaded(true);
          setLoading(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (init !== true) {
      axios
        .get("https://map.gmgame.ru/api/user_all_shop")
        .then((res) => {
          setDataAllLogs(res.data.data);
        })
        .catch((error) => {
          alert.error(error);
        })
        .finally(() => {
          setLoadedAll(true);
          setLoadingAll(false);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const villagerUUIDs = new Set();

    dataUserShop.forEach((u) => {
      u.villager.forEach((v) => {
        villagerUUIDs.add(v.uuid);
      });
    });

    setFilteredLogs(
      Object.entries(dataAllLogs).reduce((acc, [key, value]) => {
        if (!villagerUUIDs.has(key)) {
          acc[key] = value;
        }
        return acc;
      }, {})
    );
  }, [dataAllLogs, dataUserShop]);

  if (loaded && loadedAll && !init) {
    setInit(true);
  }

  if (loading || loadingAll || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["shopkeepers_all_status_box"])}>
      <p className={classNames(styles["text"])}>Активные магазины</p>
      <TableMain>
        <THead>
          <Tr header={true}>
            <Th type="text" content="id" />
            <Th type="text" content="Владелец" />
            <Th type="text" content="Название" />
            <Th type="text" content="Время" />
            <Th type="text" content="X" />
            <Th type="text" content="Y" />
            <Th type="text" content="Z" />
            <Th type="text" content="Логов" />
            <Th type="text" content="Товар" />
            <Th type="text" content="Логи" />
          </Tr>
        </THead>
        {dataUserShop.map((user, index) => (
          <TBody>
            {index === 0 ? null : <Tr key={index}></Tr>}
            {user.villager.map((vil, index) => (
              <Tr key={index}>
                <Th type="text" content={vil.id} />
                <Th type="text" content={user.owner} />
                <Th type="text" content={vil.name === "" ? "-" : vil.name} />
                <Th type="text" content={formatUnixTime(user.last_seen + 2592000000)} />
                <Th type="text" content={vil.x} />
                <Th type="text" content={vil.y} />
                <Th type="text" content={vil.z} />
                <Th type="text" content={vil.log} />
                <Th type="link_to" href={`/shopkeepers?_uuid=${vil.uuid}`} />
                {!vil.log ? <Th type="text" content="-" /> : <Th type="link_to" href={vil.uuid} />}
              </Tr>
            ))}
          </TBody>
        ))}
      </TableMain>
      <p className={classNames(styles["text"])}>Магазины которые уже исчезли</p>
      <TableMain>
        <THead>
          <Tr header={true}>
            <Th type="text" content="Владелец" />
            <Th type="text" content="X" />
            <Th type="text" content="Y" />
            <Th type="text" content="Z" />
            <Th type="text" content="Логов" />
            <Th type="text" content="Логи" />
          </Tr>
        </THead>
        {Object.keys(filteredLogs).map((el, index) => (
          <TBody>
            <Tr key={index}>
              <Th type="text" content={filteredLogs[el].owner_name} />
              <Th type="text" content={filteredLogs[el].x} />
              <Th type="text" content={filteredLogs[el].y} />
              <Th type="text" content={filteredLogs[el].z} />
              <Th type="text" content={filteredLogs[el].logs_count} />
              {!filteredLogs[el].logs_count ? <Th type="text" content="-" /> : <Th type="link_to" href={el} />}
            </Tr>
          </TBody>
        ))}
      </TableMain>
      <p className={classNames(styles["text"])}>Всего продано товаза за все время - {AllTime}</p>
    </div>
  );
};

export default ShopkeepersAllStatus;
