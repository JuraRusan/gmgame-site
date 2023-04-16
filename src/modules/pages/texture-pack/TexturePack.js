import React, {useEffect, useState, PureComponent} from "react";
import AOS from "aos";
import {Link} from 'react-router-dom';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Warn from "../../components/warn/Warn.js";
import {DataBaseTexturePack} from "./texturePackDB.js";

import 'react-lazy-load-image-component/src/effects/blur.css';
import "./TexturePack.scss";
import "aos/dist/aos.css";

const TexturePack = () => {

  const [queryDataTexturePack, setQueryDataTexturePack] = useState("");

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const InformationFromTheAdministration = "Информация, размещенная на сайте, представлена исключительно для удобства просмотра и созерцания прекрасного, и не несет в себе цель распространять интеллектуальную собственность под именем GMGame. "

  return (
    <div className="main-texture-pack" data-aos="zoom-in">
      <div className="block-title">
        <h3 className="texture-pack-title-h3 font-custom-2">Официальный GMGame текстур пак</h3>
        <div className="texture-info">
          <h4 className="info-h4"> Для использования набора ресурсов необходимо установить модификацию Optifine или
            Sodium с дополнениями. 
          </h4>
          <h4 className="info-h4">
            Без модов он работать не будет. <Link to={'/mods'} className="mods-link-page">Моды &#129133;</Link>
          </h4>
          <h4 className="info-h4">По вопросам обращаться к игрокам: <span>Каким игрокам???</span></h4>
        </div>
        <div className="download-box">
          <a href="./texturePack" className="download-files"
             download="/static/download/Totem-Elytra-Body-1.19.zip"> Скачать текстур
            пак &#129133;</a>
        </div>
        <div className="box-warn">
          <Warn inf={InformationFromTheAdministration}/>
        </div>
      </div>

      <input
        type="text"
        className="search-input-texture-pack"
        placeholder="Найти..."
        onChange={(e) => setQueryDataTexturePack(e.target.value.toLowerCase())}
      />

      {DataBaseTexturePack.filter((fil) => fil.main.toLowerCase().includes(queryDataTexturePack) || fil.info_item.toLowerCase().includes(queryDataTexturePack) || fil.variability_name.find(c => JSON.stringify(c).toLowerCase().includes(queryDataTexturePack))).map((tab, i) => (
        <div className="card-item" data-aos="zoom-in">
          <div className="colum-card-item1">
            <LazyLoadImage className="item-img" alt="none" effect="blur" src={`./site_assets/texture-pack/webp/${tab.img}`}/>
          </div>
          <div className="colum-card-item2">
            <h3 className="item-title-name">Предмет: {tab.main} <span className="hover-effect">{tab.info_item}</span> </h3>
            <ul className="list-name">
              {tab.variability_name.map((list, i) => (
                <li className="list-name-one">{list}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}

    </div>
  );
};

export default TexturePack;
