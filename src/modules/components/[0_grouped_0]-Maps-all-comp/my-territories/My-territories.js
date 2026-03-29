import { useState } from "react";
import { sendRequest, useAxios } from "../../../../DataProvider";
import Preload from "../../preloader/Preload.js";
import { useAlert } from "@blaumaus/react-alert";
import MapViewBlock from "../mini-marker-components/map-view-block/MapViewBlock";
import CabSearch from "../../[0_grouped_0]-Profile/cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";

import styles from "../maps-elements.module.scss";

const MyTerritories = () => {
  const isLoading = useLoading();

  const alert = useAlert();

  const [filter, setFilter] = useState(null);
  const [data, setData] = useState({ terrs: [], count: -1 });

  const resParams = useAxios("/api/get_territories", "GET", {});

  const showMessage = (response, id) => {
    if (response.message) {
      alert.success(response.message);
      setData({ terrs: data.terrs.filter((el) => el.id !== id), count: data.count - 1 });
    } else {
      alert.error(response.error);
    }
  };

  const deleteTerr = (terrs) => {
    sendRequest("/api/delete_terr", "POST", {
      server: terrs.world || "gmgame",
      name: terrs.name,
      startX: terrs.xStart,
      stopX: terrs.xStop,
      startZ: terrs.zStart,
      stopZ: terrs.zStop,
      terrID: terrs.id,
    }).then((response) => {
      showMessage(response, terrs.id);
    });
  };

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.data && data.count === -1) {
    setData({ terrs: resParams.data.markers, count: resParams.data.count });
  }

  return (
    <div className={styles["boxMapWrapper"]}>
      <CabSearch
        count={data.count}
        onChange={(e) => setFilter(e.target.value)}
        name="Количество территорий -"
        to={"edit_add_terr/new"}
        href="https://wiki.gmgame.ru/books/gaidy/page/kak-dobavit-territoriiu-na-kartu"
      />
      <div className={styles["boxListWrapper"]}>
        {data.terrs.map((el, index) => {
          if (filter && !el.name.toLowerCase().includes(filter.toLowerCase())) {
            return false;
          }

          return (
            <MapViewBlock
              key={index}
              index={index}
              name={el.name}
              link_to={`edit_add_terr/${el.id}`}
              onClick={() => deleteTerr(el)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MyTerritories;
