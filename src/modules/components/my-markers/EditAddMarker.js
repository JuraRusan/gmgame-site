import {React, useState} from "react";
import Warn from "../warn/Warn.js";
import {useAxios} from '../../../DataProvider';
import { Triangle } from  'react-loader-spinner';
import Select, { Option } from 'rc-select';
import {useNavigate, useParams} from 'react-router-dom';

import "./My-markers.scss";


const EditAddMarker = (params) => {
    const navigate = useNavigate();

    const { id } = useParams();

    let [selectedOption, setSelectedOption] = useState(null);
    let [formName, setFormName] = useState('');
    let [formX, setFormX] = useState('');
    let [formY, setFormY] = useState('');

    const saveMarker = () => {
        console.log(selectedOption, formName, formX, formY);

    }

    const resParams = useAxios(
        `/api/get_marker/${id}`,
        'GET',
        {}
    );

    const data = resParams.data;

    let isNew = false;

    if (resParams.loaded && !data.marker.x) {
        isNew = true;
    }

    // function showMarkers() {
    //     return params.setIsShowMarker(false) && <MyMarkers />
    // }

    const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"
    
    if (resParams.loading) {
        return <div className="preloader-box">< Triangle wrapperClass="preloader"/></div>
    }

    return (
        <div className="box-marker-add">
            <div className="colums-add-1">
                <div className="col-row">
                    {/* <h5 className="input-name font-custom-2" onClick={() => params.setIsShowMarker(false)}>вертать в зад</h5> */}
                    <button onClick={() => navigate(-1)}>Go back</button>
                    <h5 className="input-name font-custom-2">Название</h5>
                    <input className="input-str font-custom-2" defaultValue={`${data.marker.description || ''}`} onChange={(e) => setFormName(e.target.value)} />
                </div>
                <div className="col-row">
                    <h5 className="input-name font-custom-2">Мир</h5>
                    <Select 
                        className="input-str font-custom-2"
                        onChange={setSelectedOption}
                        value={selectedOption || data.marker.id_type || ''}
                        dropdownClassName="option-list font-custom-2"
                    >
                        <Option value="basePlayers">Базы игроков</Option>
                        <Option value="city">Города</Option>
                        <Option value="shopping_centers">Торговые центры - over</Option>
                        <Option value="turquoise">Бирюзовая - nether</Option>
                        <Option value="orange">Оранжевая - nether</Option>
                        <Option value="lime">Лаймовая - nether</Option>
                        <Option value="pink">Розовая - nether</Option>
                        <Option value="farm">Фермы - nether</Option>
                        <Option value="end_portals">Энд порталы - nether</Option>
                        <Option value="pixel_arts">Пиксель арты - end</Option>
                    </Select>
                </div>
                <div className="coord">
                    <h5 className="input-name font-custom-2">Координаты</h5>
                <div className="block-row">
                    <div className="col-row-custom">
                        <h5 className="input-name font-custom-2">X</h5>
                        <input className="input-str-custom font-custom-2" defaultValue={`${data.marker.x || ''}`} onChange={(e) => setFormX(e.target.value)} />
                    </div>
                    <div className="col-row-custom">
                        <h5 className="input-name font-custom-2">Y</h5>
                        <input className="input-str-custom font-custom-2" defaultValue={`${data.marker.y || ''}`} onChange={(e) => setFormY(e.target.value)} />
                    </div>
                </div>
                    <Warn inf={AttentionCoords} />
                </div>
                <div className="box-bt">
                    <button className="bt-all bt-add font-custom-2" onClick={saveMarker} >Сохранить</button>
                    {isNew
                        ? ''
                        : <button className="bt-all bt-del font-custom-2">Удалить</button>
                    }
                </div>
            </div>
            <div className="colums-add-2">
                {isNew
                    ? <iframe title="map" src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" width="100%" height="100%" />
                    : <iframe title="map" src={`https://map.gmgame.ru/#/${data.marker.x}/64/${data.marker.z}/-4/${data.marker.world_name}/${data.marker.world_type}`} width="100%" height="100%" />
                }
            </div>
        </div>
    );
}

export default EditAddMarker;
