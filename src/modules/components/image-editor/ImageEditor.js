import classNames from "classnames";
import React, {useRef, useState} from "react";
import {Cropper, CropperPreview} from 'react-advanced-cropper';
import {Slider} from "./local/slider/Slider";
import {Navigation} from "./local/navigation/Navigation";
import {AdjustableCropperBackground} from "./local/adjustable/AdjustableCropperBackground";
import {AdjustablePreviewBackground} from "./local/adjustable/AdjustablePreviewBackground";

import styles from "./ImageEditor.module.scss";
import 'react-advanced-cropper/dist/style.css'

const ADJUSTMENTS = {
  brightness: 0,
  hue: 0,
  saturation: 0,
  contrast: 0
}

const COORDINATES = {
  width: 0,
  height: 0,
  left: 0,
  top: 0
}

const ImageEditor = ({image, onSave, onDelete, onClose}) => {

  const cropperRef = useRef(null);
  const previewRef = useRef(null);

  const [src, setSrc] = useState(image);

  const [mode, setMode] = useState("crop");

  const [adjustments, setAdjustments] = useState(ADJUSTMENTS);
  const [coordinates, setCoordinates] = useState(COORDINATES);

  const cropperEnabled = mode === "crop";

  const changed = Object.values(adjustments).some((el) => Math.floor(el * 100));

  const defaultSize = ({imageSize, visibleArea}) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  }

  const onUpdate = () => {
    previewRef.current?.refresh();
  };

  const onChangeCoordinates = (cropper) => {
    setCoordinates(cropper.getCoordinates())
  };

  const onReset = () => {
    setMode("crop");
    setAdjustments(ADJUSTMENTS);
  };

  const onUpload = (blob) => {
    onReset();
    setMode("crop");
    setSrc(blob);
  };

  const onDownload = () => {
    if (cropperRef.current) {
      const newTab = window.open();
      if (newTab) {
        const customStyle = `
        <style>
          body {
            margin: 0;
            padding: 0;
          }
        </style>`

        newTab.document.head.innerHTML += customStyle
        newTab.document.body.innerHTML = `<img src="${cropperRef.current.getCanvas()?.toDataURL()}" alt="onDownload"/>`;
      }
    }
  };

  const onChangeValue = (value) => {
    if (mode in adjustments) {
      setAdjustments((previousValue) => ({
        ...previousValue,
        [mode]: value
      }));
    }
  };

  const activate = () => {
    onSave(cropperRef.current?.getCanvas())
  }

  return (
    <div className={classNames(styles["all_box_image_editor"])}>
      <div className={classNames(styles["wrapper"])}>
        <div className={classNames(styles["box_coordinates"])}>
          <label className={classNames(styles["coordinates"])}>W: {coordinates.width} px</label>
          <label className={classNames(styles["coordinates"])}>H: {coordinates.height} px</label>
        </div>
        <Cropper
          src={src}
          ref={cropperRef}
          defaultSize={defaultSize}
          backgroundComponent={AdjustableCropperBackground}
          backgroundProps={adjustments}
          onUpdate={onUpdate}
          onChange={onChangeCoordinates}
          stencilProps={{
            grid: true,
            movable: cropperEnabled,
            resizable: cropperEnabled,
            lines: cropperEnabled,
            handlers: cropperEnabled,
            overlayClassName: classNames(styles["cropper_overlay"], !cropperEnabled && "cropper_overlay_faded")
          }}
        />
        <CropperPreview
          className={classNames(styles["preview"])}
          ref={previewRef}
          cropper={cropperRef}
          backgroundComponent={AdjustablePreviewBackground}
          backgroundProps={adjustments}
        />
        <Navigation
          mode={mode}
          onChange={setMode}
          onSave={activate}
          onDelete={onDelete}
          onClose={onClose}
          onReset={onReset}
          onDisabled={changed}
          onDownload={onDownload}
          onUpload={onUpload}
        />
        {mode !== "crop" && <Slider value={adjustments[mode]} onChange={onChangeValue}/>}
      </div>
    </div>
  );
};

export default ImageEditor;