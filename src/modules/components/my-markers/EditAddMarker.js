import {React, useState} from "react";
import Warn from "../warn/Warn.js";
import useAxios from '../../../DataProvider';
import { Audio } from  'react-loader-spinner';
import Select, { Option } from 'rc-select';

import "./My-markers.scss";


const EditAddMarker = (markerId) => {
    let [selectedOption, setSelectedOption] = useState(null);

    const resParams = useAxios(
        `/api/get_marker/${markerId.markerId}`,
        'GET',
        {}
    );

    const data = resParams.data;

    const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"
    
    if (resParams.loading) {
        return < Audio />
    } 

    return (
        <div className="box-marker-add">
            <div className="colums-add-1">
                <div className="col-row">
                    <h5 className="input-name font-custom-2">Название</h5>
                    <input className="input-str font-custom-2" defaultValue={`${data.marker.description}`} />
                </div>
                <div className="col-row">
                    <h5 className="input-name font-custom-2">Мир</h5>
                    <Select 
                        className="input-str font-custom-2"
                        onChange={setSelectedOption}
                        value={selectedOption || data.marker.id_type}
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
                        <input className="input-str-custom font-custom-2" defaultValue={`${data.marker.x}`} />
                    </div>
                    <div className="col-row-custom">
                        <h5 className="input-name font-custom-2">Y</h5>
                        <input className="input-str-custom font-custom-2" defaultValue={`${data.marker.y}`} />
                    </div>
                </div>
                    <Warn inf={AttentionCoords} />
                </div>
                <div className="box-bt">
                    <button className="bt-all bt-add font-custom-2">Сохранить</button>
                    <button className="bt-all bt-del font-custom-2">Удалить</button>
                </div>
            </div>
            <div className="colums-add-2">
                <iframe title="map" src={`https://map.gmgame.ru/#/${data.marker.x}/${data.marker.y}/${data.marker.z}/-4/${data.marker.world_name}/${data.marker.world_type}`} width="100%" height="100%" />
            </div>
        </div>
    );
}

export default EditAddMarker;
