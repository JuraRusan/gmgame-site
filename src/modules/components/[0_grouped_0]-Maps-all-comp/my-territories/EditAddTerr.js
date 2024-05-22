import classNames from "classnames";
import React, { useState } from "react";
import Notifications from "../../notifications/Notifications";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import { checkName } from "../mini-marker-components/function/CheckName";
import { checkCoordinates } from "../mini-marker-components/function/CheckCoordinates";
import Button from "../../button/Button";
import BackButton from "../../back-button/BackButton";
import ConfirmModal from "../../../../common/confirm-modal/ConfirmModal";
import FormTitle from "../../form-title/FormTitle";
import Input from "../../input/Input";
import Select from "../../select/Select";

import styles from "../maps-elements-add.module.scss";

const VALUE_OPTION = [
  { value: "gmgame", name: "Основной мир" },
  { value: "farm", name: "Фермерский мир" },
  { value: "nether-farm", name: "Фермерский ад" },
  { value: "end-farm", name: "Фермерский край" },
];

const MIN_NAME = 12;
const MAX_NAME = 255;

const EditAddTerr = (params) => {
  const isLoading = useLoading();

  const navigate = useNavigate();
  const alert = useAlert();

  const { id } = useParams();

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const [formName, setFormName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [formServer, setFormServer] = useState("");

  const [formXStart, setFormXStart] = useState(0);
  const [formXStop, setFormXStop] = useState(0);
  const [formZStart, setFormZStart] = useState(0);
  const [formZStop, setFormZStop] = useState(0);
  const [errorCoordinates, setErrorCoordinates] = useState("");

  const [init, setInit] = useState(false);

  const [url, setUrl] = useState("https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over");

  function showMessage(response, worldName = "GMGameWorld", formLayer = "over") {
    if (response.message) {
      alert.success(response.message);
      setUrl(`https://map.gmgame.ru/#/${formXStart}/64/${formXStart}/-4/${worldName}/${formLayer}`);
    } else {
      alert.error(response.error);
    }
  }

  function terrRequest(url) {
    if (formName.length === 0) {
      alert.error("Укажите название");
      return;
    }

    if (errorName !== "") {
      alert.error(errorName);
      return;
    }

    if (formServer === "") {
      alert.error("Выберите сервер");
      return;
    }

    if (errorCoordinates !== "") {
      alert.error(errorCoordinates);
      return;
    }

    if (formXStart === 0 && formXStop === 0 && formZStart === 0 && formZStop === 0) {
      alert.error("Укажите координаты");
      return;
    }

    sendRequest(url, "POST", {
      server: formServer,
      name: formName,
      startX: formXStart,
      stopX: formXStop,
      startZ: formZStart,
      stopZ: formZStop,
      terrID: id === "new" ? -1 : id,
    }).then((response) => {
      showMessage(response, response.worldName, response.layer);
    });
  }

  const saveTerr = () => {
    terrRequest("/api/edit_terr");
  };

  const addTerr = () => {
    terrRequest("/api/add_terr");
  };

  const deleteTerr = () => {
    navigate(-1);
    terrRequest("/api/delete_terr");
  };

  const resParams = useAxios(`/api/get_terr/${id}`, "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.data.terr?.xStart && !init) {
    setUrl(
      `https://map.gmgame.ru/#/${resParams.data.terr.xStart}/64/${resParams.data.terr.zStart}/-4/${resParams.data.world.worldName}/${resParams.data.world.layer}`
    );
  }

  if (resParams.loaded && id !== "new" && !init) {
    setInit(true);
    setFormXStart(resParams.data.terr.xStart);
    setFormXStop(resParams.data.terr.xStop);
    setFormZStart(resParams.data.terr.zStart);
    setFormZStop(resParams.data.terr.zStop);
    setFormName(resParams.data.terr.name);
    setFormServer(resParams.data.terr.world);
  }

  return (
    <div className={classNames(styles["box_map_add_wrapper"])}>
      <div className={classNames(styles["columns_add_one"])}>
        <div className={classNames(styles["row_wrapper_content"])}>
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          />
          <FormTitle title="Название:" min={MIN_NAME} max={MAX_NAME} length={formName.length} />
          <Input
            defaultValue={formName}
            onChange={(e) => {
              setFormName(e.target.value);
              checkName(e.target.value, MIN_NAME, MAX_NAME, setErrorName);
            }}
          />
        </div>
        <div className={classNames(styles["row_wrapper_content"])}>
          <FormTitle title="Сервер:" count={false} />
          <Select list={VALUE_OPTION} onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer} />
        </div>
        <div className={classNames(styles["coordinates_wrapper"])}>
          <FormTitle title="Координаты:" count={false} required={false} />
          <div className={classNames(styles["block_row"])}>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <FormTitle title="StartX:" count={false} />
              <Input
                defaultValue={formXStart}
                onChange={(e) => {
                  setFormXStart(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <FormTitle title="StopX:" count={false} />
              <Input
                defaultValue={formXStop}
                onChange={(e) => {
                  setFormXStop(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
          </div>
          <div className={classNames(styles["block_row"])}>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <FormTitle title="StartZ:" count={false} />
              <Input
                defaultValue={formZStart}
                onChange={(e) => {
                  setFormZStart(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <FormTitle title="StopZ:" count={false} />
              <Input
                defaultValue={formZStop}
                onChange={(e) => {
                  setFormZStop(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
          </div>
          <Notifications inf="Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!" type="warn" />
        </div>
        <div className={classNames(styles["actions_box"])}>
          <Button view="submit" label="Сохранить" onClick={id === "new" ? addTerr : saveTerr} />
          {id === "new" ? null : (
            <Button
              view="delete"
              label="Удалить"
              onClick={() => {
                setIsConfirmActive(true);
              }}
            />
          )}
          <ConfirmModal
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={() => {
              deleteTerr();
            }}
          />
        </div>
      </div>
      <div className={classNames(styles["columns_add_two"])}>
        <iframe title="map" key={url} src={url} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default EditAddTerr;
