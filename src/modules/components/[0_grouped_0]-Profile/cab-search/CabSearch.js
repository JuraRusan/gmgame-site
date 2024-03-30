import classNames from "classnames";
import React from "react";
import { Link } from "react-router-dom";
import AddSvgComponent from "../../../../bases/icons/addSvg/AddSvg";
import QuestionSvgComponent from "../../../../bases/icons/questionSvg/QuestionSvg";
import VisibleOffSvgComponent from "../../../../bases/icons/visibleOffSvg/VisibleOffSvg";
import VisibleOnSvgComponent from "../../../../bases/icons/visibleOnSvg/VisibleOnSvg";

import styles from "./CabSearch.module.scss";

const MiniSvg = ({ ico, onClick = () => {}, disabledIco = false }) => {
  return (
    <div className={classNames(styles["button_mini_wrapper"], disabledIco && styles["cursor"])} onClick={onClick}>
      <div className={classNames(styles["button_mini_box"], disabledIco && styles["disabled"])}>{ico}</div>
    </div>
  );
};

const CabSearch = ({
  onChange,
  name,
  count,
  to,
  href,
  onGalleryClick,
  gallery = false,
  galleryVisible = true,
  disabled = false,
}) => {
  return (
    <div className={classNames(styles["boxSearchWrapper"])}>
      <input className={classNames(styles["searchInput"])} onChange={onChange} type="search" placeholder="Поиск" />
      <h4 className={classNames(styles["numberListCount"])}>
        Количество {name} - {count}
      </h4>
      <div className={classNames(styles["box"])}>
        {gallery === false ? null : (
          <div onClick={onGalleryClick} className={classNames(styles["gallery_btn"])}>
            {galleryVisible === false ? (
              <MiniSvg disabledIco={disabled} ico={<VisibleOffSvgComponent width="100%" height="100%" />} />
            ) : (
              <MiniSvg disabledIco={disabled} ico={<VisibleOnSvgComponent width="100%" height="100%" />} />
            )}
          </div>
        )}
        <a href={href} target="_blank" rel="noreferrer" className={classNames(styles["link"])}>
          <MiniSvg ico={<QuestionSvgComponent width="85%" height="85%" />} />
        </a>
        <Link to={to} className={classNames(styles["margin_btn"])}>
          <MiniSvg ico={<AddSvgComponent width="100%" height="100%" />} />
        </Link>
      </div>
    </div>
  );
};

export default CabSearch;
