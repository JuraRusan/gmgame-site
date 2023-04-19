import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";

import styles from "./Gallery.module.scss";
import 'react-image-picker-editor/dist/index.css'
import {array} from "../../../pages/gallery/GalleryArray";
import {Link} from "react-router-dom";

const Gallery = () => {

  const shortenText = (text, maxLength) => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className={styles["articlesBlock"]}>
      {/*<h4 className={styles["h4Title"]}>Страница в разработке, ожидайте в ближайшем будущем.</h4>*/}
      {array.map((post, index) =>
        <div className={styles["onePostGallery"]} key={index}>
          <div className={styles["wrapperImage"]}>
            <LazyLoadImage
              className={styles["image"]}
              alt={post.picturesView}
              effect="blur"
              src={post.picturesView}
            />
          </div>
          <div className={styles["desc"]}>
            <h4 className={styles["title"]}>{post.name}</h4>
            <p className={styles["paragraph"]}>{shortenText(post.description, 200)}</p>
            <div className={styles["containerActions"]}>
              <Link to={`edit_add_post`} className={[styles["actions"], styles["edit"]].join(' ')}>Редактировать</Link>
              <button className={[styles["actions"], styles["delete"]].join(' ')}>Удалить</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;