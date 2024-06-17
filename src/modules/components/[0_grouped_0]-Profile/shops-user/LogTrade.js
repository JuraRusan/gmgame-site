import classNames from "classnames";
import React, { useEffect, useState } from "react";
import OneItem from "../../[0_grouped_0]-Shopkeepers/one-item/One-item";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import ReactModal from "react-modal";
import ShulkerBox from "../../[0_grouped_0]-Shopkeepers/shulker-box/Shulker-box";
import { SHULKERS_TYPE } from "../../../pages/shopkeepers/ShulkersType";
import ButtonCloseSvgComponent from "../../../../bases/icons/buttonCloseSvg/ButtonCloseSvg";

import styles from "./LogTrade.module.scss";

const LogTrade = () => {
  const isLoading = useLoading();
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { uuid } = useParams();

  const [dataLogs, setDataLogs] = useState([]);

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = React.useState(false);

  const [loaded, setLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [init, setInit] = useState(false);

  const openModal = (el) => {
    if (SHULKERS_TYPE.includes(el.id)) {
      setSelected(el);
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "auto";
  }

  useEffect(() => {
    if (init !== true) {
      axios
        .get(`http://127.0.0.1:4000/log?_uuid=${uuid}`)
        .then((res) => {
          if (res.data?.data?.value) setDataLogs(res.data.data.value);
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

  if (loaded && !init) {
    setInit(true);
  }

  if (loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["log_wrapper"])}>
      <button
        className={classNames(styles["back"])}
        onClick={() => {
          navigate(-1);
        }}
      >
        {"<-- Показать весь список"}
      </button>
      {dataLogs.length === 0 && loaded ? (
        <div className={classNames(styles["no_content"])}>
          <span className={classNames(styles["text"])}>В данном магазине отсутствуют логи продаж</span>
        </div>
      ) : (
        <div className={classNames(styles["log_list"])}>
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

      <ReactModal
        isOpen={open}
        className={classNames(styles["modal_main_box"])}
        overlayClassName={classNames(styles["overlay_modal_full"])}
        ariaHideApp={false}
      >
        <div className={classNames(styles["window"])}>
          <button onClick={closeModal} className={classNames(styles["modal_close"])}>
            <ButtonCloseSvgComponent width="100%" height="100%" />
          </button>
          <div className={classNames(styles["shulker_wrapper"])}>
            <ShulkerBox customLink="../.." item={selected} />
          </div>
        </div>
      </ReactModal>
    </div>
  );
};

export default LogTrade;
