import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Preload from "../preloader/Preload";
import ExpandSvgComponent from "../../../bases/icons/expandSvg/ExpandSvg";
import CloseSvgComponent from "../../../bases/icons/closeSvg/CloseSvg";
import PlaySvgComponent from "../../../bases/icons/playSvg/PlaySvg";
import StopPlaySvgComponent from "../../../bases/icons/stopPlaySvg/StopPlaySvg";
import LeftSwipeSvgComponent from "../../../bases/icons/leftSwipeSvg/LeftSwipeSvg";
import RightSwipeSvgComponent from "../../../bases/icons/rightSwipeSvg/RightSwipeSvg";

import styles from "./Image-slider.module.scss";

const ImageSlider = ({ array }) => {
  const [imageIndexShow, setImageIndexShow] = useState(0);
  const [preloader, setPreloader] = useState(false);
  const [full, setFull] = useState(false);
  const [play, setPlay] = useState(false);
  const [timer, setTimer] = useState(3000);

  const decrementImageIndexShow = () => {
    if (imageIndexShow > 0) {
      setImageIndexShow(imageIndexShow - 1);
      setPreloader(true);
    }
  };

  const incrementImageIndexShow = () => {
    if (imageIndexShow < array.galleryImages.length - 1) {
      setImageIndexShow(imageIndexShow + 1);
      setPreloader(true);
    }
  };

  const openFullScreen = () => {
    const element = document.getElementById("slider_container");

    setFull(true);

    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE11 */
      element.msRequestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFull(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  const startPlay = () => {
    setPlay(true);
  };

  const stopPlay = () => {
    setPlay(false);
  };

  useEffect(() => {
    if (play) {
      const interval = setInterval(() => {
        setImageIndexShow((prevIndex) => (prevIndex + 1) % array.galleryImages.length);
        setPreloader(true);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [play, array.galleryImages.length]);

  useEffect(() => {
    let intervalId;
    if (play) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => (prevTimer === 0 ? 3000 : prevTimer - 10));
      }, 10);
    } else {
      clearInterval(intervalId);
      setTimer(3000);
    }
    return () => clearInterval(intervalId);
  }, [play]);

  return (
    <div className={classNames(styles["slider_container"])} id="slider_container">
      <div className={classNames(styles["image_wrapper"])}>
        <img
          className={classNames(styles["image"])}
          alt="none"
          src={array.galleryImages[imageIndexShow].original}
          onLoad={() => setPreloader(false)}
        />
      </div>
      {preloader && (
        <div className={classNames(styles["preload_center"])}>
          <Preload />
        </div>
      )}
      {!play ? (
        <button
          className={classNames(styles["btn_full_play"], styles["left_play"])}
          onClick={startPlay}
          disabled={array.galleryImages.length <= 1}
        >
          <PlaySvgComponent width="100%" height="100%" color="#fff" />
        </button>
      ) : (
        <button
          className={classNames(styles["btn_full_play"], styles["left_play"])}
          onClick={stopPlay}
          disabled={array.galleryImages.length <= 1}
        >
          <StopPlaySvgComponent width="100%" height="100%" color="#fff" />
        </button>
      )}

      {!full ? (
        <button className={classNames(styles["btn_full_play"], styles["right_full"])} onClick={openFullScreen}>
          <ExpandSvgComponent width="100%" height="100%" color="#fff" />
        </button>
      ) : (
        <button className={classNames(styles["btn_full_play"], styles["right_full"])} onClick={closeFullScreen}>
          <CloseSvgComponent width="100%" height="100%" color="#fff" />
        </button>
      )}
      <button
        disabled={imageIndexShow === 0}
        className={classNames(styles["btn_swipe"], styles["left_swipe"])}
        onClick={decrementImageIndexShow}
      >
        <LeftSwipeSvgComponent width="100%" height="100%" color="#fff" />
      </button>
      <button
        disabled={imageIndexShow === array.galleryImages.length - 1}
        className={classNames(styles["btn_swipe"], styles["right_swipe"])}
        onClick={incrementImageIndexShow}
      >
        <RightSwipeSvgComponent width="100%" height="100%" color="#fff" />
      </button>
      <div className={classNames(styles["navigator"])}>
        {array.galleryImages.map((el, i) => (
          <span
            className={classNames(styles["prev"], { [styles["active"]]: el.id === imageIndexShow })}
            key={i}
            onClick={() => {
              setPreloader(true);
              setImageIndexShow(el.id);
            }}
          />
        ))}
      </div>
      {!play ? null : <span className={classNames(styles["timer"])}>{timer} мс</span>}
    </div>
  );
};

export default ImageSlider;
