import React, { useEffect, useState } from "react";
import Notifications from "../../notifications/Notifications";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { useAlert } from "@blaumaus/react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import Button from "../../button/Button";
import { checkName } from "../mini-marker-components/function/CheckName";
import { checkDescription } from "../mini-marker-components/function/CheckDescription";
import { checkCoordinates } from "../mini-marker-components/function/CheckCoordinates";
import BackButton from "../../back-button/BackButton";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import Input from "../../input/Input";
import Textarea from "../../textarea/Textarea";
import Select from "../../select/Select";
import FormTitle from "../../form-title/FormTitle";

import styles from "../maps-elements-add.module.scss";

const WORLD_VALUE = [
  { value: "gmgame", name: "Основной мир" },
  { value: "farm", name: "Фермерский мир" },
];

const VALUE_OPTION = [
  { value: "basePlayers", name: "Базы игроков" },
  { value: "city", name: "Города" },
  { value: "shopping_centers", name: "Торговые центры - over" },
  { value: "turquoise", name: "Бирюзовая - nether" },
  { value: "orange", name: "Оранжевая - nether" },
  { value: "lime", name: "Лаймовая - nether" },
  { value: "pink", name: "Розовая - nether" },
  { value: "farm", name: "Фермы - nether" },
  { value: "end_portals", name: "Энд порталы - nether" },
  { value: "pixel_arts", name: "Пиксель арты - end" },
];

const MIN_NAME = 12;
const MAX_NAME = 255;
const MIN_DESCRIPTION = 24;
const MAX_DESCRIPTION = 255;

const EditAddMarker = (params) => {
  const isLoading = useLoading();

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const alert = useAlert();

  const { id } = useParams();

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const [formName, setFormName] = useState("");
  const [errorName, setErrorName] = useState("");

  const [formDescription, setFormDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState("");

  const [formServer, setFormServer] = useState("");
  const [formType, setFormType] = useState("");

  const [formX, setFormX] = useState(0);
  const [formZ, setFormZ] = useState(0);
  const [errorCoordinates, setErrorCoordinates] = useState("");

  const [init, setInit] = useState(false);

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
    } else {
      alert.error(response.error);
    }
  };

  const markerRequest = (url) => {
    if (formName.length === 0) {
      alert.error("Укажите название");
      return;
    }

    if (errorName !== "") {
      alert.error(errorName);
      return;
    }

    if (formDescription.length === 0) {
      alert.error("Добавте описание");
      return;
    }

    if (errorDescription !== "") {
      alert.error(errorDescription);
      return;
    }

    if (formServer === "") {
      alert.error("Выберите сервер");
      return;
    }

    if (formType === "") {
      alert.error("Выберите тип метки");
      return;
    }

    if (errorCoordinates !== "") {
      alert.error(errorCoordinates);
      return;
    }

    if (formX === 0 && formZ === 0) {
      alert.error("Укажите координаты");
      return;
    }

    sendRequest(url, "POST", {
      server: formServer,
      id_type: formType,
      name: formName,
      x: formX,
      z: formZ,
      description: formDescription || "",
      markerID: id === "new" ? -1 : id,
    }).then((response) => {
      showMessage(response);
    });
  };

  const saveMarker = () => {
    markerRequest("/api/edit_marker");
  };

  const addMarker = () => {
    markerRequest("/api/add_marker");
  };

  const deleteMarker = () => {
    markerRequest("/api/delete_marker");
  };

  const resParams = useAxios(`/api/get_marker/${id}`, "GET", {});

  useEffect(() => {
    if (!init) {
      if (searchParams.get("_x")) {
        const x = searchParams.get("_x");
        setFormX(+x);
        checkCoordinates(x, setErrorCoordinates);
      }
      if (searchParams.get("_z")) {
        const z = searchParams.get("_z");
        setFormZ(+z);
        checkCoordinates(z, setErrorCoordinates);
      }
      if (searchParams.get("_server")) {
        setFormServer(searchParams.get("_server"));
      }
      if (searchParams.get("_type")) {
        setFormType(searchParams.get("_type"));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    searchParams.set("_x", formX);
    searchParams.set("_z", formZ);
    searchParams.set("_server", formServer);
    searchParams.set("_type", formType);

    navigate({ search: searchParams.toString() }, { replace: true });
  }, [formX, formZ, formServer, formType, searchParams, navigate]);

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.loaded && id !== "new" && !init) {
    setInit(true);
    setFormType(resParams.data.marker?.id_type);
    setFormDescription(resParams.data.marker?.description);
    setFormX(resParams.data.marker?.x);
    setFormZ(resParams.data.marker?.z);
    setFormName(resParams.data.marker?.name);
    setFormServer(resParams.data.marker?.server);
  }

  return (
    <div className={styles["box_map_add_wrapper"]}>
      <div className={styles["columns_add_one"]}>
        <div className={styles["row_wrapper_content"]}>
          <BackButton
            onClick={() => {
              navigate(-1);
            }}
          />
          <FormTitle title="Имя:" min={MIN_NAME} max={MAX_NAME} length={formName.length} />
          <Input
            defaultValue={formName}
            onChange={(e) => {
              setFormName(e.target.value);
              checkName(e.target.value, MIN_NAME, MAX_NAME, setErrorName);
            }}
          />
          <FormTitle title="Описание:" min={MIN_DESCRIPTION} max={MAX_DESCRIPTION} length={formDescription.length} />
          <Textarea
            defaultValue={formDescription}
            onChange={(e) => {
              setFormDescription(e.target.value);
              checkDescription(e.target.value, MIN_DESCRIPTION, MAX_DESCRIPTION, setErrorDescription);
            }}
            rows="4"
          />
        </div>
        <div className={styles["row_wrapper_content"]}>
          <FormTitle title="Сервер:" count={false} />
          <Select list={WORLD_VALUE} onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer} />
          <FormTitle title="Тип метки:" count={false} />
          <Select list={VALUE_OPTION} onChange={(e) => setFormType(e.target.value)} defaultValue={formType} />
        </div>
        <div className={styles["coordinates_wrapper"]}>
          <FormTitle title="Координаты:" count={false} required={false} />
          <div className={styles["block_row"]}>
            <div className={styles["row_wrapper_content_custom"]}>
              <FormTitle title="X:" count={false} />
              <Input
                defaultValue={formX}
                onChange={(e) => {
                  setFormX(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
            <div className={styles["row_wrapper_content_custom"]}>
              <FormTitle title="Z:" count={false} />
              <Input
                defaultValue={formZ}
                onChange={(e) => {
                  setFormZ(e.target.value);
                  checkCoordinates(e.target.value, setErrorCoordinates);
                }}
              />
            </div>
          </div>
          <Notifications inf="Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!" type="warn" />
        </div>
        <div className={styles["actions_box"]}>
          <Button view="submit" label="Сохранить" onClick={id === "new" ? addMarker : saveMarker} />
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
            yes={() => deleteMarker()}
          />
        </div>
      </div>
      <div className={styles["columns_add_two"]}>
        {id === "new" ? (
          <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over" width="100%" height="100%" />
        ) : (
          <iframe
            title="map"
            src={`https://map.gmgame.ru/#/${resParams.data.marker.x}/64/${resParams.data.marker.z}/-4/${resParams.data.world.worldName}/${resParams.data.world.layer}`}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default EditAddMarker;
