import classNames from "classnames";
import React, { useMemo, useState } from "react";
import { testArrayTags, testArrayUsers } from "../../../pages/gallery/GalleryArray";
import Notifications from "../../notifications/Notifications";
import Button from "../../button/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sendRequest, useAxios } from "../../../../DataProvider";
import useLoading from "../../../loading/useLoading";
import { useAlert } from "react-alert";
import Preload from "../../preloader/Preload";
import ExpandSvgComponent from "../../../../bases/icons/expandSvg/ExpandSvg";
import CameraAddSvgComponent from "../../../../bases/icons/cameraAdd/CameraAddSvg";
import ReactModal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";
import ImageEditor from "../../image-editor/ImageEditor";
import BackButton from "../../back-button/BackButton";
import { Triangle } from "react-loader-spinner";
import Tag from "./tag/Tag";
import Name from "./name/Name";
import TextEditor from "../../text-editor/TextEditor";
import { DEFAULT_VALUE } from "../../text-editor/Default-value";
import { CalculatingTextLength } from "../../text-editor/functions/CalculatingTextLength";
import ConfirmModal from "../../../../common/confirm-modal/ConfirmModal";

import styles from "./EditAddPost.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-advanced-cropper/dist/style.css";

const LOAD_AND_EDIT_WARN =
  "Внимание! При работе с файлами в большом разрешении могут наблюдаться задержки отрисовки изображения. Рекомендуется использовать изображения в умеренном качестве, в ином случае сохранять спокойствие."; // prettier-ignore

const ERROR_VALUE_ONE = "Имя должно содержать от 3 до 16 символов.";
const ERROR_VALUE_TWO = "Имя может содержать только буквы, цифры и символы подчеркивания.";
const ERROR_VALUE_TREE = "Тег может содержать от 3 до 24 символов.";
const ERROR_VALUE_FOUR = "Тег может содержать только буквы, цифры и символы подчеркивания.";

const MAX_IMAGES = 16;
const MAX_IMAGES_SIZE = 10;

const MIN_BUILDERS = 0;
const MAX_BUILDERS = 64;
const MIN_TAGS = 0;
const MAX_TAGS = 128;

const MIN_TITLE = 12;
const MAX_TITLE = 255;
const MIN_DESCRIPTION = 24;
const MAX_DESCRIPTION = 65535;

const ADD = ({ list, arr, placeholder, name, onChange }) => {
  return (
    <div className={classNames(styles["add"])}>
      <datalist id={list}>
        {arr.map((e, i) => (
          <option key={i} value={e} />
        ))}
      </datalist>
      <input
        name={name}
        list={list}
        type="search"
        className={classNames(styles["choice_form"])}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button type="submit" className={classNames(styles["submit"])}>
        &#10003;
      </button>
    </div>
  );
};

const TITLE = ({ length, min, max, title, count = true, required = true }) => {
  return (
    <div className={classNames(styles["row_block_text"])}>
      <h4 className={classNames(styles["title"])}>
        {title}
        {required && <span className={classNames(styles["required"])}>*</span>}
      </h4>
      {count !== true ? null : (
        <h4 className={classNames(styles["count"])}>
          <span
            className={classNames(styles["number"], {
              [styles["green"]]: length <= max && length >= min,
              [styles["red"]]: length < min || length > max,
              [styles["white"]]: length <= 0,
            })}
          >
            {length}/{max}
          </span>
        </h4>
      )}
    </div>
  );
};

const EditAddPost = () => {
  const isLoading = useLoading();
  const alert = useAlert();

  const navigate = useNavigate();

  const { id } = useParams();

  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageTags, setErrorMessageTags] = useState(null);

  const [nameLength, setNameLength] = useState(0);
  const [errorMessagePostName, setErrorMessagePostName] = useState("");

  const [descriptionLength, setDescriptionLength] = useState(0);
  const [errorMessagePostDescription, setErrorMessagePostDescription] = useState("");

  const [images, setImages] = useState([]);

  const [imagesPreloader, setImagesPreloader] = useState(false);
  const [imagesPreloaderCount, setImagesPreloaderCount] = useState(0);

  const [names, setNames] = useState([]);
  const [tags, setTags] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState(DEFAULT_VALUE);

  const [modalImageActive, setModalImageActive] = useState(0);

  const [isConfirmActive, setIsConfirmActive] = useState(false);

  const [imageRedactor, setImageRedactor] = useState(false);
  const [preloader, setPreloader] = useState(false);

  const [init, setInit] = useState(false);

  let resParams;

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
    } else {
      alert.error(response.error);
    }
  };

  const handleName = (e) => {
    const name = e.target.value.trim();
    if (name.length < 3 || name.length > 16) {
      setErrorMessage(ERROR_VALUE_ONE);
    } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      setErrorMessage(ERROR_VALUE_TWO);
    } else {
      setErrorMessage(null);
    }
  };

  const handleAddName = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    if (name.length < 3 || name.length > 16) {
      setErrorMessage(ERROR_VALUE_ONE);
    } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      setErrorMessage(ERROR_VALUE_TWO);
    } else {
      setErrorMessage(null);
      setNames((prevNames) => [...prevNames, name]);
      e.target.elements.name.value = "";
    }
  };

  const handleTag = (e) => {
    const name = e.target.value.trim();
    if (name.length < 3 || name.length > 16) {
      setErrorMessageTags(ERROR_VALUE_TREE);
    } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(name)) {
      setErrorMessageTags(ERROR_VALUE_FOUR);
    } else {
      setErrorMessageTags(null);
    }
  };

  const handleAddTag = (e) => {
    e.preventDefault();
    const tags = e.target.elements.tags.value.trim();
    if (tags.length < 3 || tags.length > 16) {
      setErrorMessageTags(ERROR_VALUE_TREE);
    } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(tags)) {
      setErrorMessageTags(ERROR_VALUE_FOUR);
    } else {
      setErrorMessageTags(null);
      setTags((prevTags) => [...prevTags, tags]);
      e.target.elements.tags.value = "";
    }
  };

  const handleText = (e, min, max, type) => {
    const text = e.target.value;
    if (type === "title") {
      if (text.length < min) {
        setErrorMessagePostName("Название слишком короткое");
        setNameLength(text.length);
      } else if (text.length > max) {
        setErrorMessagePostName("Название слишком длинное");
        setNameLength(text.length);
      } else {
        setErrorMessagePostName("");
        setNameLength(text.length);
      }
    }
  };

  const handleOpenModalImageRedactor = (index) => {
    setPreloader(true);
    setImageRedactor(true);
    setModalImageActive(index);
    document.body.style.overflow = "hidden";
  };

  const handleCloseModalImageRedactor = () => {
    setImageRedactor(false);
    setModalImageActive(0);
    document.body.style.overflow = "auto";
  };

  const handleSave = (url) => {
    if (images.length < 0) {
      alert.error("Пожалуйста, выберите хотя бы одно изображение!");
      return;
    }

    if (imagesPreloader) {
      alert.error("Дождитесь загрузки изображений");
      return;
    }

    if (nameLength === 0) {
      alert.error("Укажите название");
      return;
    }

    if (errorMessagePostName !== "") {
      alert.error(errorMessagePostName);
      return;
    }

    if (descriptionLength === 0) {
      alert.error("Добавте описание");
      return;
    }

    if (errorMessagePostDescription !== "") {
      alert.error(errorMessagePostDescription);
      return;
    }

    const payloadAdd = {
      name: title,
      description: description,
      links: images,
    };

    const payloadEdit = {
      id: Number(id),
      name: title,
      description: description,
      links: images,
    };

    sendRequest(url, "POST", id === "new" ? payloadAdd : payloadEdit).then((response) => {
      showMessage(response);
    });
  };

  const handleDelete = (id) => {
    sendRequest("/api/delete_gallery", "POST", {
      id: id,
    }).then((response) => {
      showMessage(response);
    });
  };

  const deleteImage = () => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== modalImageActive));
    handleCloseModalImageRedactor();
  };

  const dataURItoBlob = (dataURI) => {
    let byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0) {
      byteString = atob(dataURI.split(",")[1]);
    } else {
      byteString = unescape(dataURI.split(",")[1]);
    }

    let mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];

    let unit = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      unit[i] = byteString.charCodeAt(i);
    }

    return new Blob([unit], { type: mimeString });
  };

  const handleImageChangeLoad = (e) => {
    let selectedImage = e.target.files;

    if (selectedImage) {
      const formData = new FormData();

      const calc =
        selectedImage.length > MAX_IMAGES - images.length ? MAX_IMAGES - images.length : selectedImage.length;

      setImagesPreloader(true);
      setImagesPreloaderCount(calc);

      for (let i = 0; i < calc; i++) {
        formData.append("files", selectedImage[i]);
      }

      sendRequest("/api/upload_images", "POST", formData, { "Content-Type": "multipart/form-data" }).then(
        (response) => {
          if (response.success === true) {
            if (response.data.length === 1) {
              alert.success("Изображение добавлено");
            } else {
              alert.success("Изображения добавлены");
            }
            setImages((prevImages) => [...response.data, ...prevImages]);
          } else {
            alert.error(response);
          }
          setImagesPreloaderCount(0);
          setImagesPreloader(false);
          selectedImage = e.target.value = "";
        }
      );
    }
  };

  const handleImageChangeUpdate = (canvas) => {
    if (canvas) {
      const formData = new FormData();

      const dataURL = canvas.toDataURL("image/webp", 1);
      let blob = dataURItoBlob(dataURL);

      formData.append("files", blob, "update/webp");

      sendRequest("/api/upload_images", "POST", formData, { "Content-Type": "multipart/form-data" }).then(
        (response) => {
          if (response.length === 1) {
            alert.success("Изображение обновлено");
          }
          const oldImages = [...images];

          oldImages[modalImageActive] = [...response];
          setImages(oldImages.flat(2));
        }
      );

      handleCloseModalImageRedactor();
    }
  };

  useMemo(() => {
    if (images.length > MAX_IMAGES) {
      const local = images.slice(0, MAX_IMAGES);
      setImages(local);
    }
  }, [images]);

  useMemo(() => {
    if (descriptionLength !== 0) {
      if (descriptionLength < MIN_DESCRIPTION) {
        setErrorMessagePostDescription("Описание слишком короткое");
      } else if (descriptionLength > MAX_DESCRIPTION) {
        setErrorMessagePostDescription("Описание слишком длинное");
      } else {
        setErrorMessagePostDescription("");
      }
    }
  }, [descriptionLength]);

  if (id === "new") {
    resParams = {};
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    resParams = useAxios(`/api/get_gallery/${id}`, "GET", {});
  }

  if (resParams.loaded && id !== "new" && !init) {
    setInit(true);

    if (resParams.data.error) {
      alert.error(resParams.data.error);
    } else {
      const jsonArray = resParams.data.galleryImages;
      const transformedArray = jsonArray.map((item) => item.image);

      let jsonData;
      let jsonDataLength;

      try {
        jsonDataLength = CalculatingTextLength(resParams.data.description);
        jsonData = resParams.data.description;
      } catch {
        jsonDataLength = resParams.data.description.length;
        jsonData = [
          {
            type: "paragraph",
            children: [{ text: resParams.data.description }],
          },
        ];
      }

      setImages(transformedArray);
      setTitle(resParams.data.name);
      setNameLength(resParams.data.name.length);
      setDescription(jsonData);
      setDescriptionLength(jsonDataLength);
    }
  }

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["container_add_edit"])}>
      <div className={classNames(styles["left"])}>
        <BackButton
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className={classNames(styles["container_photos"])}>
          <div className={classNames(styles["margin"])}>
            {images.length >= MAX_IMAGES ? null : (
              <div className={classNames(styles["box_one"])}>
                <input
                  type="file"
                  id="load_image"
                  onChange={(e) => {
                    handleImageChangeLoad(e);
                  }}
                  accept="image/png, image/webp, image/jpeg, image/avif"
                  multiple
                />
                <div className={classNames(styles["image_prev_box"])}>
                  <span className={classNames(styles["size"])}>{MAX_IMAGES_SIZE} MB</span>
                  <span className={classNames(styles["count"])}>
                    {images.length}/{MAX_IMAGES}
                  </span>
                  <label className={classNames(styles["expand_label"], styles["default_label"])} htmlFor="load_image">
                    <CameraAddSvgComponent width="100%" height="100%" color="#fff" />
                  </label>
                </div>
              </div>
            )}
            {Array.from({ length: imagesPreloaderCount }).map((_, index) => (
              <div key={index} className={classNames(styles["box_one"])}>
                <div className={classNames(styles["image_prev_box"])}>
                  <Triangle color="#e4007f" />
                </div>
              </div>
            ))}
            {images.map((image, index) => (
              <div className={classNames(styles["box_one"])} key={index}>
                <div
                  className={classNames(styles["image_prev_box"])}
                  onClick={() => {
                    handleOpenModalImageRedactor(index);
                  }}
                >
                  <span className={classNames(styles["count"])}>{index + 1}</span>
                  <LazyLoadImage
                    className={classNames(styles["image_prev"])}
                    alt="none"
                    effect="blur"
                    src={image + "@4"}
                  />
                  <label className={classNames(styles["expand_label"], styles["hover_label"])}>
                    <ExpandSvgComponent width="100%" height="100%" color="#fff" />
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={classNames(styles["right"])}>
        <div className={classNames(styles["warn_container"])}>
          <Notifications inf={LOAD_AND_EDIT_WARN} type="warn" />
        </div>
        <div className={classNames(styles["box_parameters"])}>
          <div className={classNames(styles["interface_user_add"])}>
            <TITLE
              title="Выбор и отображение строителей:"
              min={MIN_BUILDERS}
              max={MAX_BUILDERS}
              length={names.length}
              count={names.length > MAX_BUILDERS}
            />
            <form onSubmit={handleAddName}>
              <ADD
                list="usersAdd"
                arr={testArrayUsers}
                placeholder="Ник игрока"
                name="name"
                onChange={(e) => {
                  handleName(e);
                }}
              />
              {errorMessage && (
                <div className={classNames(styles["error_wrapper"])}>
                  <Notifications inf={errorMessage} type="error" />
                </div>
              )}
            </form>
            <div className={classNames(styles["users_block"])}>
              {names.map((el, index) => (
                <Name
                  key={index}
                  name={el}
                  onClick={() => setNames((prevNames) => prevNames.filter((_, i) => i !== index))}
                />
              ))}
            </div>
          </div>
          <div className={classNames(styles["interface_tag_add"])}>
            <TITLE
              title="Выбор и отображение тегов:"
              min={MIN_TAGS}
              max={MAX_TAGS}
              length={tags.length}
              count={tags.length > MAX_TAGS}
            />
            <form onSubmit={handleAddTag}>
              <ADD
                list="tagsAdd"
                arr={testArrayTags}
                placeholder="Тег"
                name="tags"
                onChange={(e) => {
                  handleTag(e);
                }}
              />
              {errorMessageTags && (
                <div className={classNames(styles["error_wrapper"])}>
                  <Notifications inf={errorMessageTags} type="error" />
                </div>
              )}
            </form>
            <div className={classNames(styles["tags_block"])}>
              {tags.map((el, index) => (
                <Tag
                  btn={true}
                  key={index}
                  tag={el.trim()}
                  onClick={() => setTags((prevTags) => prevTags.filter((_, i) => i !== index))}
                />
              ))}
            </div>
          </div>
          <div className={classNames(styles["text_block"])}>
            <TITLE title="Название:" min={MIN_TITLE} max={MAX_TITLE} length={nameLength} />
            <input
              className={classNames(styles["choice_text"])}
              type="text"
              defaultValue={title}
              onChange={(e) => {
                handleText(e, MIN_TITLE, MAX_TITLE, "title");
                setTitle(e.target.value);
              }}
            />
            <TITLE title="Описание:" min={MIN_DESCRIPTION} max={MAX_DESCRIPTION} length={descriptionLength} />
            <TextEditor value={description} setValue={setDescription} textLength={setDescriptionLength} />
          </div>
        </div>
        <div className={classNames(styles["wrapper_actions"])}>
          <Button
            view="submit"
            label="Сохранить"
            onClick={
              id === "new"
                ? () => {
                    handleSave("/api/create_gallery");
                  }
                : () => {
                    handleSave("/api/edit_gallery");
                  }
            }
          />
          {id === "new" ? null : (
            <Button
              view="delete"
              label="Удалить"
              onClick={() => {
                setIsConfirmActive(true);
              }}
            />
          )}
          <ConfirmModal
            open={isConfirmActive}
            close={() => setIsConfirmActive(false)}
            no={() => setIsConfirmActive(false)}
            yes={() => {
              handleDelete(Number(id));
            }}
          />
        </div>
      </div>

      <ReactModal
        isOpen={imageRedactor}
        className={classNames(styles["modal_main_image_redactor"])}
        overlayClassName={classNames(styles["overlay_modal_image_redactor"])}
        ariaHideApp={false}
      >
        <div className={classNames(styles["box_image_redactor"])}>
          <img
            className={classNames(styles["pre"])}
            src={images[modalImageActive]}
            alt="none"
            onLoad={() => setPreloader(false)}
          />
          {preloader === true ? (
            <Preload />
          ) : (
            <ImageEditor
              image={images[modalImageActive]}
              onSave={handleImageChangeUpdate}
              onDelete={deleteImage}
              onClose={handleCloseModalImageRedactor}
            />
          )}
        </div>
      </ReactModal>
    </div>
  );
};

export default EditAddPost;
