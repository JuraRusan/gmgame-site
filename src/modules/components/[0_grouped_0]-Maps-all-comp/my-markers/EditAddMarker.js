import React, { useMemo, useState } from "react";
import Notifications from "../../notifications/Notifications";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "@blaumaus/react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import Button from "../../button/Button";
import BackButton from "../../back-button/BackButton";
import ConfirmModal from "../../confirm-modal/ConfirmModal";
import Input from "../../input/Input";
import Textarea from "../../textarea/Textarea";
import Select from "../../select/Select";
import FormTitle from "../../form-title/FormTitle";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "../maps-elements-add.module.scss";

const WORLD_VALUE = [
  { value: "gmgame", name: "Основной мир" },
  { value: "farm", name: "Фермерский мир" },
];

const TYPE_VALUE = [
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

const ErrorRender = ({ name, errors }) => {
  return (
    <ErrorMessage errors={errors} name={name} render={({ message }) => <Notifications inf={message} type="error" />} />
  );
};

const EditAddMarker = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const [init, setInit] = useState(false);

  const [markerId, setMarkerId] = useState(id === "new" ? -1 : id);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      description: "",
      server: "",
      type: "",
      cordX: 0,
      cordZ: 0,
      id: markerId,
    },
  });

  const resParams = useAxios(`/api/get_marker/${id}`, "GET", {});

  const editMarker = (data) => {
    markerRequest({ req: "edit", url: "/api/edit_marker", data });
  };

  const addMarker = (data) => {
    markerRequest({ req: "create", url: "/api/add_marker", data });
  };

  const deleteMarker = (data) => {
    markerRequest({ req: "delete", url: "/api/delete_marker", data });
  };

  const markerRequest = ({ req, url, data }) => {
    sendRequest(url, "POST", {
      name: data.name,
      description: data.description,
      server: data.server,
      id_type: data.type,
      x: data.cordX,
      z: data.cordZ,
      markerID: data.id,
    }).then((response) => {
      showMessage(response);

      if (req === "delete") navigate(-1);
      if (req === "create") navigate(`${location.pathname.replace("new", response.id)}`, { replace: true });
    });
  };

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
    } else {
      alert.error(response.error);
    }
  };

  const formFields = useMemo(() => {
    return {
      name: register("name", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 12, message: "Слишком короткое название" },
        maxLength: { value: 255, message: "Слишком длинное название" },
      }),
      description: register("description", {
        required: { value: true, message: "Обязательное поле" },
        minLength: { value: 24, message: "Слишком короткое описание" },
        maxLength: { value: 255, message: "Слишком длинное описание" },
      }),
      server: register("server", {
        required: { value: true, message: "Обязательное поле" },
      }),
      type: register("type", {
        required: { value: true, message: "Обязательное поле" },
      }),
      cordX: register("cordX", {
        required: { value: true, message: "Обязательное поле" },
        valueAsNumber: true,
      }),
      cordZ: register("cordZ", {
        required: { value: true, message: "Обязательное поле" },
        valueAsNumber: true,
      }),
    };
  }, [register]);

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.loaded && id !== "new" && !init) {
    setInit(true);
    setMarkerId(resParams.data.marker.id);
    reset({
      name: resParams.data.marker.name,
      description: resParams.data.marker.description,
      server: resParams.data.marker.server,
      type: resParams.data.marker.id_type,
      cordX: resParams.data.marker.x,
      cordZ: resParams.data.marker.z,
      id: resParams.data.marker.id,
    });
  }

  return (
    <div className={styles["box_map_add_wrapper"]}>
      <div className={styles["form_wrapper"]}>
        <form className={styles["form"]}>
          <BackButton onClick={() => navigate(-1)} />
          {/* --- */}
          <FormTitle title="Название:" min={12} max={255} length={watch("name")?.length || 0} />
          <Input type="text" autoComplete="off" placeholder="&nbsp;" {...formFields["name"]} />
          <ErrorRender errors={errors} name="name" />
          {/* --- */}
          <FormTitle title="Описание:" min={24} max={255} length={watch("description")?.length || 0} />
          <Textarea rows="4" max_height="medium" {...formFields["description"]} />
          <ErrorRender errors={errors} name="description" />
          {/* --- */}
          <FormTitle title="Сервер:" count={false} />
          <Select list={WORLD_VALUE} {...formFields["server"]} />
          {/* --- */}
          <FormTitle title="Тип метки:" count={false} />
          <Select list={TYPE_VALUE} {...formFields["type"]} />
          {/* --- */}
          <FormTitle title="Координаты:" count={false} required={false} />
          <div className={styles["coordinates"]}>
            <div className={styles["row_block"]}>
              <FormTitle title="X:" count={false} />
              <Input type="number" {...formFields["cordX"]} />
            </div>
            <div className={styles["row_block"]}>
              <FormTitle title="Z:" count={false} />
              <Input type="number" {...formFields["cordZ"]} />
            </div>
          </div>
          {/* --- */}
          <Notifications inf="Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!" type="warn" />
        </form>
        <div className={styles["actions_box"]}>
          <Button
            view="submit"
            label="Сохранить"
            disabled={!isValid}
            onClick={markerId === -1 ? handleSubmit(addMarker) : handleSubmit(editMarker)}
          />
          {markerId === -1 ? null : <Button view="delete" label="Удалить" onClick={() => setIsConfirmActive(true)} />}
          <ConfirmModal
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={handleSubmit(deleteMarker)}
          />
        </div>
      </div>
      <div className={styles["map_wrapper"]}>
        {markerId === -1 ? (
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
