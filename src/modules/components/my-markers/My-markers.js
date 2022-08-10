import React from "react";

import "./My-markers.scss";

import Warn from "../warn/Warn.js";
import SvgAddMarker from "../../../bases/icons/SvgAddMarker.js";

const MyMarkers = () => {
 const markerDB = [
  {
   id: 1,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 2,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 3,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 4,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 5,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 6,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 7,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 8,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 9,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 10,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 11,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 12,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 13,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 14,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 15,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 16,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 17,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 18,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 19,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 20,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 21,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
  {
   id: 22,
   text: "Dalandis",
   x: "-3941",
   y: "64",
   z: "6841",
  },
 ];

 const AttentionCoords = "Учтите, что визуально точки смещаются примерно на 30-50 блоков вниз!"
 return (
  <div className="box-marker">
   <div className="box-searth">
    <input className="search-input" />
    <h4 className="nomer-list">1111 колич.</h4>
   </div>
   <div className="box-list">
    <a href="/cab" className="str">
     <div className="margin-add">
      <SvgAddMarker width="100%" height="100%" color="#f4f4f4" />
     </div>
    </a>
    {markerDB.map((el) => {
     return (
      <div key={el.id} className="str">
       <div className="colums-1">
        <p className="str-p">{el.id}</p>
        <h3 className="str-h3">{el.text}</h3>
       </div>
       <div className="colums-2">
        <button className="str-bt">Настроить</button>
       </div>
      </div>
     );
    })}
   </div>
  </div>
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
 );
};

export default MyMarkers;
