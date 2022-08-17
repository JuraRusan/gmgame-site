import {React, useState} from "react";
import Warn from "../warn/Warn.js";
import {useAxios, sendRequest} from '../../../DataProvider';
import { Triangle } from  'react-loader-spinner';
import {useNavigate, useParams} from 'react-router-dom';
import { useAlert } from "react-alert";

import "./My-markers.scss";


const EditAddMarker = (params) => {
    const navigate = useNavigate();
    const alert = useAlert();

    const { id } = useParams();
    
    let [selectedOption, setSelectedOption] = useState('basePlayers');
    let [formDescription, setFormDescription] = useState('');
    let [formX, setFormX] = useState('');
    let [formZ, setFormZ] = useState('');
    let [init, setInit] = useState(false);
    let [formName, setFormName] = useState('');
    let [formServer, setFormServer] = useState('gmgame');

    const saveMarker = () => {
        const response = sendRequest(
            '/api/save_edit_markers',
            'POST',
            {server: formServer, id_type: selectedOption, name: formName, x: formX, z: formZ, description: formDescription, markerID: id}
        )

        if (response.data) {
            alert.success(response.data);
            navigate(-1);
        } else {
            alert.error(response.error);
        }
    }
    
    const resParams = useAxios(
        `/api/get_marker/${id}`,
        'GET',
        {}
    );

    if (resParams.loading) {
        return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
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

    return (
        <div className="box-marker-add">
            <div className="colums-add-1">
                <div className="col-row">
                    {/* <h5 className="input-name font-custom-2" onClick={() => params.setIsShowMarker(false)}>вертать в зад</h5> */}
                    <button onClick={() => navigate(-1)} className="go-back font-custom-2">{"<--"}</button>
                    <h5 className="input-name font-custom-2">Название</h5>
                    <input className="input-str font-custom-2" defaultValue={formDescription} onChange={(e) => setFormDescription(e.target.value)} />
                    <h5 className="input-name font-custom-2">Имя</h5>
                    <input className="input-str font-custom-2" defaultValue={formName} onChange={(e) => setFormName(e.target.value)} />
                </div>
                <div className="col-row">
                    <h5 className="input-name font-custom-2">Сервер</h5>
                    <select className="input-str font-custom-2" onChange={(e) => setFormServer(e.target.value)} defaultValue={formServer}>
                        <option className="option-list" value="gmgame">Основной мир</option>
                        <option className="option-list" value="farm">Фермерский мир</option>
                    </select>
                    <h5 className="input-name font-custom-2">Мир</h5>
                    <select className="input-str font-custom-2" onChange={(e) => setSelectedOption(e.target.value)} defaultValue={selectedOption}>
                        <option className="option-list" value="basePlayers">Базы игроков</option>
                        <option className="option-list" value="city">Города</option>
                        <option className="option-list" value="shopping_centers">Торговые центры - over</option>
                        <option className="option-list" value="turquoise">Бирюзовая - nether</option>
                        <option className="option-list" value="orange">Оранжевая - nether</option>
                        <option className="option-list" value="lime">Лаймовая - nether</option>
                        <option className="option-list" value="pink">Розовая - nether</option>
                        <option className="option-list" value="farm">Фермы - nether</option>
                        <option className="option-list" value="end_portals">Энд порталы - nether</option>
                        <option className="option-list" value="pixel_arts">Пиксель арты - end</option>
                    </select>
                </div>
                <div className="coord">
                    <h5 className="input-name font-custom-2">Координаты</h5>
                <div className="block-row">
                    <div className="col-row-custom">
                        <h5 className="input-name font-custom-2">X</h5>
                        <input className="input-str-custom font-custom-2" defaultValue={formX} onChange={(e) => setFormX(e.target.value)} />
                    </div>
                    <div className="col-row-custom">
                        <h5 className="input-name font-custom-2">Z</h5>
                        <input className="input-str-custom font-custom-2" defaultValue={formZ} onChange={(e) => setFormZ(e.target.value)} />
                    </div>
                </div>
                    <Warn inf={AttentionCoords} />
                </div>
                <div className="box-bt">
                    <button className="bt-all bt-add font-custom-2" onClick={saveMarker} >Сохранить</button>
                    {id === 'new'
                        ? ''
                        : <button className="bt-all bt-del font-custom-2">Удалить</button>
                    }
                </div>
            </div>
            <div className="colums-add-2">
                {id === 'new'
                    ? <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" width="100%" height="100%" />
                    : <iframe title="map" src={`https://map.gmgame.ru/#/${data.marker.x}/64/${data.marker.z}/-4/${data.marker.world_name}/${data.marker.world_type}`} width="100%" height="100%" />
                }
            </div>
        </div>
    );
}

export default EditAddMarker;