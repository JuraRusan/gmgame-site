import classNames from "classnames";
import React, { useEffect, useState } from "react";
import OneItem from "../../[0_grouped_0]-Shopkeepers/one-item/One-item";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "@blaumaus/react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import MyModal from "../../../../common/modal/MyModal";
import ShulkerBox from "../../[0_grouped_0]-Shopkeepers/shulker-box/Shulker-box";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import BackButton from "../../back-button/BackButton";
import Notifications from "../../notifications/Notifications";

import styles from "./LogTrade.module.scss";

const INFO_DEFAULT = "Обновление лога продаж происходит раз в сутки, в 00:00 по МСК";

const LogTrade = () => {
  const isLoading = useLoading();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { uuid } = useParams();

  const [dataLogs, setDataLogs] = useState([]);

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [isLarge, setIsLarge] = useState(window.innerWidth >= 640);

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [init, setInit] = useState(false);

  const openModal = (el) => {
    if (SHULKERS_TYPE.includes(el.id)) {
      setSelected(el);
      setOpen(true);
    }
  };

  useEffect(() => {
    if (init !== true) {
      axios
        .get(`https://map.gmgame.ru/api/log?_uuid=${uuid}`)
        .then((res) => {
          if (res.data?.data?.value) setDataLogs(res.data.data.value.reverse());
          if (res.data?.data?.lang) dispatch({ type: "ADD_LANG", payload: res.data.data.lang });
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
    const handleResize = () => {
      setIsLarge(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (loaded && !init) {
    setInit(true);
  }

  if (loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["log_wrapper"])}>
      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      />
      {dataLogs.length === 0 && loaded ? (
        <div className={classNames(styles["no_content"], styles["pos"])}>
          <span className={classNames(styles["text"])}>В данном магазине отсутствуют логи продаж</span>
        </div>
      ) : (
        <div className={classNames(styles["log_list"], styles["pos"])}>
          {dataLogs.map((el, index) =>
            Array.from({ length: el.trade_count }).map((_, tradeIndex) => (
              <div className={classNames(styles["one_trade"])} key={`${index}-${tradeIndex}`}>
                <span className={classNames(styles["text"])}>{el.data + " " + el.time}</span>
                <div className={classNames(styles["items"])}>
                  {!el.item1?.id ? (
                    <OneItem />
                  ) : (
                    <OneItem customLink="../.." item={el.item1} onClick={() => openModal(el.item1)} />
                  )}
                  {!el.item2?.id ? (
                    <OneItem />
                  ) : (
                    <OneItem customLink="../.." item={el.item2} onClick={() => openModal(el.item2)} />
                  )}
                  <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
                  {!el.resultItem?.id ? (
                    <OneItem />
                  ) : (
                    <OneItem customLink="../.." item={el.resultItem} onClick={() => openModal(el.resultItem)} />
                  )}
                </div>
                <span className={classNames(styles["text"])}>{el.player_name}</span>
              </div>
            ))
          )}
        </div>
      )}
      <Notifications inf={INFO_DEFAULT} type="warn" />

      <MyModal open={open} close={() => setOpen(false)}>
        <div className={classNames(styles["shulker_wrapper"])}>
          <ShulkerBox customLink="../.." item={selected} full={isLarge} />
        </div>
      </MyModal>
    </div>
  );
};

export default LogTrade;
