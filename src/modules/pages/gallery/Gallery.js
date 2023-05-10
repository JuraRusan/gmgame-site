import classNames from "classnames";
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

  const [filterTag, setFilterTag] = useState("");
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
    <div className={classNames(styles["mainGallery"])} data-aos="zoom-in">
      <input
        className={classNames(styles["searchInput"])}
        type="search"
        placeholder="Найти по #tag ..."
        onChange={(e) => setFilterTag(e.target.value.toLowerCase())}
      />
      <div className={classNames(styles["galleryList"])}>
        {array.filter((fil) => fil.tagNavigation.find(c => JSON.stringify(c).toLowerCase().includes(filterTag))).map((items, i) =>
          <div className={classNames(styles["oneContainer"])} data-aos="zoom-in" key={i}>
            <LazyLoadImage
              className={classNames(styles["imgClass"])}
              alt={items.picturesView}
              effect="blur"
              src={items.picturesView}
              onClick={openModal}
            />
            <div className={classNames(styles["containerLike"])}>
              <div className={classNames(styles["likes"])}>
                <button className={classNames(styles["click"], styles["like"])}>
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="like"/>
                </button>
                <label className={classNames(styles["text"])}>{items.likes}</label>
              </div>
              <div className={classNames(styles["likes"])}>
                <button className={classNames(styles["click"], styles["dislike"])}>
                  <Particles text={<SvgHeart height="16px" width="16px"/>} type="dislike"/>
                </button>
                <label className={classNames(styles["text"])}>{items.dislikes}</label>
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal
        className={classNames(styles["modalGallery"])}
        overlayClassName={classNames(styles["overlayModal"])}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal} className={classNames(styles["close"])}>&#10008;</button>
        {filteredOneItem.map((one, i) =>
          <>
            <div className={classNames(styles["galleryBackground"])}>
              <div className={classNames(styles["galleryWrapper"])}>
                <ImageGallery items={one.picturesList} lazyLoad="true" showIndex="true"/>
              </div>
            </div>
            <div className={classNames(styles["containerDescription"])}>
              <div className={classNames(styles["containerBuilders"])}>
                <ul className={classNames(styles["ulList"])}>
                  <li className={classNames(styles["liAuthorsTitle"])}>Авторы:</li>
                  {one.users.map((oneUser, index) =>
                    <li className={classNames(styles["liUser"])}>
                      <img
                        className={classNames(styles["imgUser"])}
                        src={`https://minotar.net/helm/${oneUser}/100`}
                        alt={`https://minotar.net/helm/${oneUser}/100`}>
                      </img>
                      <label className={classNames(styles["userName"])}>{oneUser}</label>
                    </li>
                  )}
                </ul>
              </div>
              <div className={classNames(styles["description"])}>
                <h4 className={classNames(styles["titleNameImageList"])}>{one.name}</h4>
                <p className={classNames(styles["textParagraph"])}>{one.description}</p>
                <div className={classNames(styles["blockTag"])}>
                  {one.tagNavigation.map((tag, index) => (
                    <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>
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
