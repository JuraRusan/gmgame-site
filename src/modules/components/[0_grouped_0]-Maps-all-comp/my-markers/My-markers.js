import { useState } from "react";
import { sendRequest, useAxios } from "../../../../DataProvider";
import Preload from "../../preloader/Preload.js";
import { useAlert } from "@blaumaus/react-alert";
import MapViewBlock from "../mini-marker-components/map-view-block/MapViewBlock";
import CabSearch from "../../[0_grouped_0]-Profile/cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";

import styles from "../maps-elements.module.scss";

const MyMarkers = () => {
  const isLoading = useLoading();

  const alert = useAlert();

  const [filter, setFilter] = useState(null);
  const [data, setData] = useState({ markers: [], count: -1 });

  const resParams = useAxios("/api/get_markers", "GET", {});

  const showMessage = (response, id) => {
    if (response.message) {
      alert.success(response.message);
      setData({ markers: data.markers.filter((el) => el.id !== id), count: data.count - 1 });
    } else {
      alert.error(response.error);
    }
  };

  const deleteMarker = (marker) => {
    sendRequest("/api/delete_marker", "POST", {
      server: marker.server,
      id_type: marker.id_type,
      name: marker.name,
      x: marker.x,
      z: marker.z,
      description: marker.description || "",
      markerID: marker.id,
    }).then((response) => {
      showMessage(response, marker.id);
    });
  };

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.data && data.count === -1) {
    setData({ markers: resParams.data.markers, count: resParams.data.count });
  }

  return (
    <div className={styles["boxMapWrapper"]}>
      <CabSearch
        count={data.count}
        onChange={(e) => setFilter(e.target.value)}
        name="Количество меток -"
        to={"edit_add_marker/new"}
        href="https://wiki.gmgame.ru/"
      />
      <div className={styles["boxListWrapper"]}>
        {data.markers.map((el, index) => {
          if (filter && !el.description.toLowerCase().includes(filter.toLowerCase())) {
            return false;
          }

          return (
            <MapViewBlock
              key={index}
              index={index}
              name={el.name}
              link_to={`edit_add_marker/${el.id}`}
              onClick={() => deleteMarker(el)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyMarkers;
