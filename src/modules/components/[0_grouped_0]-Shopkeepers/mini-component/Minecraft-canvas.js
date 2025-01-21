import React, { useRef, useEffect } from "react";

function CanvasRender({ images, color, width, height, type, background = "#1c1c1f" }) {
  const canvasRef = useRef(null);

  const assetManager = (() => {
    function AssetManager() {
      this.files = [];
    }

    AssetManager.prototype.loadUris = function (uriArray) {
      return Promise.all(uriArray.map((uri) => this._addFile(uri)));
    };

    AssetManager.prototype._addFile = function (src) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.files.push({
            asset: img,
            width: img.width,
            height: img.height,
          });
          resolve(img);
        };
        img.src = src;
      });
    };

    return AssetManager;
  })();

  const assets = new assetManager();

  const drawPieceColored = (canvas, ctx, assets) => {
    const data = assets.files;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.imageSmoothingEnabled = false;

    // зображение для покраски
    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(data[0].asset, 0, 0, width, height);

    // цвет
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width, height);

    // обрезка
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(data[0].asset, 0, 0, width, height);
  };

  const drawPieceCrop = (canvas, ctx, assets) => {
    const data = assets.files;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.imageSmoothingEnabled = false;

    // цвет
    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, width, height);

    // обрезка
    ctx.globalCompositeOperation = "destination-out";
    ctx.drawImage(data[0].asset, 0, 0, width, height);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (type === "colored") {
      assets.loadUris(images).then(() => {
        drawPieceColored(canvas, ctx, assets);
      });
    }
    if (type === "crop") {
      assets.loadUris(images).then(() => {
        drawPieceCrop(canvas, ctx, assets);
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return <canvas ref={canvasRef} width={width} height={height} />;
}

export default CanvasRender;
