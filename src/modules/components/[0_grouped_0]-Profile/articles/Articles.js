import classNames from "classnames";
import { useAlert } from "react-alert";
import { useState } from "react";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload.js";
import { useAxios, sendRequest } from "../../../../DataProvider";
import CabSearch from "../../[0_grouped_0]-Profile/cab-search/CabSearch";
import MapViewBlock from "../../[0_grouped_0]-Maps-all-comp/mini-marker-components/map-view-block/MapViewBlock";

import styles from "./Articles.module.scss";

const Articles = () => {
  const isLoading = useLoading();

  const alert = useAlert();

  let [filter, setFilter] = useState(null);
  let [data, setData] = useState({ articles: [], count: -1 });

  const resParams = useAxios("/api/get_articles/", "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  if (resParams.data && data.count === -1) {
    setData({ articles: resParams.data.articles, count: resParams.data.count });
  }

  console.log(data);

  function showMessage(response, id) {
    if (response.message) {
      alert.success(response.message);
      setData({
        articles: data.articles.filter((el) => el.id !== id),
        count: data.count - 1,
      });
    } else {
      alert.error(response.error);
    }
  }

  const deleteArticles = (article) => {
    sendRequest("/api/delete_article", "POST", {
      // server: marker.server,
      // id_type: marker.id_type,
      // name: marker.name,
      // x: marker.x,
      // z: marker.z,
      // description: marker.description || '',
      // markerID: marker.id
    }).then((response) => {
      showMessage(response, article.id);
    });
  };

  return (
    <div className={classNames(styles["articlesBlock"])}>
      <CabSearch
        count={data.count}
        onChange={(e) => setFilter(e.target.value)}
        name="статей"
        to={"edit_add_article/new"}
      />
      <div className={classNames(styles["boxListWrapper"])}>
        {data.articles.map((el, index) => {
          if (
            filter &&
            !el.title.toLowerCase().includes(filter.toLowerCase())
          ) {
            return false;
          }
          return (
            <MapViewBlock
              key={el.id}
              index={index}
              name={el.title}
              link_to={`edit_add_article/${el.id}`}
              onClick={() => deleteArticles(el)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Articles;
