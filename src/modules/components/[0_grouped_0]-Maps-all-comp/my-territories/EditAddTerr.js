import classNames from "classnames";
import React, {useState} from "react";
import Warn from "../../warn/Warn.js";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import Error from "../../error/Error";

import styles from "../maps-elements-add.module.scss";
import "aos/dist/aos.css";
import useLoading from "../../../loading/useLoading";

const EditAddTerr = (params) => {

  const isLoading = useLoading();

  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  const [errorMessage, setErrorMessage] = useState(null);
  let [formXStart, setFormXStart] = useState('');
  let [formXStop, setFormXStop] = useState('');
  let [formZStart, setFormZStart] = useState('');
  let [formZStop, setFormZStop] = useState('');
  let [init, setInit] = useState(false);
  let [formName, setFormName] = useState('');
  let [formServer, setFormServer] = useState('gmgame');

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

  const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"

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
    <div className={classNames(styles["boxMarkerAddWrapper"])}>
      <div className={classNames(styles["columnsAddOne"])}>
        <div className={classNames(styles["rowWrapperContent"])}>
          <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
          <h5 className={classNames(styles["nameInput"])}>Название</h5>
          <input
            className={classNames(styles["inputStyle"])}
            defaultValue={formName}
            onChange={e => {
              setFormName(e.target.value)
              const name = e.target.value.trim();
              if (name.length < 5 || name.length > 300) {
                setErrorMessage(<Error inf="Имя должно содержать от 5 до 300 символов."/>); /* --- Возможно нужна корректировка --- */
              } else {
                setErrorMessage(null);
              }
            }}/>
        </div>
        <div className={classNames(styles["rowWrapperContent"])}>
          <h5 className={classNames(styles["nameInput"])}>Сервер</h5>
          <select className={classNames(styles["inputStyle"])} onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer}>
            {valueOption.map((el) =>
              <option className={classNames(styles["optionList"])} value={el.value}>{el.name}</option>
            )}
          </select>
        </div>
        <div className={classNames(styles["coordinatesWrapper"])}>
          <h5 className={classNames(styles["nameInput"])}>Координаты</h5>
          <div className={classNames(styles["blockRow"])}>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>StartX</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formXStart}
                onChange={e => {
                  setFormXStart(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}/>
            </div>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>StopX</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formXStop}
                onChange={e => {
                  setFormXStop(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}/>
            </div>
          </div>
          <div className={classNames(styles["blockRow"])}>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>StartZ</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formZStart}
                onChange={e => {
                  setFormZStart(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}/>
            </div>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>StopZ</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formZStop}
                onChange={e => {
                  setFormZStop(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}/>
            </div>
          </div>
          <Warn inf={AttentionCoords}/>
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