import classNames from "classnames";
import React, {useCallback, useEffect, useState} from "react";
// import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';
import {LazyLoadImage} from "react-lazy-load-image-component";
// import {array} from "./GalleryArray";
// import HeartSvgComponent from "../../../bases/icons/heartSvg/HeartSvg";
// import Particles from "../../components/particles/Particles";
import {sendRequest, useAxios} from "../../../DataProvider";
import useLoading from "../../loading/useLoading";
import Preload from "../../components/preloader/Preload";

import styles from "./Gallery.module.scss";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../custon-modules/Image-gallery.scss";

// function blobToBase64(blob) {
//   return new Promise((resolve, _) => {
//     const reader = new FileReader();
//     reader.onloadend = () => resolve(reader.result);
//     reader.readAsDataURL(blob);
//   });
// }

const MainGallery = () => {

  const isLoading = useLoading();

  // const [galleries, setGalleries] = useState([])
  const [activeId, setActiveId] = useState([])

  const resParams = useAxios(
    "/api/get_all_galleries",
    'GET',
    {}
  );

  // const getGalleries = useCallback(async () => {
  //   const request = await sendRequest('/api/get_galleries', "GET")
  //   if (request) {
  //     request.data.map(async (el) => {
  //       const imgs =  await Promise.all(JSON.parse(el.url).map(
  //         async (el) =>
  //           await blobToBase64(new Blob([el], { type: "image/jpeg" }))
  //       ));
  //
  //       console.log({imgs});
  //
  //       setGalleries(prev => [...prev,
  //         {
  //           authors: JSON.parse(el.authors),
  //           tags: JSON.parse(el.tags),
  //           url: imgs,
  //           title: el.title,
  //           description: el.description,
  //           id: el.id,
  //         }
  //         ])
  //
  //     });
  //
  //
  //   }
  // }, [])

  const [modalIsOpen, setIsOpen] = useState(false);

  // const filteredOneItem = array.filter(ids => ids.id === activeId)

  function openModal(id) {
    setIsOpen(true);
    setActiveId(id)
  }

  function closeModal() {
    setIsOpen(false);
  }

  // useEffect(() => {
  //   getGalleries()
  // }, [getGalleries])

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  // console.log(resParams.data.data)

  return (
    <div className={classNames(styles["main_gallery"])}>
      <h3 className={classNames(styles["page_title"])}>Общая галерея игроков сервера</h3>
      <div className={classNames(styles["gallery_list"])}>
        {resParams.data.data.map((items, i) => {
            if (items.check === false) {
              return null
            }
            return (
              <div className={classNames(styles["one_container"])} key={i}>
                <div className={classNames(styles["wrapper_image"])}>
                  <LazyLoadImage
                    className={classNames(styles["img"])}
                    alt="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
                    effect="blur"
                    src="https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg"
                    onClick={() => {
                      openModal(items.id)
                    }}
                  />
                </div>
              </div>
            )
          }
        )}
      </div>

      <Modal
        className={classNames(styles["modalGallery"])}
        overlayClassName={classNames(styles["overlayModal"])}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <button onClick={closeModal} className={classNames(styles["close"])}>&#10008;</button>
        {resParams.data.data.map((one, i) => {
            if (activeId !== one.id) {
              return false;
            }
            return (
              <>
                <div className={classNames(styles["galleryBackground"])} key={i}>
                  <div className={classNames(styles["galleryWrapper"])}>
                    {/*<ImageGallery items={one.picturesList} lazyLoad="true" showIndex="true"/>*/}
                  </div>
                </div>
                <div className={classNames(styles["containerDescription"])}>
                  <div className={classNames(styles["containerBuilders"])}>
                    <ul className={classNames(styles["ulList"])}>
                      <li className={classNames(styles["liAuthorsTitle"])}>Авторы:</li>
                      {JSON.parse(one?.authors).map((oneUser, index) =>
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
                    <h4 className={classNames(styles["titleNameImageList"])}>{one.title}</h4>
                    <p className={classNames(styles["textParagraph"])}>{one.description}</p>
                    <div className={classNames(styles["blockTag"])}>
                      {JSON.parse(one?.tags).map((tag, index) => (
                        <span className={classNames(styles["oneTag"])} key={index}>{"#" + tag.trim()}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )
          }
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