import React from "react";

import "./One-item.scss";

import {LazyLoadImage} from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OneItem = (props) => {

  return (
    <div className="one-item-block" onClick={props.onClick}>
      <div className="photo-item">
        <span className="item-count font-custom-2">{props.item_count}</span>
        <LazyLoadImage
          effect="blur"
          className="image"
          src={`./site_assets/minecraft-item/png/${props.item_minecraft_name_id}.png`}
          width="100%"
          height="100%"
          alt="none"/>
      </div>
      <div className="item-text">
        <h3>{props.item_name_title}</h3>
        <p className="p-style-minecraft-id">minecraft:{props.item_minecraft_name_id}</p>
      </div>
    </div>
  );
};

export default OneItem;
