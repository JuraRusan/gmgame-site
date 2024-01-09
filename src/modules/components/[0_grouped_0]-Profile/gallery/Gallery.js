import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {array} from "../../../pages/gallery/GalleryArray";
import CabSearch from "../cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

  const isLoading = useLoading();

  const [numberLengthTitle, setNumberLengthTitle] = useState(0);
  const [numberLengthDescription, setNumberLengthDescription] = useState(0);
  const shortenText = (text, maxLength) => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setNumberLengthTitle(75);
        setNumberLengthDescription(180);
      } else if (window.innerWidth >= 1024) {
        setNumberLengthTitle(40);
        setNumberLengthDescription(150);
      } else if (window.innerWidth >= 960) {
        setNumberLengthTitle(35);
        setNumberLengthDescription(140);
      } else if (window.innerWidth >= 768) {
        setNumberLengthTitle(40);
        setNumberLengthDescription(160);
      } else if (window.innerWidth >= 640) {
        setNumberLengthTitle(50);
        setNumberLengthDescription(160);
      } else {
        setNumberLengthTitle(100);
        setNumberLengthDescription(200);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isLoading) {
    return <Preload full={false}/>
  }

  return (
    <div className={classNames(styles["gallery_block"])}>
      <CabSearch
        count={array.length}
        // onChange={ }
        name="публикаций"
        to={'edit_add_post'}
      />
      {!array.length ?
        <div className={classNames(styles["box_no_post"])}>
          <h4 className={classNames(styles["no_posts"])}>Здесь пока нет изображений</h4>
          <h4 className={classNames(styles["no_posts"])}>Добавьте красивых скриншотов, чтобы ваша галерея не грустила</h4>
        </div>
        :
        <div className={classNames(styles["box_all_post"])}>
          {array.map((post, index) =>
            <Link to="edit_add_post" className={classNames(styles["one_post_gallery"])} key={index}>
              <label className={classNames(styles["status"])}>Проверка</label>
              <div className={classNames(styles["wrapper_image"])}>
                <LazyLoadImage
                  className={classNames(styles["image"])}
                  alt={post.picturesView}
                  effect="blur"
                  src={post.picturesView}
                />
              </div>
              <div className={classNames(styles["description_post"])}>
                <h4 className={classNames(styles["title"])}>{shortenText(post.name, numberLengthTitle)}</h4>
                <p className={classNames(styles["paragraph"])}>{shortenText(post.description, numberLengthDescription)}</p>
                <div className={classNames(styles["tags"])}>
                  {post.tagNavigation.slice(0, 9).map((tag, index) => (
                    <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>
                  ))}
                  {post.tagNavigation.length > 9 && <span className={classNames(styles["oneTag"])}>and more...</span>}
                </div>
              </div>
            </Link>
          )}
        </div>
      }
    </div>
  );
};

export default Gallery;