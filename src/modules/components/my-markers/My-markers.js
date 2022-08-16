import React from "react";
import useAxios from '../../../DataProvider';
import { Audio } from  'react-loader-spinner'

import "./My-markers.scss";

import SvgAddMarker from "../../../bases/icons/SvgAddMarker.js";

const MyMarkers = () => {

  const resParams = useAxios(
    "/api/get_markers/",
    'GET',
    {}
  );

  const data = resParams.data;

//  const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"

 if (resParams.loading) {
    return < Audio />
 }
    return (
        <div className="box-marker">
        <div className="box-searth">
            <input className="search-input" />
            <h4 className="nomer-list">{data.count} количиство</h4>
        </div>
        <div className="box-list">
            <a href="/cab" className="str">
            <div className="margin-add">
            <SvgAddMarker width="100%" height="100%" color="#f4f4f4" />
            </div>
            </a>
            {data.markers.map((el, index) => {
                return (
                    <div key={el.id} className="str">
                    <div className="colums-1">
                        <p className="str-p">{index + 1}</p>
                        <h3 className="str-h3">{el.description}</h3>
                    </div>
                    <div className="colums-2">
                        <button className="str-bt">Настроить</button>
                    </div>
                    </div>
                );
            })}
        </div>
        </div>
    )
 }
  // <div className="box-marker-add">
  //  <div className="colums-add-1">
  //   <div className="col-row">
  //    <h5 className="input-name font-custom-2">Название</h5>
  //    <input className="input-str font-custom-2" />
  //   </div>
  //   <div className="col-row">
  //    <h5 className="input-name font-custom-2">Мир</h5>
  //    <select className="input-str font-custom-2">
  //     <option value="1" className="option-list font-custom-2">Пункт 1</option>
  //     <option value="2" className="option-list font-custom-2">Пункт 2</option>
  //     <option value="3" className="option-list font-custom-2">Пункт 3</option>
  //     <option value="4" className="option-list font-custom-2">Пункт 4</option>
  //    </select>
  //   </div>
  //   <div className="coord">
  //    <h5 className="input-name font-custom-2">Координаты</h5>
  //    <div className="block-row">
  //     <div className="col-row-custom">
  //      <h5 className="input-name font-custom-2">X</h5>
  //      <input className="input-str-custom font-custom-2" />
  //     </div>
  //     <div className="col-row-custom">
  //      <h5 className="input-name font-custom-2">Y</h5>
  //      <input className="input-str-custom font-custom-2" />
  //     </div>
  //    </div>
  //    <Warn inf={AttentionCoords} />
  //   </div>
  //   <div className="box-bt">
  //    <button className="bt-all bt-add font-custom-2">Сохранить</button>
  //    <button className="bt-all bt-del font-custom-2">Удалить</button>
  //   </div>
  //  </div>
  //  <div className="colums-add-2">
  //   <iframe src="https://map.gmgame.ru/#/-7/64/-54/-4/GMGameWorld%20-%20overworld/over" width="100%" height="100%" />
  //  </div>
  // </div>
//  );
// };

export default MyMarkers;
