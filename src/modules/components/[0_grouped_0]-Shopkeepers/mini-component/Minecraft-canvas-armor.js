import React, { useRef, useEffect } from "react";

const IMAGES = {
  helmet:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAXklEQVQ4y2NgGJ4gODj4Pwjj4hPUPG3aNAzFxcXF/01NTf8Tpfn8+fMYCkHiBA0BGbB582acBoAwUQaAMLKfQZpAthNtALYAA2mk2ACiwgCXLUQZADMElwEENY9QAADYyG3b80w6vwAAAABJRU5ErkJggg==",
  chestplate:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAlUlEQVQ4jc2R0QnAIBBDXcpJHMVdXMRBHMmSQko8tT3/KgTUS95dbQi/WCmlbnXkwaG1dqvWugVsPSyiAJVSBgP2uFPPBGABgpEQhrW+BOScHyNHtV05HbwDIMbYIRQYJsB2hof+6W/gUh9Kp6KWQQXwEziuHd8F0HEV4gLYgO5dAHbla3PP8yvAQizsM6yQlVzh03UB3pVjRY93eCIAAAAASUVORK5CYII=",
  leggings:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAaElEQVQ4T2NgGHQgODj4Py5samr6n6Dm8+fPY+DNmzeDcXFxMX5DkA2AaULG06ZNI84AZA0gTJYBMMUgDHI60QbA2MgKcbEHIaDYCyADQAGFHt8gNjZxDAALcWwGYBPHagAyJiQ+OAAAtsi4pUqS5fUAAAAASUVORK5CYII=",
  boots:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAASElEQVQ4y2NgGH4gODj4PwzjE8Op+fz582Bsamr6n5A4yQZs3ryZOAPQFYLEQWJEGYBNIckGTJs2jTwDYIrwyYMMZxgFgwwAAMREe99ZR6oOAAAAAElFTkSuQmCC",
  wolf: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAGFBMVEUAAADW1tbS0tLNzc3JycnDw8O/v7+4uLgUSLXJAAAAAXRSTlMAQObYZgAAAChJREFUeNpjwAoMFaAMRwNWYTAj0IHNBMwohjMKGAgBByhmCABjYgAAiQwElsMzXC0AAAAASUVORK5CYII=",
  horse:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJ1BMVEUAAADp6enZ2dnOzs7FxcWampqVZSuAShVzQhOAMQBwKQA0IhZAGAB6D8V+AAAAAXRSTlMAQObYZgAAAExJREFUeNpjIASY4QxTKMOQOQBMswgaBkBldm9gYFAym5kcDeQxuYStrN4NEnbdPivb2QGoMHr7qu4QoFrW0Igz3aFAEe7dILABi3UAnwITmYYxj0IAAAAASUVORK5CYII=",

  helmet_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAOUlEQVQ4y2NgGN7ARFH0PwiTrXlqnDUYk2UIzIAiDz3yDQBpDjVVpMwbZGtmZ2H+j4yHoAGjgHgAAH9EJrbNZcEOAAAAAElFTkSuQmCC",
  chestplate_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAEUlEQVQ4EWMYBaNgFIwCKAAABBAAAVYyfTgAAAAASUVORK5CYII=",
  leggings_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAANUlEQVQ4y2NgGAXDEZgoiv4HYWLFMRRNjbP+X+Sh919RlPc/IXGsBoAUYTMAmzj1vTAKyAMAD6cluRieScUAAAAASUVORK5CYII=",
  boots_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAVElEQVQ4y2NgGAWjgJrARFH0P4xd5KH3X1GU9z+yHEgMxkeWgyuYGmcNxiCFoaaKGAaAxEByMDUohsBsQNaMrADGR1eDYgBMEYbzkACyGnzqhhgAAJntOuWFWA43AAAAAElFTkSuQmCC",
  wolf_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAhUExURQAAAMaIhLZ7dq1xbZl7YKBkYJZZVHleR4JISHE+PlwtMDgjcmcAAAABdFJOUwBA5thmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4wLWMwMDEgNzkuYzAyMDRiMiwgMjAyMy8wMi8wOS0wNjoyNjoxNCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyNC0xMS0xNVQxNzo0NTo1OSswMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjQtMTEtMTVUMTc6NDk6MzArMDI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjQtMTEtMTVUMTc6NDk6MzArMDI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIyIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iQWRvYmUgUkdCICgxOTk4KSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MGI0MzM2OC1iMGFlLTNjNDItYmVmZS1lOWEwZmJmNzY2ODAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTBiNDMzNjgtYjBhZS0zYzQyLWJlZmUtZTlhMGZiZjc2NjgwIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NTBiNDMzNjgtYjBhZS0zYzQyLWJlZmUtZTlhMGZiZjc2NjgwIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1MGI0MzM2OC1iMGFlLTNjNDItYmVmZS1lOWEwZmJmNzY2ODAiIHN0RXZ0OndoZW49IjIwMjQtMTEtMTVUMTc6NDU6NTkrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7jpiFqAAAAUUlEQVQYla3OQQrDMBBD0TczBhff/6wpbQrJIjGBQKGLaiME+kj8oodCHiFVriNhIKSMAjUba6WYdGi8+8mPLbZnoH0GLPrrWurQvj/pN/+3dvVwCVfn92PSAAAAAElFTkSuQmCC",
  horse_overlay:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAJ1BMVEUAAADp6enZ2dnOzs7FxcWampqVZSuAShVzQhOAMQBwKQA0IhZAGAB6D8V+AAAAAXRSTlMAQObYZgAAAAlwSFlzAAALEwAACxMBAJqcGAAABclpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LmMwMjA0YjIsIDIwMjMvMDIvMDktMDY6MjY6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjQtMTEtMTVUMTc6NTM6NTYrMDI6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDI0LTExLTE1VDE3OjU0OjU1KzAyOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0LTExLTE1VDE3OjU0OjU1KzAyOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplZDYxZjJjNy04YjcwLTM0NDYtOGQ5My1iYTg0YmY4MmQzMWMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3MWUxNGNlMS03YzU3LWU5NDctYmZmMy1jMDJhMTg0ZGYzYzUiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNmMyZDJlYy1iZGYyLWY2NGMtOGRhZC1hZTVmNTY4MDkwMGEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmQ2YzJkMmVjLWJkZjItZjY0Yy04ZGFkLWFlNWY1NjgwOTAwYSIgc3RFdnQ6d2hlbj0iMjAyNC0xMS0xNVQxNzo1Mzo1NiswMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI0LjQgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDplZDYxZjJjNy04YjcwLTM0NDYtOGQ5My1iYTg0YmY4MmQzMWMiIHN0RXZ0OndoZW49IjIwMjQtMTEtMTVUMTc6NTQ6NTUrMDI6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNC40IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4zt1OiAAAADUlEQVQYlWNgGAXIAAABEAABM8nxagAAAABJRU5ErkJggg==",
};

function ArmorPiece({ type, color, scale }) {
  const canvasRef = useRef(null);

  const assetManager = (() => {
    function AssetManager() {
      this.files = {};
    }

    AssetManager.prototype.loadUris = function (pArray) {
      return Promise.all(pArray.map(([name, uri]) => this._addFile(name, uri)));
    };

    AssetManager.prototype._addFile = function (name, src) {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          this.files[name] = {
            name,
            asset: img,
            width: img.width,
            height: img.height,
          };
          resolve(this.files[name]);
        };
        img.src = src;
      });
    };

    return AssetManager;
  })();

  const assets = new assetManager();

  const drawPiece = (canvas, ctx, name, assets, color) => {
    const file = assets.files[name];
    const overlayFile = assets.files[`${name}_overlay`];

    if (!file || !overlayFile) return;

    const { asset, width, height } = file;
    const { asset: overlay, width: oWidth, height: oHeight } = overlayFile;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.imageSmoothingEnabled = false;

    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(asset, 0, 0, width * scale, height * scale);

    ctx.globalCompositeOperation = "multiply";
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, width * scale, height * scale);

    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(asset, 0, 0, width * scale, height * scale);

    ctx.globalCompositeOperation = "source-over";
    ctx.drawImage(overlay, 0, 0, oWidth * scale, oHeight * scale);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Загружаем только необходимые ассеты
    const assetsToLoad = [
      [type, IMAGES[type]],
      [`${type}_overlay`, IMAGES[`${type}_overlay`]],
    ];

    assets.loadUris(assetsToLoad).then(() => {
      drawPiece(canvas, ctx, type, assets, color);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, color]);

  return (
    <div className="minecraft">
      <canvas ref={canvasRef} width={16 * scale} height={16 * scale} />
    </div>
  );
}

export default ArmorPiece;
