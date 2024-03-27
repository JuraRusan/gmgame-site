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

import styles from "./EditAddPost.module.scss";
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-advanced-cropper/dist/style.css";

const LOAD_AND_EDIT_WARN = "Внимание! При работе с файлами в большом разрешении могут наблюдаться задержки отрисовки изображения. Рекомендуется использовать изображения в умеренном качестве, в ином случае сохранять спокойствие."; // prettier-ignore

const ERROR_VALUE_ONE = "Имя должно содержать от 3 до 16 символов.";
const ERROR_VALUE_TWO = "Имя может содержать только буквы, цифры и символы подчеркивания.";
const ERROR_VALUE_TREE = "Тег может содержать от 3 до 24 символов.";
const ERROR_VALUE_FOUR = "Тег может содержать только буквы, цифры и символы подчеркивания.";

const MAX_IMAGES = 16;

const MIN_TITLE = 8;
const MAX_TITLE = 160;
const MIN_DESCRIPTION = 16;
const MAX_DESCRIPTION = 960;

// const ARR = [
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1485178575877-1a13bf489dfe.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1623432532623-f8f1347d954c.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/anna1991anna-0WDLQzK7u0E-unsplash.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1583853287541-6e82b3d5ea12.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1586083718719-019f9dc6ca94.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1604335079441-274c03ad99a1.jpg",
//   "https://advanced-cropper.github.io/react-advanced-cropper/img/images/photo-1527137342181-19aab11a8ee8.jpg",
// ];

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

const EditAddPost = (params) => {
  // const randomIndex = Math.floor(Math.random() * ARR.length);

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

  const [names, setNames] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [modalImageActive, setModalImageActive] = useState(0);

  const [imageRedactor, setImageRedactor] = useState(false);

  const [init, setInit] = useState(false);

  const resParams = useAxios(`/api/get_gallery/${id}`, "GET", {});

  const showMessage = (response) => {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
    } else {
      alert.error(response.error);
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

  const handleAddTag = (e) => {
    e.preventDefault();
    const tags = e.target.elements.tags.value.trim();
    if (tags.length < 3 || tags.length > 16) {
      setErrorMessageTags(ERROR_VALUE_TREE);
    } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(tags)) {
      setErrorMessageTags(ERROR_VALUE_FOUR);
    } else {
      setErrorMessageTags(null);
      setSelectedTags((prevTags) => [...prevTags, tags]);
      e.target.elements.tags.value = "";
    }
  };

  const handleText = (e, min, max, type) => {
    const text = e.target.value.trim();
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
    } else {
      if (text.length < min) {
        setErrorMessagePostDescription("Описание слишком короткое");
        setDescriptionLength(text.length);
      } else if (text.length > max) {
        setErrorMessagePostDescription("Описание слишком длинное");
        setDescriptionLength(text.length);
      } else {
        setErrorMessagePostDescription("");
        setDescriptionLength(text.length);
      }
    }
  };

  const handleOpenModalImageRedactor = (index) => {
    setImageRedactor(true);
    setModalImageActive(index);
  };

  const handleCloseModalImageRedactor = () => {
    setImageRedactor(false);
    setModalImageActive(0);
  };

  const handleSave = (url) => {
    if (images.length < 0) {
      alert.error("Пожалуйста, выберите хотя бы одно изображение!");
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

      for (let i = 0; i < selectedImage.length; i++) {
        formData.append("files", selectedImage[i]);
      }

      sendRequest("/api/upload_images", "POST", formData, { "Content-Type": "multipart/form-data" }).then(
        (response) => {
          if (response.length === 1) {
            alert.success("Изображение добавлено");
          } else {
            alert.success("Изображения добавлены");
          }
          // setImages((prevImages) => [...prevImages, ...response]);

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
          setImages(oldImages);
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

  if (resParams.loaded && id !== "new" && !init) {
    const jsonArray = resParams.data.galleryImages;
    const transformedArray = jsonArray.map((item) => item.image);

    setInit(true);
    setImages(transformedArray);
    setTitle(resParams.data.name);
    setNameLength(resParams.data.name.length);
    setDescription(resParams.data.description);
    setDescriptionLength(resParams.data.description.length);
  }

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  return (
    <div className={classNames(styles["container_add_edit"])}>
      <div className={classNames(styles["left"])}>
        <div className={classNames(styles["container_photos"])}>
          <div className={classNames(styles["margin"])}>
            {images.length >= MAX_IMAGES ? null : (
              <div className={classNames(styles["box_one"])}>
                <input
                  type="file"
                  id="load_image"
                  name="image/*"
                  onChange={(e) => {
                    handleImageChangeLoad(e);
                  }}
                  accept="image/png, image/webp, image/jpeg, image/avif"
                  multiple
                />
                <div className={classNames(styles["image_prev_box"])}>
                  <span className={classNames(styles["count"])}>
                    {images.length}/{MAX_IMAGES}
                  </span>
                  <label className={classNames(styles["expand_label"], styles["default_label"])} htmlFor="load_image">
                    <CameraAddSvgComponent width="100%" height="100%" color="#fff" />
                  </label>
                </div>
              </div>
            )}
            {images.map((image, index) => (
              <div className={classNames(styles["box_one"])} key={index}>
                <div
                  className={classNames(styles["image_prev_box"])}
                  onClick={() => {
                    handleOpenModalImageRedactor(index);
                  }}
                >
                  <span className={classNames(styles["count"])}>{index + 1}</span>
                  <img src={image} alt="none" className={classNames(styles["image_prev"])} />
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
        <div className={classNames(styles["interface_user_add"])}>
          <h4 className={classNames(styles["title"])}>Выбор и отображение строителей:</h4>
          <form onSubmit={handleAddName}>
            <ADD
              list="usersAdd"
              arr={testArrayUsers}
              placeholder="Ник игрока"
              name="name"
              onChange={(e) => {
                const name = e.target.value.trim();
                if (name.length < 3 || name.length > 16) {
                  setErrorMessage(ERROR_VALUE_ONE);
                } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
                  setErrorMessage(ERROR_VALUE_TWO);
                } else {
                  setErrorMessage(null);
                }
              }}
            />
            {errorMessage && <Notifications inf={errorMessage} type="error" />}
          </form>
          <div className={classNames(styles["users_block"])}>
            {names.map((name, index) => (
              <div className={classNames(styles["one_name"])} key={index}>
                <LazyLoadImage
                  wrapperClassName={classNames(styles["user_view_icon"])}
                  width="100%"
                  height="100%"
                  src={`https://minotar.net/helm/${name}/100`}
                  alt=""
                  effect="blur"
                />
                <label className={classNames(styles["user_view_name"])}>{name}</label>
                <button
                  className={classNames(styles["user_view_actions"])}
                  onClick={() => setNames((prevNames) => prevNames.filter((_, i) => i !== index))}
                >
                  &#10008;
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(styles["interface_tag_add"])}>
          <h4 className={classNames(styles["title"])}>Выбор и отображение тегов:</h4>
          <form onSubmit={handleAddTag}>
            <ADD
              list="tagsAdd"
              arr={testArrayTags}
              placeholder="Тег"
              name="tags"
              onChange={(e) => {
                const name = e.target.value.trim();
                if (name.length < 3 || name.length > 16) {
                  setErrorMessageTags(ERROR_VALUE_TREE);
                } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(name)) {
                  setErrorMessageTags(ERROR_VALUE_FOUR);
                } else {
                  setErrorMessageTags(null);
                }
              }}
            />
            {errorMessageTags && <Notifications inf={errorMessageTags} type="error" />}
          </form>
          <div className={classNames(styles["tags_block"])}>
            {selectedTags.map((el, index) => (
              <div className={classNames(styles["one_tag"])} key={index}>
                <label className={classNames(styles["tag_view_name"])}>{"#" + el.trim()}</label>
                <button
                  className={classNames(styles["tag_view_actions"])}
                  onClick={() => setSelectedTags((prevTags) => prevTags.filter((_, i) => i !== index))}
                >
                  &#10008;
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className={classNames(styles["text_block"])}>
          <div className={classNames(styles["title_check"])}>
            <h4 className={classNames(styles["title"])}>Название: </h4>
            <h4 className={classNames(styles["count"])}>
              <span
                className={classNames(styles["number"], {
                  [styles["green"]]: nameLength <= MAX_TITLE && nameLength >= MIN_TITLE,
                  [styles["red"]]: nameLength < MIN_TITLE || nameLength > MAX_TITLE,
                  [styles["white"]]: nameLength <= 0,
                })}
              >
                {nameLength}/{MAX_TITLE}
              </span>
            </h4>
          </div>
          <input
            className={classNames(styles["choice_text"])}
            type="text"
            defaultValue={title}
            onChange={(e) => {
              handleText(e, MIN_TITLE, MAX_TITLE, "title");
              setTitle(e.target.value);
            }}
          />
          <div className={classNames(styles["title_check"])}>
            <h4 className={classNames(styles["title"])}>Описание: </h4>
            <h4 className={classNames(styles["count"])}>
              <span
                className={classNames(styles["number"], {
                  [styles["green"]]: descriptionLength <= MAX_DESCRIPTION && descriptionLength >= MIN_DESCRIPTION,
                  [styles["red"]]: descriptionLength < MIN_DESCRIPTION || descriptionLength > MAX_DESCRIPTION,
                  [styles["white"]]: descriptionLength <= 0,
                })}
              >
                {descriptionLength}/{MAX_DESCRIPTION}
              </span>
            </h4>
          </div>
          <textarea
            className={classNames(styles["choice_text"])}
            rows="3"
            defaultValue={description}
            onChange={(e) => {
              handleText(e, MIN_DESCRIPTION, MAX_DESCRIPTION, "description");
              setDescription(e.target.value);
            }}
          />
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
                handleDelete(Number(id));
              }}
            />
          )}
        </div>
      </div>

      <ReactModal
        isOpen={imageRedactor}
        className={classNames(styles["modal_main_image_redactor"])}
        overlayClassName={classNames(styles["overlay_modal_image_redactor"])}
        ariaHideApp={false}
      >
        <div className={classNames(styles["box_image_redactor"])}>
          <ImageEditor
            image={images[modalImageActive]}
            onSave={handleImageChangeUpdate}
            onDelete={deleteImage}
            onClose={handleCloseModalImageRedactor}
          />
        </div>
      </ReactModal>
    </div>
  );
};

export default EditAddPost;
