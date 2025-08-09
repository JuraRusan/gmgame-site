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
import Bundle from "../../[0_grouped_0]-Shopkeepers/bundle/Bundle";
import { BUNDLES_TYPE, SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
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

  const [selected, setSelected] = useState([]);
  const [typeContent, setTypeContent] = useState("");
  const [open, setOpen] = React.useState(false);

  const [isLarge, setIsLarge] = useState(window.innerWidth >= 640 ? "medium" : "small");

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [init, setInit] = useState(false);

  const openModal = (el) => {
    if (SHULKERS_TYPE.includes(el.id)) {
      setTypeContent("shulker");
      setSelected(el);
      setOpen(true);
    }
    if (BUNDLES_TYPE.includes(el.id)) {
      setTypeContent("bundle");
      setSelected(el);
      setOpen(true);
    }
  };

  const closeModal = () => {
    setOpen(false);
    setTypeContent("bundle");
    setSelected([]);
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
      setIsLarge(window.innerWidth >= 640 ? "medium" : "small");
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
                <span className={classNames(styles["text"])}>{new Date(el.time).toLocaleString()}</span>
                <div className={classNames(styles["items"])}>
                  {!el.item1?.id ? <OneItem /> : <OneItem item={el.item1} onClick={() => openModal(el.item1)} />}
                  {!el.item2?.id ? <OneItem /> : <OneItem item={el.item2} onClick={() => openModal(el.item2)} />}
                  <span className={classNames(styles["arrow_suggestions"])}>&#10132;</span>
                  {!el.resultItem?.id ? (
                    <OneItem />
                  ) : (
                    <OneItem item={el.resultItem} onClick={() => openModal(el.resultItem)} />
                  )}
                </div>
                <span className={classNames(styles["text"])}>{el.player_name}</span>
              </div>
            ))
          )}
        </div>
      )}
      <Notifications inf={INFO_DEFAULT} type="warn" />

      <MyModal open={open} close={closeModal}>
        {typeContent !== "shulker" ? null : (
          <div className={styles["_wrapper"]}>
            <ShulkerBox item={selected} size={isLarge} />
          </div>
        )}
        {typeContent !== "bundle" ? null : (
          <div className={styles["_wrapper"]}>
            <Bundle item={selected} size={isLarge} />
          </div>
        )}
      </MyModal>
    </div>
  );
};

export default LogTrade;
