import classNames from "classnames";
import React, {useState} from "react";
import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import {LazyLoadImage} from "react-lazy-load-image-component";
import {array} from "./GalleryArray";
// import HeartSvgComponent from "../../../bases/icons/heartSvg/HeartSvg";
// import Particles from "../../components/particles/Particles";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../custon-modules/Image-gallery.scss";

const MainGallery = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const filteredOneItem = array.filter(ids => ids.id === 1)

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className={classNames(styles["main_gallery"])}>
      <h3 className={classNames(styles["page_title"])}>Общая галерея игроков сервера</h3>
      <div className={classNames(styles["gallery_list"])}>
        {array.map((items, i) =>
          <div className={classNames(styles["one_container"])} key={i}>
            <div className={classNames(styles["wrapper_image"])}>
              <LazyLoadImage
                className={classNames(styles["img"])}
                alt={items.picturesView}
                effect="blur"
                src={items.picturesView}
                onClick={openModal}
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

// const AddSearch = ({list, placeholder, name, mapArray, onChange}) => {
//   return (
//     <>
//       <datalist id={list}>
//         {mapArray.map((e, i) =>
//           <option key={i} value={e}/>
//         )}
//       </datalist>
//       <input
//         name={name}
//         className={classNames(styles["search_input"])}
//         type="search"
//         list={list}
//         placeholder={placeholder}
//         onChange={onChange}
//       />
//       <button type="submit" className={classNames(styles["add_submit"])}>&#10003;</button>
//     </>
//   )
// }

// const [names, setNames] = useState([]);
// const [selectedTags, setSelectedTags] = useState([]);

// {/*<div className={classNames(styles["navigation_page"])}>*/}
// {/*  <h3 className={classNames(styles["navigation_title"])}>Навигация:</h3>*/}
// {/*  <select className={classNames(styles["sort_select"])}>*/}
// {/*    <option className={classNames(styles["sort_option"])}>Новые</option>*/}
// {/*    <option className={classNames(styles["sort_option"])}>Популярное</option>*/}
// {/*    <option className={classNames(styles["sort_option"])}>Старые</option>*/}
// {/*    <option className={classNames(styles["sort_option"])}>Случайные</option>*/}
// {/*  </select>*/}
// {/*  <form onSubmit={handleAddName}>*/}
// {/*    <AddSearch*/}
// {/*      name="name"*/}
// {/*      list="userList"*/}
// {/*      mapArray={testArrayUsers}*/}
// {/*      placeholder="Найти по игроку ..."*/}
// {/*    />*/}
// {/*  </form>*/}
// {/*  <div className={classNames(styles["preview_box"])}>*/}
// {/*    {names.map((name, index) => (*/}
// {/*      <div className={classNames(styles["selected_tag"])} key={index}>*/}
// {/*        <img className={classNames(styles["image"])} src={`https://minotar.net/helm/${name}/17`} alt=""/>*/}
// {/*        <label className={classNames(styles["name"])}>{name}</label>*/}
// {/*        <button*/}
// {/*          className={classNames(styles["actions"])}*/}
// {/*          onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}*/}
// {/*        >*/}
// {/*          &#10008;*/}
// {/*        </button>*/}
// {/*      </div>*/}
// {/*    ))}*/}
// {/*  </div>*/}
// {/*  <form onSubmit={handleAddTag}>*/}
// {/*    <AddSearch*/}
// {/*      name="tags"*/}
// {/*      list="tagList"*/}
// {/*      mapArray={testArrayTags}*/}
// {/*      placeholder="Найти по #tag ..."*/}
// {/*    />*/}
// {/*  </form>*/}
// {/*  <div className={classNames(styles["preview_box"])}>*/}
// {/*    {selectedTags.map((el, index) => (*/}
// {/*      <div className={classNames(styles["selected_tag"])} key={index}>*/}
// {/*        <label className={classNames(styles["name"])}>#{el}</label>*/}
// {/*        <button*/}
// {/*          className={classNames(styles["actions"])}*/}
// {/*          onClick={() => setSelectedTags(prevNames => prevNames.filter((_, i) => i !== index))}*/}
// {/*        >*/}
// {/*          &#10008;*/}
// {/*        </button>*/}
// {/*      </div>*/}
// {/*    ))}*/}
// {/*  </div>*/}
// {/*</div>*/}


// function handleAddName(e) {
//   e.preventDefault();
//   const name = e.target.elements.name.value.trim();
//   setNames(prevNames => [...prevNames, name.toLowerCase()]);
//   e.target.elements.name.value = "";
// }
//
// function handleAddTag(e) {
//   e.preventDefault();
//   const tags = e.target.elements.tags.value.trim();
//   setSelectedTags(prevTags => [...prevTags, tags.toLowerCase()]);
//   e.target.elements.tags.value = "";
// }