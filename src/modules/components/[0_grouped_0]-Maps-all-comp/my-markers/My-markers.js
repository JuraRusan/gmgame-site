import {React, useState} from "react";
import {useAxios} from '../../../../DataProvider';
import {Link} from 'react-router-dom';

import "../Style-maps.scss";

import SvgAddMarker from "../../../../bases/icons/SvgAddMarker.js";
import Preload from "../../preloader/Preload.js";
import SvgDelete from "../../../../bases/icons/SvgDelete.js";

const MyMarkers = () => {
  let [fileter, setFileter] = useState(null);

  const resParams = useAxios(
    "/api/get_markers/",
    'GET',
    {}
  );

  if (resParams.loading) {
    return <Preload/>
  }

  const data = resParams.data;

  return (
    <div className="box-marker">
      <div className="box-searth">
        <input className="search-input" onChange={(e) => setFileter(e.target.value)}/>
        <h4 className="nomer-list">Количество меток - {data.count}</h4>
      </div>
      <div className="box-list">
        <Link to={'edit_add_marker/new'}>
          {/* eslint-disable-next-line */}
          <div className="str">
            <div className="margin-add">
              <SvgAddMarker width="100%" height="100%" color="#f4f4f4"/>
            </div>
          </div>
        </Link>
        {data.markers.map((el, index) => {
          if (fileter && !el.description.toLowerCase().includes(fileter.toLowerCase())) {
            return false;
          }
          return (
            <div key={el.id} className="str">
              <div className="colums-1">
                <p className="str-p">{index + 1}</p>
                <h3 className="str-h3">{el.name}</h3>
              </div>
              <div className="colums-2">
                <Link to={`edit_add_marker/${el.id}`} className="str-bt">Настроить</Link>
                <button className="delete">
                  <SvgDelete width="100%" height="100%" color="#f4f4f4"/>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyMarkers;
