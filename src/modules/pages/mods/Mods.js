import React, {useEffect} from "react";
import AOS from "aos";
import {modsArray} from "./MapsArray";

import "./Mods.scss";
import "aos/dist/aos.css";

const Mods = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  return (
    <div className="main-mods" data-aos="zoom-in">
      <div className="box-mods" data-aos="zoom-in">
        <h3 className="h3-mods font-custom-2">Страница в разработке, ожидайте в ближайшем будущем. </h3>
        {/*<div className="mods-wrapper">*/}
        {/*  {modsArray.map((items, index) =>*/}
        {/*    <div className="card-mods">*/}
        {/*      <div className="one-mod-info">*/}
        {/*        <div className="img-mods-view">*/}
        {/*          <img src={items.img} alt={`${items.name} icons`}/>*/}
        {/*        </div>*/}
        {/*        <div className="text-mod-container">*/}
        {/*          <h4 className="name">{items.name}</h4>*/}
        {/*          <p className="info">{items.about}</p>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*      <div className="download-box">*/}
        {/*        {items.curseForgeBoolean.valueOf()*/}
        {/*          ?*/}
        {/*          <a className="link-download" href={items.hrefCurseForge} target="_blank" rel="noreferrer">Download CurseForge &#129133;</a>*/}
        {/*          :*/}
        {/*          <></>*/}
        {/*        }*/}
        {/*        {items.modrinthBoolean.valueOf()*/}
        {/*          ?*/}
        {/*          <a className="link-download" href={items.hrefModrinth} target="_blank" rel="noreferrer">Download Modrinth &#129133;</a>*/}
        {/*          :*/}
        {/*          <></>*/}
        {/*        }*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Mods;
