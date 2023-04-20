import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {array} from "../../../pages/gallery/GalleryArray";
import SvgAddMarker from "../../../../bases/icons/SvgAddMarker";

import styles from "./Gallery.module.scss";
import 'react-image-picker-editor/dist/index.css'

const Gallery = () => {

  const shortenText = (text, maxLength) => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return (
    <div className={styles["galleryBlock"]}>
      {/*<h4 className={styles["h4Title"]}>Страница в разработке, ожидайте в ближайшем будущем.</h4>*/}
      <Link to={`edit_add_post`} className={styles["onePostGallery"]}>
        <span className={styles["addPost"]}>
          <SvgAddMarker width="100%" height="100%" color="#f4f4f4"/>
        </span>
      </Link>
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
              <Link to={`post_analytics`} className={[styles["actions"], styles["analytics"]].join(' ')}>Аналитика</Link>
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