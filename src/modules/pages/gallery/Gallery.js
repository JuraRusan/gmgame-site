import classNames from "classnames";
import React, {useEffect, useState} from "react";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import AOS from "aos";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {array, testArrayTags, testArrayUsers} from "./GalleryArray";
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
  const [names, setNames] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const filteredOneItem = array.filter(ids => ids.id === 1) // тимчасова функція її треба потім видалити
  // console.log(filteredOneItem)

  function handleAddName(e) {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    setNames(prevNames => [...prevNames, name.toLowerCase()]);
    e.target.elements.name.value = "";
  }

  function handleAddTag(e) {
    e.preventDefault();
    const tags = e.target.elements.tags.value.trim();
    setSelectedTags(prevTags => [...prevTags, tags.toLowerCase()]);
    e.target.elements.tags.value = "";
  }

  return (
    <div className={classNames(styles["mainGallery"])} data-aos="zoom-in">
      <h3 className={classNames(styles["mainGalleryTitle"])}>Общая галерея игроков сервера</h3>

      <div className={classNames(styles["wrapper"])}>
        <div className={classNames(styles["navigationGallery"])}>
          <h3 className={classNames(styles["navigationTitle"])}>Навигация:</h3>


          <form onSubmit={handleAddName}>
            <datalist id="userList">
              {testArrayUsers.map((e, i) =>
                <option key={i} value={e}/>
              )}
            </datalist>
            <input
              name="name"
              className={classNames(styles["searchInput"])}
              type="search"
              list="userList"
              placeholder="Найти по игроку ..."
            />
            <button type="submit" className={classNames(styles["addSubmit"])}>&#10003;</button>
          </form>
          {names.map((name, index) => (
            <div className={classNames(styles["previewSelected"])} key={index} data-aos="zoom-in">
              <img className={classNames(styles[""])} src={`https://minotar.net/helm/${name}/17`} alt=" "></img>
              <label className={classNames(styles[""])}>{name}</label>
              <button className={classNames(styles[""])} onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}>&#10008;</button>
            </div>
          ))}

          <form onSubmit={handleAddTag}>
            <datalist id="tagList">
              {testArrayTags.map((e, i) =>
                <option key={i} value={e}/>
              )}
            </datalist>
            <input
              name="tags"
              className={classNames(styles["searchInput"])}
              type="search"
              list="tagList"
              placeholder="Найти по #tag ..."
              // onChange={(e) => setFilterTag(e.target.value.toLowerCase())}
            />
            <button type="submit" className={classNames(styles["addSubmit"])}>&#10003;</button>
          </form>
          <div className={classNames(styles["previewWrapper"])}>
            {selectedTags.map((el, index) => (
              <div className={classNames(styles["selectedTag"])} key={index} data-aos="zoom-in">
                <label className={classNames(styles["tagName"])}>#{el}</label>
                <button className={classNames(styles["actions"])} onClick={() => setSelectedTags(prevNames => prevNames.filter((_, i) => i !== index))}>&#10008;</button>
              </div>
            ))}
          </div>


        </div>
        <div className={classNames(styles["galleryList"])}>
          {/* .filter((fil) => fil.users.some(c => JSON.stringify(c).toLowerCase().includes(JSON.stringify(names).toLowerCase())) || fil.tagNavigation.some(c => JSON.stringify(c).toLowerCase().includes(JSON.stringify(selectedTags).toLowerCase()))) */}
          {array.map((items, i) =>
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
            <div className={classNames(styles["galleryBackground"])} key={i}>
              <div className={classNames(styles["galleryWrapper"])}>
                <ImageGallery items={one.picturesList} lazyLoad="true" showIndex="true"/>
              </div>
            </div>
            <div className={classNames(styles["containerDescription"])}>
              <div className={classNames(styles["containerBuilders"])}>
                <ul className={classNames(styles["ulList"])}>
                  <li className={classNames(styles["liAuthorsTitle"])}>Авторы:</li>
                  {one.users.map((oneUser, index) =>
                    <li className={classNames(styles["liUser"])} key={index}>
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
