import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {array} from "../../../pages/gallery/GalleryArray";
import AddSvgComponent from "../../../../bases/icons/addSvg/AddSvg";
import AOS from "aos";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-image-picker-editor/dist/index.css'
import "aos/dist/aos.css";

const Gallery = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

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
        setNumberLengthTitle(30);
        setNumberLengthDescription(160);
      } else {
        setNumberLengthTitle(100);
        setNumberLengthDescription(200);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial value
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classNames(styles["galleryBlock"])} data-aos="zoom-in">
      <input className={classNames(styles["searchPost"])} type="search" placeholder="#tag"/>
      <Link to={`edit_add_post`} className={classNames(styles["onePostGallery"])}>
        <span className={classNames(styles["addPost"])}>
          <AddSvgComponent width="100%" height="100%" color="#f4f4f4"/>
        </span>
      </Link>
      {array.length === 0 ?
        <>
          <h4 className={classNames(styles["noPosts"])}>Здесь пока нет изображений ;(</h4>
          <h4 className={classNames(styles["noPosts"])}>Добавьте красивых скриншотов, чтобы Ваша галерея не грустила.</h4>
        </>
        :
        <>
          {array.map((post, index) =>
            <div className={classNames(styles["onePostGallery"])} key={index}>
              <div className={classNames(styles["wrapperImage"])}>
                <LazyLoadImage
                  className={classNames(styles["image"])}
                  alt={post.picturesView}
                  effect="blur"
                  src={post.picturesView}
                />
              </div>
              <div className={classNames(styles["desc"])}>
                <h4 className={classNames(styles["title"])}>{shortenText(post.name, numberLengthTitle)}</h4>
                <p className={classNames(styles["paragraph"])}>{shortenText(post.description, numberLengthDescription)}</p>
                <div className={classNames(styles["tags"])}>
                  {post.tagNavigation.slice(0, 9).map((tag, index) => (
                    <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>
                  ))}
                  {post.tagNavigation.length > 9 && <span className={classNames(styles["oneTag"])}>and more...</span>}
                </div>
                <div className={classNames(styles["containerActions"])}>
                  <Link to={`post_analytics`} className={classNames(styles["actions"], styles["analytics"])}>Аналитика</Link>
                  <Link to={`edit_add_post`} className={classNames(styles["actions"], styles["edit"])}>Редактировать</Link>
                  <button className={classNames(styles["actions"], styles["delete"])}>Удалить</button>
                </div>
              </div>
            </div>
          )}
        </>
      }
    </div>
  );
};

export default Gallery;