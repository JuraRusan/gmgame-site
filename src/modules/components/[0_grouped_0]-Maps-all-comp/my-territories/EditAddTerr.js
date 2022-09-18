import {React, useState} from "react";
import Warn from "../../warn/Warn.js";
import {useAxios, sendRequest} from '../../../../DataProvider';
import {Triangle} from 'react-loader-spinner';
import {useNavigate, useParams} from 'react-router-dom';
import {useAlert} from "react-alert";

import "../my-markers/My-markers.scss";


const EditAddTerr = (params) => {
  const navigate = useNavigate();
  const alert = useAlert();

  const {id} = useParams();

  // let [selectedOption, setSelectedOption] = useState('basePlayers');
  // let [formDescription, setFormDescription] = useState('');
  let [formXStart, setFormXStart] = useState('');
  let [formXStop, setFormXStop] = useState('');
  let [formZStart, setFormZStart] = useState('');
  let [formZStop, setFormZStop] = useState('');
  let [init, setInit] = useState(false);
  let [formName, setFormName] = useState('');
  let [formServer, setFormServer] = useState('gmgame');

  const saveMarker = () => {
    const response = sendRequest(
      '/api/save_edit_markers',
      'POST',
      {
        server: formServer,
        name: formName,
        startX: formXStart,
        stopX: formXStop,
        startZ: formZStart,
        stopZ: formZStop,
        terrID: id
      }
    )

    if (response.body.data) {
      alert.success(response.body.data);
      navigate(-1);
    } else {
      alert.error(response.body.error);
    }
  }

  const deleteMarker = () => {
    const response = sendRequest(
      '/api/delete_markers',
      'POST',
      {markerID: id}
    )

    if (response.body.data) {
      alert.success(response.body.data);
      navigate(-1);
    } else {
      alert.error(response.body.error);
    }
  }

  const resParams = useAxios(
    `/api/get_terr/${id}`,
    'GET',
    {}
  );

  if (resParams.loading) {
    return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
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

  return (
    <div className="box-marker-add">
      <div className="colums-add-1">
        <div className="col-row">
          <button onClick={() => navigate(-1)} className="go-back">{"<--вертать в зад"}</button>
          <h5 className="input-name">Название</h5>
          <input className="input-str" defaultValue={formName} onChange={(e) => setFormName(e.target.value)}/>
        </div>
        <div className="col-row">
          <h5 className="input-name">Сервер</h5>
          <select className="input-str" onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer}>
            <option className="option-list" value="gmgame">Основной мир</option>
            <option className="option-list" value="farm">Фермерский мир</option>
          </select>
        </div>
        <div className="coord">
          <h5 className="input-name">Координаты</h5>
          <div className="block-row">
            <div className="col-row-custom">
              <h5 className="input-name">StartX</h5>
              <input className="input-str-custom" defaultValue={formXStart} onChange={(e) => setFormXStart(e.target.value)}/>
            </div>
            <div className="col-row-custom">
              <h5 className="input-name">StopX</h5>
              <input className="input-str-custom" defaultValue={formXStop} onChange={(e) => setFormXStop(e.target.value)}/>
            </div>
          </div>
          <div className="block-row">
            <div className="col-row-custom">
              <h5 className="input-name">StartZ</h5>
              <input className="input-str-custom" defaultValue={formZStart} onChange={(e) => setFormZStart(e.target.value)}/>
            </div>
            <div className="col-row-custom">
              <h5 className="input-name">StopZ</h5>
              <input className="input-str-custom" defaultValue={formZStop} onChange={(e) => setFormZStop(e.target.value)}/>
            </div>
          </div>
          <Warn inf={AttentionCoords}/>
        </div>
        <div className="box-bt">
          <button className="bt-all bt-add font-custom-2" onClick={saveMarker}>Сохранить</button>
          {id === 'new'
            ? ''
            : <button className="bt-all bt-del font-custom-2" onClick={deleteMarker}>Удалить</button>
          }
        </div>
      </div>
      <div className="colums-add-2">
        {id === 'new'
          ? <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" width="100%" height="100%"/>
          : <iframe title="map" src={`https://map.gmgame.ru/#/${data.terr.xStart}/64/${data.terr.zStart}/-4/${data.terr.world_name}/over`} width="100%" height="100%"/>
        }
      </div>
    </div>
  );
}

export default EditAddTerr;