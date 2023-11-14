import classNames from "classnames";
import {useState} from "react";
import {useAxios, sendRequest} from '../../../../DataProvider';
import Preload from "../../preloader/Preload.js";
import {useAlert} from "react-alert";
import MapViewBlock from "../mini-marker-components/map-view-block/MapViewBlock";
import CabSearch from "../../[0_grouped_0]-Profile/cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";

import styles from "../maps-elements.module.scss";

const MyTerritories = () => {

  const isLoading = useLoading();

  const alert = useAlert();
  let [filter, setFilter] = useState(null);
  let [data, setData] = useState({terrs: [], count: -1});

  const resParams = useAxios(
    "/api/get_territories",
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  if (resParams.data && data.count === -1) {
    setData({terrs: resParams.data.markers, count: resParams.data.count});
  }

  function showMessage(response, id) {
    if (response.message) {
      alert.success(response.message);
      setData({terrs: data.markers.filter(el => el.id !== id), count: data.count - 1});
    } else {
      alert.error(response.error);
    }
  }

  const deleteMarker = (terrs) => {
    sendRequest(
      '/api/delete_terr',
      'POST',
      {
        server: terrs.world || 'gmgame',
        name: terrs.name,
        startX: terrs.xStart,
        stopX: terrs.xStop,
        startZ: terrs.zStart,
        stopZ: terrs.zStop,
        terrID: terrs.id
      }
    ).then(response => {
      showMessage(response, terrs.id);
    });
  }

  return (
    <div className={classNames(styles["boxMapWrapper"])}>
      <CabSearch
        count={data.count}
        onChange={(e) => setFilter(e.target.value)}
        name="территорий"
        to={'edit_add_terr/new'}
      />
      <div className={classNames(styles["boxListWrapper"])}>
        {data.terrs.map((el, index) => {
          if (filter && !el.name.toLowerCase().includes(filter.toLowerCase())) {
            return false;
          }
          return (
            <MapViewBlock
              key={el.id}
              index={index}
              name={el.name}
              link_to={`edit_add_terr/${el.id}`}
              onClick={() => deleteMarker(el)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyTerritories;
