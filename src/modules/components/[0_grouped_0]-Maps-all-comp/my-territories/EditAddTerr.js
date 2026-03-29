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
import FormTitle from "../../form-title/FormTitle";
import Input from "../../input/Input";
import Select from "../../select/Select";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

import styles from "../maps-elements-add.module.scss";

const WORLD_VALUE = [
  { value: "gmgame", name: "Основной мир" },
  { value: "farm", name: "Фермерский мир" },
  { value: "nether-farm", name: "Фермерский ад" },
  { value: "end-farm", name: "Фермерский край" },
];

const ErrorRender = ({ name, errors }) => {
  return (
    <ErrorMessage errors={errors} name={name} render={({ message }) => <Notifications inf={message} type="error" />} />
  );
};

const EditAddTerr = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [isConfirmActive, setIsConfirmActive] = useState(false);
  const [init, setInit] = useState(false);

  const [territoryId, setTerritoryId] = useState(id === "new" ? -1 : id);

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
      server: "",
      startX: 0,
      startZ: 0,
      stopX: 0,
      stopZ: 0,
      id: territoryId,
    },
  });

  const resParams = useAxios(`/api/get_terr/${id}`, "GET", {});

  const editTerritory = (data) => {
    territoryRequest({ req: "edit", url: "/api/edit_terr", data });
  };

  const addTerritory = (data) => {
    territoryRequest({ req: "create", url: "/api/add_terr", data });
  };

  const deleteTerritory = (data) => {
    territoryRequest({ req: "delete", url: "/api/delete_terr", data });
  };

  const territoryRequest = ({ req, url, data }) => {
    sendRequest(url, "POST", {
      server: data.server,
      name: data.name,
      startX: data.startX,
      stopX: data.stopX,
      startZ: data.startZ,
      stopZ: data.stopZ,
      terrID: data.id,
    }).then((response) => {
      showMessage(response);

      if (req === "delete") navigate(-1);
      if (req === "create") navigate(-1);
      // if (req === "create") navigate(`${location.pathname.replace("new", response.id)}`, { replace: true });
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
      server: register("server", {
        required: { value: true, message: "Обязательное поле" },
      }),
      startX: register("startX", {
        required: { value: true, message: "Обязательное поле" },
        valueAsNumber: true,
      }),
      stopX: register("stopX", {
        required: { value: true, message: "Обязательное поле" },
        valueAsNumber: true,
      }),
      startZ: register("startZ", {
        required: { value: true, message: "Обязательное поле" },
        valueAsNumber: true,
      }),
      stopZ: register("stopZ", {
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
    setTerritoryId(resParams.data.terr.id);
    reset({
      name: resParams.data.terr.name,
      server: resParams.data.terr.world,
      startX: resParams.data.terr.xStart,
      startZ: resParams.data.terr.zStart,
      stopX: resParams.data.terr.xStop,
      stopZ: resParams.data.terr.zStop,
      id: territoryId,
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
          <FormTitle title="Сервер:" count={false} />
          <Select list={WORLD_VALUE} {...formFields["server"]} />
          {/* --- */}
          <FormTitle title="Начальные координаты:" count={false} required={false} />
          <div className={styles["coordinates"]}>
            <div className={styles["row_block"]}>
              <FormTitle title="X:" count={false} />
              <Input type="number" {...formFields["startX"]} />
            </div>
            <div className={styles["row_block"]}>
              <FormTitle title="Z:" count={false} />
              <Input type="number" {...formFields["startZ"]} />
            </div>
          </div>
          {/* --- */}
          <FormTitle title="Конечные координаты:" count={false} required={false} />
          <div className={styles["coordinates"]}>
            <div className={styles["row_block"]}>
              <FormTitle title="X:" count={false} />
              <Input type="number" {...formFields["stopX"]} />
            </div>
            <div className={styles["row_block"]}>
              <FormTitle title="Z:" count={false} />
              <Input type="number" {...formFields["stopZ"]} />
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
            onClick={territoryId === -1 ? handleSubmit(addTerritory) : handleSubmit(editTerritory)}
          />
          {territoryId === -1 ? null : (
            <Button view="delete" label="Удалить" onClick={() => setIsConfirmActive(true)} />
          )}
          <ConfirmModal
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={handleSubmit(deleteTerritory)}
          />
        </div>
      </div>
      <div className={styles["columns_add_two"]}>
        {territoryId === -1 ? (
          <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over" width="100%" height="100%" />
        ) : (
          <iframe
            title="map"
            src={`https://map.gmgame.ru/#/${resParams.data.terr.xStart}/64/${resParams.data.terr.z}/-4/${resParams.data.world.worldName}/${resParams.data.world.layer}`}
            width="100%"
            height="100%"
          />
        )}
      </div>
    </div>
  );
};

export default EditAddTerr;
