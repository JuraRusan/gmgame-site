import classNames from "classnames";
import React, {useEffect, useState} from 'react';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {Link} from "react-router-dom";
import CabSearch from "../cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import {sendRequest, useAxios} from "../../../../DataProvider";
import {debounce} from "lodash";
import {useAlert} from "react-alert";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Gallery = () => {

  const isLoading = useLoading();
  const alert = useAlert();

  const [arrayData, setArrayData] = useState([])

  const [filter, setFilter] = useState(null);

  const [numberLengthTitle, setNumberLengthTitle] = useState(0);
  const [numberLengthDescription, setNumberLengthDescription] = useState(0);

  const shortenText = (text, maxLength) => text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  const resParams = useAxios(
    "/api/get_my_galleries/",
    'GET',
    {}
  );

  const showMessage = (response, id) => {
    if (response.message) {
      alert.success(response.message);
      setArrayData(arrayData.filter(el => el.data !== id))
    } else {
      alert.error(response.error);
    }
  }

  const handleDelete = (id) => {
    sendRequest(
      '/api/delete_gallery',
      'POST',
      {
        id: id
      }
    ).then(response => {
      showMessage(response, id);
    });
  }

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

  useEffect(() => {
    if (resParams.data) {
      setArrayData(resParams.data)
    }
  }, [resParams])

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>
  }

  return (
    <div className={classNames(styles["gallery_block"])}>
      <CabSearch
        count={arrayData.length}
        onChange={debounce((e) => setFilter(e.target.value.toLowerCase()), 250)}
        name="публикаций"
        to={'edit_add_post/new'}
      />
      {!arrayData.length
        ?
        <div className={classNames(styles["box_no_post"])}>
          <h4 className={classNames(styles["no_posts"])}>Здесь пока нет изображений</h4>
          <h4 className={classNames(styles["no_posts"])}>Добавьте красивых скриншотов, чтобы ваша галерея не
            грустила</h4>
        </div>
        :
        <div className={classNames(styles["box_all_post"])}>
          {arrayData.map((post, index) => {
              if (filter && !post.name.toLowerCase().includes(filter.toLowerCase())) {
                return false;
              }
              return (
                <Link
                  to={`edit_add_post/${post.id}`}
                  className={classNames(styles["one_post_gallery"])}
                  key={index}
                >
                  {post.aprove !== false
                    ? null
                    : <label className={classNames(styles["status"], styles["green"])}>Проверка</label>
                  }
                  {post.warning === false
                    ? null
                    : <label className={classNames(styles["status"], styles["red"])}>Ошибка</label>
                  }
                  <div className={classNames(styles["wrapper_image"])}>
                    <LazyLoadImage
                      className={classNames(styles["image"])}
                      alt="none"
                      effect="blur"
                      src={post.galleryImages[0].image}
                    />
                  </div>
                  <div className={classNames(styles["description_post"])}>
                    <h4 className={classNames(styles["title"])}>{shortenText(post.name, numberLengthTitle)}</h4>
                    <p
                      className={classNames(styles["paragraph"])}>{shortenText(post.description, numberLengthDescription)}</p>
                    {/*<div className={classNames(styles["tags"])}>*/}
                    {/*  {post.tagNavigation.slice(0, 9).map((tag, index) => (*/}
                    {/*    <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>*/}
                    {/*  ))}*/}
                    {/*  {post.tagNavigation.length > 9 && <span className={classNames(styles["oneTag"])}>and more...</span>}*/}
                    {/*</div>*/}
                  </div>
                  <div>
                    {/*<Link to={`post_analytics/${post.id}`}>статка</Link>*/}
                    <button
                      onClick={() => {
                        handleDelete(post.id)
                      }}
                    >
                      Удалить
                    </button>
                  </div>
                </Link>
              )
            }
          )}
        </div>
      }
    </div>
  );
};

export default Gallery;