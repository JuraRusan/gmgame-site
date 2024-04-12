import React, { forwardRef, useRef, useLayoutEffect } from "react";
import classNames from "classnames";
import { mergeRefs } from "react-advanced-cropper";

import styles from "./AdjustableImage.module.scss";

const AdjustableImage = forwardRef(
  ({ src, className, crossOrigin, brightness = 0, saturation = 0, hue = 0, contrast = 0, style }, ref) => {
    const imageRef = useRef(null);
    const canvasRef = useRef(null);

    const drawImage = () => {
      const image = imageRef.current;
      const canvas = canvasRef.current;
      if (canvas && image && image.complete) {
        const ctx = canvas.getContext("2d");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;

        if (ctx) {
          ctx.filter = [
            `brightness(${100 + brightness * 100}%)`,
            `contrast(${100 + contrast * 100}%)`,
            `saturate(${100 + saturation * 100}%)`,
            `hue-rotate(${hue * 360}deg)`,
          ].join(" ");

          ctx.drawImage(image, 0, 0, image.naturalWidth, image.naturalHeight);
        }
      }
    };

    useLayoutEffect(() => {
      drawImage();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, brightness, saturation, hue, contrast]);

    return (
      <>
        <canvas
          key={`${src}-canvas`}
          ref={mergeRefs([ref, canvasRef])}
          className={classNames(className)}
          style={style}
        />
        {src ? (
          <img
            key={`${src}-img`}
            ref={imageRef}
            className={classNames(styles["image_source"])}
            src={src}
            crossOrigin={crossOrigin === true ? "anonymous" : crossOrigin || undefined}
            onLoad={drawImage}
            alt="none"
          />
        ) : null}
      </>
    );
  }
);

AdjustableImage.displayName = "AdjustableImage";

export default AdjustableImage;
