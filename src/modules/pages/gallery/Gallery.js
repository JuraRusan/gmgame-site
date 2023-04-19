import React, {useEffect, useState} from "react";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import AOS from "aos";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {array, picturesList} from "./GalleryArray";
import SvgHeart from "../../../bases/icons/SvgHeart";
import Particles from "../../components/particles/Particles";

import styles from "./Gallery.module.scss";
import "./Image-gallery.scss";
import "aos/dist/aos.css";

const Gallery = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={styles["mainGallery"]} data-aos="zoom-in">

      <div className={styles["galleryList"]}>
        {array.map((items, i) =>
          <div className={styles["oneContainer"]} data-aos="zoom-in" key={i}>
            <LazyLoadImage
              className={styles["imgClass"]}
              alt={items.picturesView}
              effect="blur"
              src={items.picturesView}
              onClick={openModal}
            />
            <div className={styles["containerLike"]}>

              <div className={styles["likes"]}>
                <button className={[styles["click"], styles["like"]].join(' ')}>
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="emoji"/>
                </button>
                <label className={styles["text"]}>{items.likes}</label>
              </div>

              <div className={styles["likes"]}>
                <button className={[styles["click"], styles["dislike"]].join(' ')}>
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="negative"/>
                </button>
                <label className={styles["text"]}>{items.dislikes}</label>
              </div>

            </div>
          </div>
        )}
      </div>

      <Modal
        className={styles["modalGallery"]}
        overlayClassName={styles["overlayModal"]}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal} className={styles["close"]}>&#10008;</button>
        <div className={styles["galleryWrapper"]}>
          <ImageGallery items={picturesList} lazyLoad="true" showIndex="true"/>
        </div>
        <div>

        </div>
      </Modal>

    </div>
  );
};

export default Gallery;
