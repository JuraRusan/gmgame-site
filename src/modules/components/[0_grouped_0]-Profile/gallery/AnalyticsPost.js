import classNames from "classnames";
import React from "react";
import {array} from "../../../pages/gallery/GalleryArray";
import {useNavigate} from "react-router-dom";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./AnalyticsPost.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const BLOCK = ({arr, text, typeCount, typeList}) => {
  return (
    <div className={classNames(styles["one_column"])}>
      {arr.map((el, i) => {
        const typeCountVariables = typeCount === "likes" ? el.likes : el.dislikes
        const typeListVariables = typeList === "likesList" ? el.likesList : el.dislikesList

        return (
          <>
            <h3
              key={i}
              className={classNames(styles["title"])}
            >
              {text}<span className={classNames(styles["count"])}>{typeCountVariables}</span>
            </h3>
            {typeListVariables.map((user, i) =>
              <div className={classNames(styles["one"])} key={i}>
                <LazyLoadImage
                  className={classNames(styles["users_icon"])}
                  alt=""
                  effect="blur"
                  src={`https://minotar.net/helm/${user}/100`}
                />
                <h4 className={classNames(styles["users_name"])}>{user}</h4>
              </div>
            )}
          </>
        )
      })}
    </div>
  )
}

const AnalyticsPost = () => {

  const navigate = useNavigate();

  const filteredOneItem = array.filter(ids => ids.id === 1)

  return (
    <div className={classNames(styles["analytics_block"])}>
      <div className={classNames(styles["top"])}>
        <button
          onClick={() => navigate(-1)}
          className={classNames(styles["back"])}
        >
          {"<-- Показать весь список"}
        </button>
        <h2 className={classNames(styles["info_post"])}>Сведенья о публикации:</h2>
      </div>
      <div className={classNames(styles["bottom"])}>
        <BLOCK
          text="Всего лайков: "
          arr={filteredOneItem}
          typeCount="likes"
          typeList="likesList"
        />
        <BLOCK
          text="Всего дизлайков: "
          arr={filteredOneItem}
          typeCount="dislikes"
          typeList="dislikesList"
        />
      </div>
    </div>
  );
};

export default AnalyticsPost;