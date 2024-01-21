import classNames from "classnames";
import React, {useState} from "react";
import Notifications from "../../notifications/Notifications";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import useLoading from "../../../loading/useLoading";
import MapInputLine from "../mini-marker-components/map-input-line/MapInputLine";
import MapNameLine from "../mini-marker-components/map-name-line/MapNameLine";
import MapSelectLine from "../mini-marker-components/map-select-line/MapSelectLine";
import {checkName} from "../mini-marker-components/function/CheckName"
import {checkForm} from "../mini-marker-components/function/CheckForm"
import Button from "../../button/Button";

import styles from "../maps-elements-add.module.scss";

const EditAddTerr = (params) => {

  const isLoading = useLoading();

  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  const [formName, setFormName] = useState('');
  const [formServer, setFormServer] = useState('gmgame');

  const [formXStart, setFormXStart] = useState('');
  const [formXStop, setFormXStop] = useState('');
  const [formZStart, setFormZStart] = useState('');
  const [formZStop, setFormZStop] = useState('');

  const [init, setInit] = useState(false);
  const [url, setUrl] = useState('https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over');

  function showMessage(response, worldName='GMGameWorld', formLayer='over') {
    if (response.message) {
      alert.success(response.message);
      setUrl(`https://map.gmgame.ru/#/${formXStart}/64/${formXStart}/-4/${worldName}/${formLayer}`);
    } else {
      alert.error(response.error);
    }
  }

  function terrRequest(url) {
    sendRequest(
      url,
      'POST',
      {
        server: formServer,
        name: formName,
        startX: formXStart,
        stopX: formXStop,
        startZ: formZStart,
        stopZ: formZStop,
        terrID: id === 'new' ? -1 : id
      }
    ).then(response => {
      showMessage(response, response.worldName, response.layer);
    });
  }

  const saveMarker = () => {
    terrRequest('/api/edit_terr');
  }

  const addMarker = () => {
    terrRequest('/api/add_terr');
  }

  const deleteMarker = () => {
    terrRequest('/api/delete_terr');
  }

  const resParams = useAxios(
    `/api/get_terr/${id}`,
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  const data = resParams.data;

  if (data.terr?.xStart) { 
    setUrl(`https://map.gmgame.ru/#/${data.terr.xStart}/64/${data.terr.zStart}/-4/${data.world.worldName}/${data.world.layer}`);
  }

  if (resParams.loaded && id !== 'new' && !init) {
    setInit(true);
    setFormXStart(data.terr.xStart)
    setFormXStop(data.terr.xStop)
    setFormZStart(data.terr.zStart)
    setFormZStop(data.terr.zStop)
    setFormName(data.terr.name)
    setFormServer(data.terr.world)
  }

  const valueOption = [
    {
      value: "gmgame",
      name: "Основной мир"
    },
    {
      value: "farm",
      name: "Фермерский мир"
    },
    {
      value: "nether-farm",
      name: "Фермерский ад"
    },
    {
      value: "end-farm",
      name: "Фермерский край"
    },
  ]

  return (
    <div className={classNames(styles["box_map_add_wrapper"])}>
      <div className={classNames(styles["columns_add_one"])}>
        <div className={classNames(styles["row_wrapper_content"])}>
          <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
          <MapNameLine label="Название"/>
          <MapInputLine
            small={false}
            defaultValue={formName}
            onChange={e => {
              setFormName(e.target.value)
              checkName(e.target.value, setErrorMessage)
            }}
          />
        </div>
        <div className={classNames(styles["row_wrapper_content"])}>
          <MapNameLine label="Сервер"/>
          <MapSelectLine
            list={valueOption}
            onChange={(e) => setFormServer(e.target.value)}
            defaultValue={formServer}
          />
        </div>
        <div className={classNames(styles["coordinates_wrapper"])}>
          <MapNameLine label="Координаты"/>
          <div className={classNames(styles["block_row"])}>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="StartX"/>
              <MapInputLine
                small={true}
                defaultValue={formXStart}
                onChange={e => {
                  setFormXStart(e.target.value)
                  checkForm(e.target.value, setErrorMessage)
                }}
              />
            </div>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="StopX"/>
              <MapInputLine
                small={true}
                defaultValue={formXStop}
                onChange={e => {
                  setFormXStop(e.target.value)
                  checkForm(e.target.value, setErrorMessage)
                }}
              />
            </div>
          </div>
          <div className={classNames(styles["block_row"])}>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="StartZ"/>
              <MapInputLine
                small={true}
                defaultValue={formZStart}
                onChange={e => {
                  setFormZStart(e.target.value)
                  checkForm(e.target.value, setErrorMessage)
                }}
              />
            </div>
            <div className={classNames(styles["row_wrapper_content_custom"])}>
              <MapNameLine label="StopZ"/>
              <MapInputLine
                small={true}
                defaultValue={formZStop}
                onChange={e => {
                  setFormZStop(e.target.value)
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
          <iframe
            title="map"
            key={url}
            src={url}
            width="100%"
            height="100%"
          />
      </div>
    </div>
  );
}

export default EditAddTerr;