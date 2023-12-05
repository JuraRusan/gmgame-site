import classNames from "classnames";
import React, {useState} from "react";
import Notifications from "../../notifications/Notifications";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import MapNameLine from "../mini-marker-components/map-name-line/MapNameLine";
import MapInputLine from "../mini-marker-components/map-input-line/MapInputLine";
import Button from "../../button/Button";
import {checkName} from "../mini-marker-components/function/CheckName";
import {checkForm} from "../mini-marker-components/function/CheckForm";
import MapSelectLine from "../mini-marker-components/map-select-line/MapSelectLine";
import MapTextareaLine from "../mini-marker-components/map-textarea-line/MapTextareaLine";

import styles from "../maps-elements-add.module.scss";

const EditAddMarker = (params) => {

  const isLoading = useLoading();

  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  const [formName, setFormName] = useState('');
  const [formServer, setFormServer] = useState('gmgame');
  const [selectedOption, setSelectedOption] = useState('basePlayers');
  const [formDescription, setFormDescription] = useState('');

  const [formX, setFormX] = useState('');
  const [formZ, setFormZ] = useState('');

  const [init, setInit] = useState(false);

  function showMessage(response) {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
    } else {
      alert.error(response.error);
    }
  }

  function markerRequest(url) {
    sendRequest(
      url,
      'POST',
      {
        server: formServer,
        id_type: selectedOption,
        name: formName,
        x: formX,
        z: formZ,
        description: formDescription || '',
        markerID: id === 'new' ? -1 : id
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const saveMarker = () => {
    markerRequest('/api/edit_marker');
  }

  const addMarker = () => {
    markerRequest('/api/add_marker');
  }

  const deleteMarker = () => {
    markerRequest('/api/delete_marker');
  }

  const resParams = useAxios(
    `/api/get_marker/${id}`,
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  const data = resParams.data;

  if (resParams.loaded && id !== 'new' && !init) {
    setInit(true);
    setSelectedOption(data.marker?.id_type);
    setFormDescription(data.marker?.description);
    setFormX(data.marker?.x)
    setFormZ(data.marker?.z)
    setFormName(data.marker?.name)
    setFormServer(data.marker?.server)
  }

  const worldValue = [
    {
      value: "gmgame",
      name: "Основной мир"
    },
    {
      value: "farm",
      name: "Фермерский мир"
    },
  ]
  const valueOption = [
    {
      value: "basePlayers",
      name: "Базы игроков"
    },
    {
      value: "city",
      name: "Города"
    },
    {
      value: "shopping_centers",
      name: "Торговые центры - over"
    },
    {
      value: "turquoise",
      name: "Бирюзовая - nether"
    },
    {
      value: "orange",
      name: "Оранжевая - nether"
    },
    {
      value: "lime",
      name: "Лаймовая - nether"
    },
    {
      value: "pink",
      name: "Розовая - nether"
    },
    {
      value: "farm",
      name: "Фермы - nether"
    },
    {
      value: "end_portals",
      name: "Энд порталы - nether"
    },
    {
      value: "pixel_arts",
      name: "Пиксель арты - end"
    },
  ]

  return (
    <div className={classNames(styles["box_map_add_wrapper"])}>
      <div className={classNames(styles["columns_add_one"])}>
        <div className={classNames(styles["row_wrapper_content"])}>
          <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
          <MapNameLine label="Имя"/>
          <MapInputLine
            small={false}
            defaultValue={formName}
            onChange={e => {
              setFormName(e.target.value);
              checkName(e.target.value, setErrorMessage)
            }}
          />
          <MapNameLine label="Описание"/>
          <MapTextareaLine
            defaultValue={formDescription}
            onChange={e => {
              setFormDescription(e.target.value)
            }}
          />
        </div>
        <div className={classNames(styles["row_wrapper_content"])}>
          <MapNameLine label="Сервер"/>
          <MapSelectLine
            list={worldValue}
            onChange={(e) => setFormServer(e.target.value)}
            defaultValue={formServer}
          />
          <MapNameLine label="Тип метки"/>
          <MapSelectLine
            list={valueOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            defaultValue={selectedOption}
          />
        </div>
        <div className={classNames(styles["coordinates_wrapper"])}>
          <MapNameLine label="Координаты"/>
          <div className={classNames(styles["block_row"])}>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="X"/>
              <MapInputLine
                small={true}
                defaultValue={formX}
                onChange={e => {
                  setFormX(e.target.value)
                  checkForm(e.target.value, setErrorMessage)
                }}
              />
            </div>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="Z"/>
              <MapInputLine
                small={true}
                defaultValue={formZ}
                onChange={e => {
                  setFormZ(e.target.value)
                  checkForm(e.target.value, setErrorMessage)
                }}
              />
            </div>
          </div>
          <Notifications inf="Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!" type="warn"/>
        </div>
        {errorMessage && <div className={classNames(styles["error"])}>{errorMessage}</div>}
        <div className={classNames(styles["actions_box"])}>
          <Button view="submit" label="Сохранить" onClick={id === 'new' ? addMarker : saveMarker}/>
          {id === 'new' ? null : <Button view="delete" label="Удалить" onClick={deleteMarker}/>}
        </div>
      </div>
      <div className={classNames(styles["columns_add_two"])}>
        {id === 'new'
          ?
          <iframe
            title="map"
            src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over"
            width="100%"
            height="100%"
          />
          :
          <iframe
            title="map"
            src={`https://map.gmgame.ru/#/${data.marker.x}/64/${data.marker.z}/-4/${data.world.worldName}/${data.world.layer}`}
            width="100%"
            height="100%"
          />
        }
      </div>
    </div>
  );
}

export default EditAddMarker;