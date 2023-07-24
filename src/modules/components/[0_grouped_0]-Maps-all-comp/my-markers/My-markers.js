import classNames from "classnames";
import {React, useState, useEffect} from "react";
import {useAxios, sendRequest} from '../../../../DataProvider';
import {Link} from 'react-router-dom';
import SvgAddMarker from "../../../../bases/icons/SvgAddMarker.js";
import Preload from "../../preloader/Preload.js";
import BinSvgComponent from "../../../../bases/icons/binSVG/binSvg";
import AOS from "aos";
import {useAlert} from "react-alert";

import styles from "../maps-elements.module.scss";
import "aos/dist/aos.css";

const MyMarkers = () => {
  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const alert = useAlert();
  const [isLoading, setIsLoading] = useState(true);
  let [fileter, setFileter] = useState(null);
  let [data, setData] = useState({markers: [], count: -1});

  const resParams = useAxios(
    "/api/get_markers/",
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

  if (resParams.data && data.count === -1) {
    setData({markers: resParams.data.markers, count: resParams.data.count});
  }

  function showMessage(response, id) {
    if (response.message) {
      alert.success(response.message);
      setData({markers: data.markers.filter(el => el.id !== id), count: data.count - 1});
    } else {
      alert.error(response.error);
    }
  }

  const deleteMarker = (marker) => {
    sendRequest(
      '/api/delete_marker',
      'POST',
      {
        server: marker.server,
        id_type: marker.id_type,
        name: marker.name,
        x: marker.x,
        z: marker.z,
        description: marker.description || '',
        markerID: marker.id
      }
    ).then(response => {
      showMessage(response, marker.id);
    });
  }

  return (
    <div className={classNames(styles["boxMapWrapper"])} data-aos="zoom-in">
      <div className={classNames(styles["boxSearchWrapper"])}>
        <input className={classNames(styles["searchInput"])} onChange={(e) => setFileter(e.target.value)} type="search" placeholder="Поиск"/>
        <h4 className={classNames(styles["numberListCount"])}>Количество меток - {data.count}</h4>
      </div>
      <div className={classNames(styles["boxListWrapper"])}>
        <Link to={'edit_add_marker/new'}>
          {/* eslint-disable-next-line */}
          <div className={classNames(styles["oneMapsElement"])}>
            <div className={classNames(styles["marginAddBox"])}>
              <SvgAddMarker width="100%" height="100%" color="#f4f4f4"/>
            </div>
          </div>
        </Link>
        {data.markers.map((el, index) => {
          if (fileter && !el.description.toLowerCase().includes(fileter.toLowerCase())) {
            return false;
          }
          return (
            <div key={el.id} className={classNames(styles["oneMapsElement"])}>
              <div className={classNames(styles["columnsOne"])}>
                <p className={classNames(styles["elementIndex"])}>{index + 1}</p>
                <h3 className={classNames(styles["elementH3Name"])}>{el.name}</h3>
              </div>
              <div className={classNames(styles["columnsTwo"])}>
                <Link to={`edit_add_marker/${el.id}`} className={classNames(styles["elementActions"])}>Настроить</Link>
                <button className={classNames(styles["deleteButton"])} onClick={() => deleteMarker(el)}>
                  <BinSvgComponent width="100%" height="100%" color="#f4f4f4"/>
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
