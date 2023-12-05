import classNames from "classnames";
import React, {useEffect, useState} from "react";
import Warn from "../../components/warn/Warn.js";
import {Link} from 'react-router-dom';
import {debounce} from "lodash";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {arrayTexturePackAll} from './texturePackDB';
import Modal from "react-modal";
import AlignCenterSvgComponent from "../../../bases/icons/formatAlignCenterSvg/AlignCenterSvg";
import AlignLeftSvgComponent from "../../../bases/icons/formatAlignLeftSvg/AlignLeftSvg";

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "./TexturePack.module.scss";

const TexturePack = () => {

  const [idActive, setIdActive] = useState(0);
  const [idShow, setIdShow] = useState(0);
  const [query, setQuery] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [activeFormat, setActiveFormat] = useState(1)
  const [copiedIndex, setCopiedIndex] = useState(null);

  function openModal(i) {
    setIsOpen(true);
    setIdShow(i)
  }

  function closeModal() {
    setIsOpen(false);
    setIdShow(0)
  }

  const handleCopyClick = (i, modal) => {
    navigator.clipboard.writeText(arrayTexturePackAll[idActive].items[idShow].variability_name[i]);
    setCopiedIndex(i);
    setTimeout(() => {
      setCopiedIndex(null);
      if (!modal) {
        setIdShow(0)
      }
    }, 3000);
  };

  return (
    <div className={classNames(styles["mainTexturePackContainer"])}>
      <div className={classNames(styles["blockText"])}>
        <h3 className={classNames(styles["texturePackTitleH3"])}>Официальный GMGame текстур пак</h3>
        <div className={classNames(styles["texturePackInformation"])}>
          <h4 className={classNames(styles["informationH4"])}>Для использования набора ресурсов необходимо установить
            модификацию Optifine или Sodium с дополнениями.</h4>
          <h4 className={classNames(styles["informationH4"])}>Без модов он работать не будет.
            <Link to={'/mods'} className={classNames(styles["linkModsPage"])}> Моды &#10148;</Link>
          </h4>
          <h4 className={classNames(styles["informationH4"])}>По вопросам обращаться к игрокам:
            <span>_Kerubifi_, SoftPanda3</span>
          </h4>
        </div>
        <div className={classNames(styles["downloadWrapper"])}>
          <a href="./texturePack" className={classNames(styles["downloadFiles"])}
             download="/static/download/Totem-Elytra-Body-1.19.zip">Скачать текстур пак &#10148;</a>
        </div>
        <div className={classNames(styles["warnWrapper"])}>
          <Warn
            inf="Информация, размещенная на сайте, представлена исключительно для удобства просмотра и созерцания прекрасного, и не несет в себе цель распространять интеллектуальную собственность под именем GMGame."/>
        </div>
      </div>
      <div className={classNames(styles["wrapperPack"])}>
        <div className={classNames(styles["fixedLeftMenuWrapper"])}>
          <div className={classNames(styles["wrapper_swipe"])}>
            <h5 className={classNames(styles["category"])}>Категории:</h5>
            {arrayTexturePackAll.map((el, i) =>
              <p
                className={classNames(styles["swipe"], {[styles["active"]]: idActive === i})}
                key={i}
                onClick={() => setIdActive(i)}
              >&#8226; {el.type_ru}</p>
            )}
          </div>
        </div>
        <div className={classNames(styles["previewPack"])}>
          <div className={classNames(styles["wrapperActions"])}>
            <input
              type="search"
              className={classNames(styles["search"])}
              placeholder="Найти..."
              onChange={debounce((e) => setQuery(e.target.value.toLowerCase()), 350)}
            />
            <button
              className={classNames(styles["type"], {[styles["active_btn"]]: activeFormat === 1})}
              onClick={() => {
                setActiveFormat(1)
              }}
            >
              <AlignLeftSvgComponent wight="100%" height="100%" color="#f4f4f4"/>
            </button>
            <button
              className={classNames(styles["type"], {[styles["active_btn"]]: activeFormat === 2})}
              onClick={() => {
                setActiveFormat(2)
              }}
            >
              <AlignCenterSvgComponent wight="100%" height="100%" color="#f4f4f4"/>
            </button>
          </div>
          <div className={classNames(styles["card_all"])}>
            {arrayTexturePackAll[idActive].items.map((item, i) => {
              return (
                !item.variability_name.find(c => JSON.stringify(c).toLowerCase().includes(query)) ? null :
                  activeFormat === 1
                    ?
                    <div
                      className={classNames(styles["one_card_1"])}
                      key={i}
                      onClick={() => {
                        openModal(i)
                      }}
                    >
                      <div className={classNames(styles["imageWrapper"])}>
                        <LazyLoadImage
                          className={classNames(styles["image"])}
                          alt="none"
                          effect="blur"
                          src={`./site_assets/texture-pack/${item.img_custom}`}
                        />
                      </div>
                      <div className={classNames(styles["textWrapper"])}>
                        <h2 className={classNames(styles["name"])}>{item.variability_name[0]}</h2>
                      </div>
                    </div>
                    :
                    <div
                      className={classNames(styles["one_card_2"])}
                      key={i}
                      onClick={() => {
                        setIdShow(i)
                      }}
                    >
                      <div className={classNames(styles["image_wrapper"])}>
                        <LazyLoadImage
                          className={classNames(styles["image"])}
                          alt="none"
                          effect="blur"
                          src={`./site_assets/minecraft-item/${item.main_item}.webp`}
                        />
                        <div className={classNames(styles["separator_box"])}>
                          <span className={classNames(styles["arrow"])}>&#10132;</span>
                        </div>
                        <LazyLoadImage
                          className={classNames(styles["image"])}
                          alt="none"
                          effect="blur"
                          src={`./site_assets/texture-pack/${item.img_custom}`}
                        />
                      </div>
                      <div className={classNames(styles["text_wrapper"])}>
                        {item.variability_name.map((el, index) => (
                          <span
                            key={index}
                            className={classNames(styles["name"], {[styles["copy"]]: copiedIndex === index && i === idShow})}
                            onClick={() => handleCopyClick(index, false)}
                          >{el}</span>
                        ))}
                      </div>
                    </div>
              )
            })}
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={classNames(styles["main_modal"])}
        overlayClassName={classNames(styles["modal_overlay"])}
        ariaHideApp={false}
      >
        <div className={classNames(styles["modal_wrapper_card"])}>
          <button className={classNames(styles["close"])} onClick={closeModal}>&#128500;</button>
          {arrayTexturePackAll[idActive].items.map((item, i) => {
            return (
              idShow !== i ? null :
                <div className={classNames(styles["view_card_full"])} key={i}>
                  <div className={classNames(styles["image_box"])}>
                    <LazyLoadImage
                      className={classNames(styles["image"])}
                      alt="none"
                      effect="blur"
                      src={`./site_assets/minecraft-item/${item.main_item}.webp`}
                    />
                    <div className={classNames(styles["separator_box"])}>
                      <span className={classNames(styles["arrow"])}>&#10132;</span>
                    </div>
                    <LazyLoadImage
                      className={classNames(styles["image"])}
                      alt="none"
                      effect="blur"
                      src={`./site_assets/texture-pack/${item.img_custom}`}
                    />
                  </div>
                  <div className={classNames(styles["text_wrapper"])}>
                    <h2 className={classNames(styles["label"])}>Для того чтобы изменить внешний вид своего предмета,
                      просто переименуйте предмет на наковальне, выбрав один из предложенных вариантов ниже.</h2>
                    <div className={classNames(styles["separator"])}>
                      <span className={classNames(styles["bullet"])}>&#8226;</span>
                      <span className={classNames(styles["bullet"])}>&#8226;</span>
                      <span className={classNames(styles["bullet"])}>&#8226;</span>
                      <span className={classNames(styles["bullet"])}>&#8226;</span>
                      <span className={classNames(styles["bullet"])}>&#8226;</span>
                    </div>
                    {item.variability_name.map((el, index) => (
                      <span
                        key={index}
                        className={classNames(styles["name"], {[styles["copy"]]: copiedIndex === index && i === idShow})}
                        onClick={() => handleCopyClick(index, true)}
                      >{el}</span>
                    ))}
                  </div>
                </div>
            )
          })}
        </div>
      </Modal>

    </div>
  );
};

export default TexturePack;