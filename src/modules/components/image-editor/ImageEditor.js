import classNames from "classnames";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Cropper, CropperPreview } from "react-advanced-cropper";
import Navigation from "./local/navigation/Navigation";
import AdjustableCropperBackground from "./local/adjustable/AdjustableCropperBackground";
import AdjustablePreviewBackground from "./local/adjustable/AdjustablePreviewBackground";

import styles from "./ImageEditor.module.scss";
import "react-advanced-cropper/dist/style.css";

const ADJUSTMENTS = {
  brightness: 0,
  hue: 0,
  saturation: 0,
  contrast: 0,
};

const COORDINATES = {
  width: 0,
  height: 0,
  left: 0,
  top: 0,
};

const ImageEditor = ({ image, onSave, onDelete, onClose }) => {
  const cropperRef = useRef(null);
  const previewRef = useRef(null);

  const [src, setSrc] = useState(image);

  const [mode, setMode] = useState("crop");
  const [newImage, setNewImage] = useState(false);

  const [defaultSizeState, setDefaultSizeState] = useState({ width: 0, height: 0 });

  const [imageChanged, setImageChanged] = useState(false);

  const [horizontalFlipped, setHorizontalFlipped] = useState(false);
  const [verticalFlipped, setVerticalFlipped] = useState(false);

  const [rotateChanged, setRotateChanged] = useState(false);
  const [rotateChangedCount, setRotateChangedCount] = useState(0);

  const [adjustments, setAdjustments] = useState(ADJUSTMENTS);
  const [coordinates, setCoordinates] = useState(COORDINATES);

  const cropperEnabled = mode === "crop";

  const changed = Object.values(adjustments).some((el) => Math.floor(el * 100));

  const defaultSize = ({ imageSize, visibleArea }) => {
    return {
      width: (visibleArea || imageSize).width,
      height: (visibleArea || imageSize).height,
    };
  };

  const flip = (horizontal, vertical) => () => {
    cropperRef.current?.flipImage(horizontal, vertical);

    if (!horizontal) {
      setHorizontalFlipped(!horizontalFlipped);
    }

    if (!vertical) {
      setVerticalFlipped(!verticalFlipped);
    }
  };

  const rotate = (angle) => () => {
    const newRotateChanged = rotateChangedCount + angle;
    setRotateChangedCount(newRotateChanged);

    cropperRef.current?.rotateImage(angle);
  };

  const center = () => {
    if (cropperRef.current) {
      cropperRef.current.setCoordinates(
        ({ coordinates, imageSize }) =>
          coordinates && {
            left: imageSize.width / 2 - coordinates.width / 2,
            top: imageSize.height / 2 - coordinates.height / 2,
          }
      );
    }
  };

  const maximize = () => {
    if (cropperRef.current) {
      cropperRef.current.setCoordinates(({ imageSize }) => imageSize);
    }
  };

  const onUpdate = () => {
    previewRef.current?.refresh();
  };

  const onChangeCoordinates = (cropper) => {
    setCoordinates(cropper.getCoordinates());
  };

  const onReset = () => {
    setMode("crop");
    setAdjustments(ADJUSTMENTS);
  };

  const onUpload = (blob) => {
    onReset();
    setMode("crop");
    setSrc(blob);
    setNewImage(true);
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
        </style>`;

        newTab.document.head.innerHTML += customStyle;
        newTab.document.body.innerHTML = `<img src="${cropperRef.current.getCanvas()?.toDataURL()}" alt="onDownload"/>`;
      }
    }
  };

  const onChangeValue = (value) => {
    if (mode in adjustments) {
      setAdjustments((previousValue) => ({
        ...previousValue,
        [mode]: value,
      }));
    }
  };

  const activate = () => {
    onSave(cropperRef.current?.getCanvas());
  };

  const resize =
    (width = 1, height = 1) =>
    () => {
      if (cropperRef.current) {
        const initialCoordinates = cropperRef.current.getCoordinates();

        if (initialCoordinates) {
          cropperRef.current.setCoordinates([
            ({ coordinates }) =>
              coordinates && {
                width: coordinates.width * width,
                height: coordinates.height * height,
              },
            ({ coordinates }) =>
              coordinates && {
                left: initialCoordinates.left + (initialCoordinates.width - coordinates.width) / 2,
                top: initialCoordinates.top + (initialCoordinates.height - coordinates.height) / 2,
              },
          ]);
        }
      }
    };

  useEffect(() => {
    if (
      !changed &&
      !newImage &&
      !horizontalFlipped &&
      !verticalFlipped &&
      !rotateChanged &&
      defaultSizeState.width === coordinates.width &&
      defaultSizeState.height === coordinates.height
    ) {
      setImageChanged(true);
    } else {
      setImageChanged(false);
    }
  }, [changed, newImage, horizontalFlipped, verticalFlipped, rotateChanged, defaultSizeState, coordinates]);

  useMemo(() => {
    const defaultSize = () => {
      const local = new Image();
      local.src = image;
      local.onload = () => {
        setDefaultSizeState({ width: local.width, height: local.height });
      };
    };

    defaultSize();
  }, [image]);

  useMemo(() => {
    if (rotateChangedCount === 360 || rotateChangedCount === -360) {
      setRotateChanged(false);
      setRotateChangedCount(0);
    } else if (rotateChangedCount === 0) {
      setRotateChanged(false);
    } else {
      setRotateChanged(true);
    }
  }, [rotateChangedCount]);

  return (
    <div className={classNames(styles["all_box_image_editor"])}>
      <div className={classNames(styles["wrapper_editor"])}>
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
            overlayClassName: classNames(styles["cropper_overlay"], !cropperEnabled && "cropper_overlay_faded"),
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
          flip={flip}
          rotate={rotate}
          center={center}
          resize={resize}
          value={adjustments[mode]}
          maximize={maximize}
          onChange={setMode}
          onChangeValue={onChangeValue}
          onSave={activate}
          onDelete={onDelete}
          onClose={onClose}
          onReset={onReset}
          onUpload={onUpload}
          onDownload={onDownload}
          onDisabledReset={changed}
          onDisabledSave={imageChanged}
        />
        <div className={classNames(styles["box_coordinates"])}>
          <label className={classNames(styles["coordinates"])}>W: {coordinates.width} px</label>
          <label className={classNames(styles["coordinates"])}>H: {coordinates.height} px</label>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
