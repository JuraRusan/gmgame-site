import classNames from "classnames";
import React, {useEffect, useState} from "react";
import AOS from "aos";
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Warn from "../../components/warn/Warn.js";
import {DataBaseTexturePack} from "./texturePackDB.js";
import {debounce} from "lodash";

import 'react-lazy-load-image-component/src/effects/blur.css';
import styles from "./TexturePack.module.scss";
import "aos/dist/aos.css";

const TexturePack = () => {

  const [queryDataTexturePack, setQueryDataTexturePack] = useState("");

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const InformationFromTheAdministration = "Информация, размещенная на сайте, представлена исключительно для удобства просмотра и созерцания прекрасного, и не несет в себе цель распространять интеллектуальную собственность под именем GMGame. "

  return (
    <div className={classNames(styles["mainTexturePackContainer"])} data-aos="zoom-in">
      <div className={classNames(styles["blockText"])}>
        <h3 className={classNames(styles["texturePackTitleH3"])}>Официальный GMGame текстур пак</h3>
        <div className={classNames(styles["texturePackInformation"])}>
          <h4 className={classNames(styles["informationH4"])}>Для использования набора ресурсов необходимо установить модификацию Optifine или Sodium с дополнениями.</h4>
          <h4 className={classNames(styles["informationH4"])}>Без модов он работать не будет.
            <Link to={'/mods'} className={classNames(styles["linkModsPage"])}> Моды &#10148;</Link>
          </h4>
          <h4 className={classNames(styles["informationH4"])}>По вопросам обращаться к игрокам:
            <span>_Kerubifi_, SoftPanda3</span>
          </h4>
        </div>
        <div className={classNames(styles["downloadWrapper"])}>
          <a href="./texturePack" className={classNames(styles["downloadFiles"])} download="/static/download/Totem-Elytra-Body-1.19.zip">Скачать текстур пак &#10148;</a>
        </div>
        <div className={classNames(styles["warnWrapper"])}>
          <Warn inf={InformationFromTheAdministration}/>
        </div>
      </div>

      <input
        className={classNames(styles["searchInputTexturePack"])}
        type="search"
        placeholder="Найти..."
        onChange={debounce((e) => setQueryDataTexturePack(e.target.value.toLowerCase()), 350)}
      />

      {DataBaseTexturePack.filter((fil) => fil.main.toLowerCase().includes(queryDataTexturePack) || fil.info_item.toLowerCase().includes(queryDataTexturePack) || fil.variability_name.find(c => JSON.stringify(c).toLowerCase().includes(queryDataTexturePack))).map((tab, i) => (
        <div className={classNames(styles["cardItem"])} data-aos="zoom-in" key={i}>
          <div className={classNames(styles["columnCardOne"])}>
            <LazyLoadImage
              className={classNames(styles["icon"])}
              alt="none"
              effect="blur"
              src={`./site_assets/texture-pack/${tab.img}`}/>
          </div>
          <div className={classNames(styles["columnCardTwo"])}>
            <h3 className={classNames(styles["itemTitleName"])}>Предмет: {tab.main}
              <span className={classNames(styles["hoverEffect"])}>{tab.info_item}</span>
            </h3>
            <ul className={classNames(styles["listName"])}>
              {tab.variability_name.map((list, i) => (
                <li className={classNames(styles["listNameOne"])}>{list}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
};

export default TexturePack;
