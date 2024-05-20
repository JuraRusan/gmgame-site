import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useAxios } from "../../../DataProvider";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";
// import HeartSvgComponent from "../../../bases/icons/heartSvg/HeartSvg";
// import Particles from "../../components/particles/Particles";
import Tag from "../../components/[0_grouped_0]-Profile/gallery/tag/Tag";
import { prepare } from "../../components/text-editor/functions/Prepare";
import ImageSlider from "../../components/image-slider/Image-slider";
import Title from "../../components/title/Title";

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

  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);
  const [activeData, setActiveData] = useState(null);

  const openModal = (param) => {
    document.body.style.overflow = "hidden";

    const local = resParams.data.filter((item) => item.id === Number(param));
    let array = local[0].galleryImages.map((item, i) => {
      return {
        id: i,
        original: item.image,
        thumbnail: item.image + "@8",
        loading: "lazy",
      };
    });

    if (!activeData) {
      setActiveData({
        name: local[0].name,
        description: local[0].description,
        galleryImages: array,
      });
    }

    console.log(JSON.stringify(local[0].description));

    setIsOpen(true);
  };

  const closeModal = () => {
    setId(null);
    setIsOpen(false);
    setActiveData(null);
    document.body.style.overflow = "auto";

    const newUrl = `${window.location.origin}/gallery`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const resParams = useAxios(`/api/get_galleries`, "GET", {});

  useEffect(() => {
    const url = new URLSearchParams(window.location.search);
    setId(url.get("id"));
  }, []);

  useEffect(() => {
    if (resParams.loaded === true) {
      if (id !== null) {
        openModal(id);
      } else {
        setIsOpen(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, resParams]);

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["main_gallery"])}>
      <Title>Общая галерея игроков сервера</Title>
      <div className={classNames(styles["gallery_list"])}>
        {resParams.data.map((items, i) => (
          <div className={classNames(styles["one_container"])} key={i}>
            <div className={classNames(styles["wrapper_image"])}>
              <LazyLoadImage
                className={classNames(styles["image"])}
                alt={items.galleryImages[0].image}
                effect="blur"
                src={items.galleryImages[0].image}
                onClick={() => {
                  const newUrl = `${window.location.origin}/gallery?id=${items.id}`;
                  window.history.pushState({ path: newUrl }, "", newUrl);
                  setId(items.id);
                }}
              />
            </div>
            {/*<div className={classNames(styles["container_like"])}>*/}
            {/*  <div className={classNames(styles["likes"])}>*/}
            {/*    <button className={classNames(styles["click"], styles["like"])}>*/}
            {/*      <Particles text={<HeartSvgComponent height="20px" width="20px" color="#f4f4f4" />} type="like" />*/}
            {/*    </button>*/}
            {/*    <label className={classNames(styles["text"])}>{items.likes}</label>*/}
            {/*  </div>*/}
            {/*  <div className={classNames(styles["likes"])}>*/}
            {/*    <button className={classNames(styles["click"], styles["dislike"])}>*/}
            {/*      <Particles text={<HeartSvgComponent height="20px" width="20px" color="#f4f4f4" />} type="dislike" />*/}
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
        isOpen={isOpen}
        ariaHideApp={false}
      >
        <button onClick={closeModal} className={classNames(styles["close"])}>
          &#10008;
        </button>
        {!activeData ? null : (
          <>
            <div className={classNames(styles["gallery_background"])}>
              <ImageSlider array={activeData} />
            </div>
            <div className={classNames(styles["container_description"])}>
              <h4 className={classNames(styles["title"])}>{activeData.name}</h4>
              <div
                className={classNames(styles["description"])}
                dangerouslySetInnerHTML={{ __html: prepare(activeData.description) }}
              />
              <div className={classNames(styles["block_tag"])}>
                {TAG.map((tag, index) => (
                  <Tag tag={tag.trim()} key={index} />
                ))}
              </div>
              <div className={classNames(styles["builders"])}>
                <label className={classNames(styles["authors_title"])}>Авторы:</label>
                <div className={classNames(styles["user_list"])}>
                  {USERS.slice(0, 64).map((oneUser, index) => (
                    <div className={classNames(styles["one_user"])} key={index}>
                      <img
                        className={classNames(styles["ico"])}
                        src={`https://minotar.net/helm/${oneUser}/100`}
                        alt={oneUser}
                      />
                      <label className={classNames(styles["name"])}>{oneUser}</label>
                    </div>
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
