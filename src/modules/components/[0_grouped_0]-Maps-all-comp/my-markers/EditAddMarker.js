import classNames from "classnames";
import {React, useState, useEffect } from "react";
import Warn from "../../warn/Warn.js";
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";
import Preload from "../../preloader/Preload";
import Error from "../../error/Error";
import AOS from "aos";

import styles from "../maps-elements-add.module.scss";
import "aos/dist/aos.css";

const EditAddMarker = (params) => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  let [selectedOption, setSelectedOption] = useState('basePlayers');
  let [formDescription, setFormDescription] = useState('');
  let [formX, setFormX] = useState('');
  let [formZ, setFormZ] = useState('');
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (resParams.loading || isLoading) {
    return <Preload />;
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

  const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"

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
    <div className={classNames(styles["boxMarkerAddWrapper"])} data-aos="zoom-in">
      <div className={classNames(styles["columnsAddOne"])}>
        <div className={classNames(styles["rowWrapperContent"])}>
          <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
          <h5 className={classNames(styles["nameInput"])}>Имя</h5>
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
            }}
          />
          <h5 className={classNames(styles["nameInput"])}>Описание</h5>
          <textarea
            className={classNames(styles["inputStyle"])}
            defaultValue={formDescription}
            onChange={e => {
              setFormDescription(e.target.value)
              const name = e.target.value.trim();
              if (name.length > 16) {
                setErrorMessage(<Error inf="Описание должно содержать не более n-символов"/>);  /* --- Возможно нужна корректировка --- */
              } else {
                setErrorMessage(null);
              }
            }}
          />
        </div>
        <div className={classNames(styles["rowWrapperContent"])}>
          <h5 className={classNames(styles["nameInput"])}>Сервер</h5>
          <select className={classNames(styles["inputStyle"])} onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer}>
            {worldValue.map((el) =>
              <option className={classNames(styles["optionList"])} value={el.value}>{el.name}</option>
            )}
          </select>
          <h5 className={classNames(styles["nameInput"])}>Тип метки</h5>
          <select className={classNames(styles["inputStyle"])} onChange={(e) => setSelectedOption(e.target.value)} defaultValue={selectedOption}>
            {valueOption.map((el) =>
              <option className={classNames(styles["optionList"])} value={el.value}>{el.name}</option>
            )}
          </select>
        </div>
        <div className={classNames(styles["coordinatesWrapper"])}>
          <h5 className={classNames(styles["nameInput"])}>Координаты</h5>
          <div className={classNames(styles["blockRow"])}>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>X</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formX}
                onChange={e => {
                  setFormX(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}
              />
            </div>
            <div className={classNames(styles["rowWrapperContentCustom"])}>
              <h5 className={classNames(styles["nameInput"])}>Z</h5>
              <input
                className={classNames(styles["inputStyle"], styles["custom"])}
                defaultValue={formZ}
                onChange={e => {
                  setFormZ(e.target.value)
                  const name = e.target.value.trim();
                  if (!/^[0-9+-]+$/.test(name)) {
                    setErrorMessage(<Error inf="Только числа"/>) /* --- Возможно нужна корректировка --- */
                  } else {
                    setErrorMessage(null);
                  }
                }}
              />
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
          : <iframe title="map" src={`https://map.gmgame.ru/#/${data.marker.x}/64/${data.marker.z}/-4/${data.world.worldName}/${data.world.layer}`} width="100%" height="100%"/>
        }
      </div>
    </div>
  );
}

export default EditAddMarker;