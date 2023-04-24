import React, {useEffect, useState} from "react";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import AOS from "aos";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {array} from "./GalleryArray";
import SvgHeart from "../../../bases/icons/SvgHeart";
import Particles from "../../components/particles/Particles";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../custon-modules/Image-gallery.scss";
import "aos/dist/aos.css";

const MainGallery = () => {

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

  const filteredOneItem = array.filter(ids => ids.id === 1) // тимчасова функція її треба потім видалити
  // console.log(filteredOneItem)

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
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="like"/>
                </button>
                <label className={styles["text"]}>{items.likes}</label>
              </div>
              <div className={styles["likes"]}>
                <button className={[styles["click"], styles["dislike"]].join(' ')}>
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="dislike"/>
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
        {filteredOneItem.map((one, i) =>
          <>
            <div className={styles["galleryBackground"]}>
              <div className={styles["galleryWrapper"]}>
                <ImageGallery items={one.picturesList} lazyLoad="true" showIndex="true"/>
              </div>
            </div>
            <div className={styles["containerDescription"]}>
              <div className={styles["containerBuilders"]}>
                <ul className={styles["ulList"]}>
                  <li className={styles["liAuthorsTitle"]}>Авторы:</li>
                  {one.users.map((oneUser, index) =>
                    <li className={styles["liUser"]}>
                      <img
                        className={styles["imgUser"]}
                        src={`https://minotar.net/helm/${oneUser}/100`}
                        alt={`https://minotar.net/helm/${oneUser}/100`}>
                      </img>
                      <label className={styles["userName"]}>{oneUser}</label>
                    </li>
                  )}
                </ul>
              </div>
              <div className={styles["description"]}>
                <h4 className={styles["titleNameImageList"]}>{one.name}</h4>
                <p className={styles["textParagraph"]}>{one.description}</p>
              </div>
            </div>
          </>
        )}
      </Modal>

    </div>
  );
};

export default MainGallery;
