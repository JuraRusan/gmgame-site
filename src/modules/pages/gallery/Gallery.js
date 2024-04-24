import classNames from "classnames";
import React, { useState } from "react";
// import ImageGallery from "react-image-gallery";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAxios } from "../../../DataProvider";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";
// import HeartSvgComponent from "../../../bases/icons/heartSvg/HeartSvg";
// import Particles from "../../components/particles/Particles";
import Tag from "../../components/[0_grouped_0]-Profile/gallery/tag/Tag";
import { prepare } from "../../components/text-editor/functions/Prepare";

import styles from "./Gallery.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
// import "../../custon-modules/Image-gallery.scss";

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
  "base",
  "farm",
];

const USERS = [
  "Mcclure",
  "Mona",
  "Walls",
  "Travis",
  "Rutledge",
  "Pittman",
  "Kitty",
  "Clemons",
  "Byers",
  "Claudine",
  "Berg",
  "Obrien",
  "Tonya",
  "Crosby",
  "Wagner",
  "Hendrix",
  "Bryan",
  "Lori",
  "Gabriela",
  "Winters",
  "Amelia",
  "Hartman",
  "Guy",
  "Noelle",
  "Mclaughlin",
  "James",
  "Esmeralda",
  "Kramer",
  "Alfreda",
  "Lucia",
  "Cleo",
  "Karyn",
  "Lila",
  "Heath",
  "Newton",
  "Isabel",
  "Charity",
  "Mason",
  "Mccall",
  "Sara",
  "Olson",
  "Carey",
  "Peck",
  "Brianna",
  "Jerry",
  "Foreman",
  "Johnson",
  "Farley",
  "Rogers",
  "Ernestine",
  "Stevenson",
];

const MainGallery = () => {
  const isLoading = useLoading();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalActiveData, setActiveData] = useState(null);

  const [imageIndexShow, setImageIndexShow] = useState(0);
  const [preloader, setPreloader] = useState(false);

  const openModal = (active) => {
    document.body.style.overflow = "hidden";
    let array = active.galleryImages.map((item, i) => {
      return {
        id: i,
        original: item.image,
        thumbnail: item.image + "@8",
        loading: "lazy",
      };
    });

    setIsOpen(true);
    setActiveData({
      name: active.name,
      description: active.description,
      galleryImages: array,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveData(null);
    document.body.style.overflow = "auto";
  };

  const decrementImageIndexShow = () => {
    if (imageIndexShow > 0) {
      setImageIndexShow(imageIndexShow - 1);
      setPreloader(true);
    }
  };

  const incrementImageIndexShow = () => {
    if (imageIndexShow < modalActiveData.galleryImages.length - 1) {
      setImageIndexShow(imageIndexShow + 1);
      setPreloader(true);
    }
  };

  const resParams = useAxios(`/api/get_galleries`, "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["main_gallery"])}>
      <h3 className={classNames(styles["page_title"])}>Общая галерея игроков сервера</h3>
      <div className={classNames(styles["gallery_list"])}>
        {resParams.data.map((items, i) => (
          <div className={classNames(styles["one_container"])} key={i}>
            <div className={classNames(styles["wrapper_image"])}>
              <LazyLoadImage
                className={classNames(styles["img"])}
                alt={items.galleryImages[0].image + "@4"}
                effect="blur"
                src={items.galleryImages[0].image + "@4"}
                onClick={() => {
                  openModal(items);
                }}
              />
            </div>
            {/*<div className={classNames(styles["container_like"])}>*/}
            {/*  <div className={classNames(styles["likes"])}>*/}
            {/*    <button className={classNames(styles["click"], styles["like"])}>*/}
            {/*      <Particles text={<HeartSvgComponent height="20px" width="20px" color="#f4f4f4"/>} type="like"/>*/}
            {/*    </button>*/}
            {/*    <label className={classNames(styles["text"])}>{items.likes}</label>*/}
            {/*  </div>*/}
            {/*  <div className={classNames(styles["likes"])}>*/}
            {/*    <button className={classNames(styles["click"], styles["dislike"])}>*/}
            {/*      <Particles text={<HeartSvgComponent height="20px" width="20px" color="#f4f4f4"/>} type="dislike"/>*/}
            {/*    </button>*/}
            {/*    <label className={classNames(styles["text"])}>{items.dislikes}</label>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        ))}
      </div>

      <Modal
        className={classNames(styles["modal_main_gallery"])}
        overlayClassName={classNames(styles["overlay_main_modal"])}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <button onClick={closeModal} className={classNames(styles["close"])}>
          &#10008;
        </button>
        {!modalActiveData ? null : (
          <>
            <div className={classNames(styles["gallery_background"])}>
              <div className={classNames(styles["wrapper"])}>
                {/*<ImageGallery items={modalActiveData.galleryImages} lazyLoad="true" showIndex="true" />*/}
                <img
                  width="100%"
                  height="100%"
                  src={modalActiveData.galleryImages[imageIndexShow].original}
                  alt="none"
                  onLoad={() => setPreloader(false)}
                />
                {preloader && (
                  <div className={classNames(styles["preload_center"])}>
                    <Preload />
                  </div>
                )}
                <button
                  disabled={imageIndexShow === 0}
                  className={classNames(styles["btn_swipe"], styles["left"])}
                  onClick={decrementImageIndexShow}
                >
                  {"<"}
                </button>
                <button
                  disabled={imageIndexShow === modalActiveData.galleryImages.length - 1}
                  className={classNames(styles["btn_swipe"], styles["right"])}
                  onClick={incrementImageIndexShow}
                >
                  {">"}
                </button>
              </div>
              <div className={classNames(styles["navigator"])}>
                {modalActiveData.galleryImages.map((el, i) => (
                  <img
                    className={classNames(styles["prev"], { [styles["active"]]: el.id === imageIndexShow })}
                    key={i}
                    width="100%"
                    height="100%"
                    src={el.thumbnail}
                    alt="none"
                    onClick={() => {
                      setImageIndexShow(el.id);
                    }}
                  />
                ))}
              </div>
            </div>
            <div className={classNames(styles["container_description"])}>
              <div className={classNames(styles["container_builders"])}>
                <ul className={classNames(styles["ul_list"])}>
                  <li className={classNames(styles["li_authors_title"])}>Авторы:</li>
                  {USERS.slice(0, 64).map((oneUser, index) => (
                    <li className={classNames(styles["li_user"])} key={index}>
                      <img
                        className={classNames(styles["img_user"])}
                        src={`https://minotar.net/helm/${oneUser}/100`}
                        alt={oneUser}
                      />
                      <label className={classNames(styles["user_name"])}>{oneUser}</label>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={classNames(styles["description"])}>
                <h4 className={classNames(styles["title_name_image_list"])}>{modalActiveData.name}</h4>
                <p
                  className={classNames(styles["text"])}
                  dangerouslySetInnerHTML={{ __html: prepare(modalActiveData.description) }}
                />
                <div className={classNames(styles["block_tag"])}>
                  {TAG.map((tag, index) => (
                    <Tag tag={tag.trim()} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MainGallery;
