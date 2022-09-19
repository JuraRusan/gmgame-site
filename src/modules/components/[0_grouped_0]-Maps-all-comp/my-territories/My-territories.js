import {React, useState} from "react";
import {useAxios} from '../../../../DataProvider';
import {Link} from 'react-router-dom';

import SvgAddMarker from "../../../../bases/icons/SvgAddMarker.js";

import "../my-markers/My-markers.scss";
import Preload from "../../preloader/Preload.js";

const MyTerritories = () => {
  let [fileter, setFileter] = useState(null);

  const resParams = useAxios(
    "/api/get_territories",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload />
  }

  const data = resParams.data;

  return (
    <div className="col-2">
      <div className="box-marker">
        <div className="box-searth">
          <input className="search-input" onChange={(e) => setFileter(e.target.value)}/>
          <h4 className="nomer-list">Количество территорий {data.count}</h4>
        </div>
        <div className="box-list">
          <Link to={'edit_add_terr/new'}>
            {/* eslint-disable-next-line */}
            <div className="str">
              <div className="margin-add">
                <SvgAddMarker width="100%" height="100%" color="#f4f4f4"/>
              </div>
            </div>
          </Link>
          {data.markers.map((el, index) => {
            if (fileter && !el.name.toLowerCase().includes(fileter.toLowerCase())) {
              return false;
            }
            return (
              <div key={el.id} className="str">
                <div className="colums-1">
                  <p className="str-p">{index + 1}</p>
                  <h3 className="str-h3">{el.name}</h3>
                </div>
                <div className="colums-2">
                  <Link to={`edit_add_terr/${el.id}`} className="str-bt">Настроить</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MyTerritories;
