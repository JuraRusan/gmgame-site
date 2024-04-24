import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import CabSearch from "../cab-search/CabSearch";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";
import { sendRequest, useAxios } from "../../../../DataProvider";
import { debounce } from "lodash";
import { useAlert } from "react-alert";
import Tag from "./tag/Tag";
import ActionsButton from "../actions-button/ActionsButton";
// import StatusSvgComponent from "../../../../bases/icons/statusSvg/StatusSvg";
import BinSvgComponent from "../../../../bases/icons/binSvg/BinSvg";

import styles from "./Gallery.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";

const TAG = [
  "base",
  "farm",
  "dalandis_base",
  "home",
  "air_base",
  "base",
  "farm",
  "dalandis_base",
  "home",
  "air_base",
  "base",
  "farm",
  "dalandis_base",
  "home",
  "air_base",
];

const Gallery = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const [arrayData, setArrayData] = useState({ data: [], count: -1 });

  const [filter, setFilter] = useState(null);
  const [visible, setVisible] = useState(true);

  const [numberLengthTitle, setNumberLengthTitle] = useState(0);

  const shortenText = (text, maxLength) => (text.length > maxLength ? `${text.slice(0, maxLength)}...` : text);

  const arrayDataFilter = arrayData.data.filter((fill) => {
    if (visible) {
      return true;
    } else {
      return !fill.aprove || fill.warning === true;
    }
  });

  const resParams = useAxios("/api/get_my_galleries/", "GET", {});

  const showMessage = (response, id) => {
    if (response.message) {
      alert.success(response.message);
      setArrayData({ data: arrayData.data.filter((el) => el.id !== id), count: arrayData.count - 1 });
    } else {
      alert.error(response.error);
    }
  };

  const handleDelete = (id) => {
    sendRequest("/api/delete_gallery", "POST", {
      id: id,
    }).then((response) => {
      showMessage(response, id);
    });
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1280) {
        setNumberLengthTitle(70);
      } else if (window.innerWidth >= 1024) {
        setNumberLengthTitle(40);
      } else if (window.innerWidth >= 960) {
        setNumberLengthTitle(35);
      } else if (window.innerWidth >= 768) {
        setNumberLengthTitle(40);
      } else if (window.innerWidth >= 640) {
        setNumberLengthTitle(50);
      } else {
        setNumberLengthTitle(100);
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (resParams.data && arrayData.count === -1) {
    setArrayData({ data: [...resParams.data], count: resParams.data.length });
  }

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["gallery_block"])}>
      <CabSearch
        count={arrayData.count === -1 ? 0 : arrayData.count}
        onChange={debounce((e) => setFilter(e.target.value.toLowerCase()), 250)}
        name="публикаций"
        to={"edit_add_post/new"}
        href="https://wiki.gmgame.ru/"
        gallery={true}
        galleryVisible={visible}
        disabled={arrayData.data.length === 0}
        onGalleryClick={() => {
          if (arrayData.data.length !== 0) {
            setVisible(!visible);
          }
        }}
      />
      {arrayData.count === -1 || arrayData.count === 0 ? (
        <div className={classNames(styles["box_no_post"])}>
          <h4 className={classNames(styles["no_posts"])}>Здесь пока нет изображений</h4>
          <h4 className={classNames(styles["no_posts"])}>
            Добавьте красивых скриншотов, чтобы ваша галерея не грустила
          </h4>
        </div>
      ) : (
        <div className={classNames(styles["box_all_post"])}>
          {arrayDataFilter.map((post, index) => {
            if (filter && !post.name.toLowerCase().includes(filter.toLowerCase())) {
              return null;
            }

            return (
              <div className={classNames(styles["one_post_gallery"])} key={index}>
                {post.aprove !== false ? null : (
                  <label className={classNames(styles["status"], styles["green"], post.warning && styles["none"])}>
                    Проверка
                  </label>
                )}
                {post.warning === false ? null : (
                  <label className={classNames(styles["status"], styles["red"])}>Заблокировано</label>
                )}
                <Link to={`edit_add_post/${post.id}`} className={classNames(styles["link_to"])}>
                  <div className={classNames(styles["wrapper_image"])}>
                    <LazyLoadImage
                      className={classNames(styles["image"])}
                      alt="none"
                      effect="blur"
                      src={post.galleryImages[0].image + "@4"}
                    />
                  </div>
                  <div className={classNames(styles["description_post"])}>
                    <h4 className={classNames(styles["title"])}>{shortenText(post.name, numberLengthTitle)}</h4>
                    <div className={classNames(styles["tags_view"])}>
                      {TAG.slice(0, 6).map((tag, index) => (
                        <Tag tag={tag.trim()} key={index} />
                      ))}
                      {TAG.length > 6 && <Tag symbol={false} tag={"and more..."} />}
                    </div>
                  </div>
                </Link>
                <div className={classNames(styles["action_column"])}>
                  {/*<Link to={`post_analytics/${post.id}`}>*/}
                  {/*  <ActionsButton ico={<StatusSvgComponent width="100%" height="100%" />} />*/}
                  {/*</Link>*/}
                  <ActionsButton
                    onClick={() => {
                      handleDelete(post.id);
                    }}
                    ico={<BinSvgComponent width="100%" height="100%" />}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Gallery;
