import classNames from "classnames";
import React, {useState} from "react";
import Warn from "../../warn/Warn.js";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import Error from "../../error/Error";
import useLoading from "../../../loading/useLoading";
import MapInputLine from "../mini-marker-components/map-input-line/MapInputLine";
import MapNameLine from "../mini-marker-components/map-name-line/MapNameLine";
import MapSelectLine from "../mini-marker-components/map-select-line/MapSelectLine";

import styles from "../maps-elements-add.module.scss";
import "aos/dist/aos.css";

const EditAddTerr = (params) => {

  const isLoading = useLoading();

  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  const [errorMessage, setErrorMessage] = useState(null);

  let [formName, setFormName] = useState('');
  let [formServer, setFormServer] = useState('gmgame');

  let [formXStart, setFormXStart] = useState('');
  let [formXStop, setFormXStop] = useState('');
  let [formZStart, setFormZStart] = useState('');
  let [formZStop, setFormZStop] = useState('');

  let [init, setInit] = useState(false);

  function showMessage(response) {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
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
      showMessage(response);
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

  function checkForm(number) {
    const cord = number.trim();
    if (!/^[0-9+-]+$/.test(cord)) {
      setErrorMessage(<Error inf="Только числа"/>)
    } else {
      setErrorMessage(null);
    }
  }

  function checkName(name) {
    const label = name.trim();
    if (label.length < 5 || label.length > 300) {
      setErrorMessage(<Error inf="Имя должно содержать от 5 до 300 символов."/>);
    } else {
      setErrorMessage(null);
    }
  }

  return (
    <div className={classNames(styles["boxMarkerAddWrapper"])}>
      <div className={classNames(styles["columnsAddOne"])}>
        <div className={classNames(styles["rowWrapperContent"])}>
          <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
          <MapNameLine label="Название"/>
          <MapInputLine
            small={false}
            defaultValue={formName}
            onChange={e => {
              setFormName(e.target.value)
              checkName(e.target.value)
            }}
          />
        </div>
        <div className={classNames(styles["rowWrapperContent"])}>
          <MapNameLine label="Сервер"/>
          <MapSelectLine list={valueOption} onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer}/>
        </div>
        <div className={classNames(styles["coordinatesWrapper"])}>
          <MapNameLine label="Координаты"/>
          <div className={classNames(styles["blockRow"])}>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <MapNameLine label="StartX"/>
              <MapInputLine
                small={true}
                defaultValue={formXStart}
                onChange={e => {
                  setFormXStart(e.target.value)
                  checkForm(e.target.value)
                }}
              />
            </div>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <MapNameLine label="StopX"/>
              <MapInputLine
                small={true}
                defaultValue={formXStop}
                onChange={e => {
                  setFormXStop(e.target.value)
                  checkForm(e.target.value)
                }}
              />
            </div>
          </div>
          <div className={classNames(styles["blockRow"])}>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <MapNameLine label="StartZ"/>
              <MapInputLine
                small={true}
                defaultValue={formZStart}
                onChange={e => {
                  setFormZStart(e.target.value)
                  checkForm(e.target.value)
                }}
              />
            </div>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <MapNameLine label="StopZ"/>
              <MapInputLine
                small={true}
                defaultValue={formZStop}
                onChange={e => {
                  setFormZStop(e.target.value)
                  checkForm(e.target.value)
                }}
              />
            </div>
          </div>
          <Warn inf="Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"/>
        </div>
        {errorMessage && <div className={classNames(styles["error"])}>{errorMessage}</div>}
        <div className={classNames(styles["boxActionsWrapper"])}>
          <button className={classNames(styles["buttonAllStyles"], styles["buttonAdd"])} onClick={id === 'new' ? addMarker : saveMarker}>Сохранить</button>
          {id === 'new'
            ? ''
            : <button className={classNames(styles["buttonAllStyles"], styles["buttonDelete"])} onClick={deleteMarker}>Удалить</button>
          }
        </div>
      </div>
      <div className={classNames(styles["columnsAddTwo"])}>
        {id === 'new'
          ? <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld/over" width="100%" height="100%"/>
          : <iframe title="map" src={`https://map.gmgame.ru/#/${data.terr.xStart}/64/${data.terr.zStart}/-4/${data.world.worldName}/${data.world.layer}`} width="100%" height="100%"/>
        }
      </div>
    </div>
  );
}

export default EditAddTerr;