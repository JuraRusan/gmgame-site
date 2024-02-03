import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import {array} from "../../../pages/gallery/GalleryArray";
import CabSearch from "../cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import {sendRequest, useAxios} from "../../../../DataProvider";
import {useAlert} from "react-alert";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

  const isLoading = useLoading();

  // const alert = useAlert();

  const [numberLengthTitle, setNumberLengthTitle] = useState(0);
  const [numberLengthDescription, setNumberLengthDescription] = useState(0);

  const [filter, setFilter] = useState(null);
  const [data, setData] = useState({posts: [], count: -1});

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

  const resParams = useAxios(
    "/api/get_galleries",
    'GET',
    {}
  );

  if (isLoading || resParams.loading) {
    return <Preload full={false}/>
  }

  if (resParams.data && data.count === -1) {
    setData({posts: resParams.data.data, count: resParams.data.count});
  }

  // function showMessage(response, id) {
  //   if (response.message) {
  //     alert.success(response.message);
  //   } else {
  //     alert.error(response.error);
  //   }
  // }

  return (
    <div className={classNames(styles["gallery_block"])}>
      <CabSearch
        count={data.count}
        onChange={(e) => setFilter(e.target.value)}
        name="публикаций"
        to={'edit_add_post/new'}
      />
      {data.count === -1 || data.count === 0 ?
        <div className={classNames(styles["box_no_post"])}>
          <h4 className={classNames(styles["no_posts"])}>Здесь пока нет изображений</h4>
          <h4 className={classNames(styles["no_posts"])}>Добавьте красивых скриншотов, чтобы ваша галерея не грустила</h4>
        </div>
        :
        <div className={classNames(styles["box_all_post"])}>
          {data.posts.map((post, index) => {
            if (filter && !post.title.toLowerCase().includes(filter.toLowerCase())) {
              return false;
            }
            return (
              <Link to={`edit_add_post/${post.id}`} className={classNames(styles["one_post_gallery"])} key={index}>
                {post.check === true ? null : <label className={classNames(styles["status"])}>Проверка</label>}
                <div className={classNames(styles["wrapper_image"])}>
                  {/*<LazyLoadImage*/}
                  {/*  className={classNames(styles["image"])}*/}
                  {/*  alt={post.picturesView}*/}
                  {/*  effect="blur"*/}
                  {/*  src={post.picturesView}*/}
                  {/*/>*/}
                </div>
                <div className={classNames(styles["description_post"])}>
                  <h4 className={classNames(styles["title"])}>{shortenText(post.title, numberLengthTitle)}</h4>
                  <p className={classNames(styles["paragraph"])}>{shortenText(post.description, numberLengthDescription)}</p>
                  <div className={classNames(styles["tags"])}>
                    {JSON.parse(post.tags).slice(0, 9).map((tag, index) => (
                      <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>
                    ))}
                    {JSON.parse(post.tags).length > 9 &&
                      <span className={classNames(styles["oneTag"])}>and more...</span>}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      }
    </div>
  );
};

export default Gallery;