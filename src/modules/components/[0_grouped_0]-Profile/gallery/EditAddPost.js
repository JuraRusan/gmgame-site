import classNames from "classnames";
import React, {useState} from "react";
import ReactImagePickerEditor from 'react-image-picker-editor';
import {testArrayTags, testArrayUsers} from "../../../pages/gallery/GalleryArray";
import Notifications from "../../notifications/Notifications";
import Button from "../../button/Button";
import {LazyLoadImage} from "react-lazy-load-image-component";
import {sendRequest, useAxios} from "../../../../DataProvider";
import {useNavigate, useParams} from "react-router-dom";
import {useAlert} from "react-alert";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";

import styles from "./EditAddPost.module.scss";
import '../../../custon-modules/react-image-picker-editor-index.scss'
import 'react-lazy-load-image-component/src/effects/blur.css';

const LOAD_AND_EDIT_WARN = "Внимание! При работе с файлами в большом разрешении могут наблюдаться задержки отрисовки изображения. Рекомендуется использовать изображения в умеренном качестве, в ином случае сохранять спокойствие."
const ERROR_VALUE_ONE = "Имя должно содержать от 3 до 16 символов."
const ERROR_VALUE_TWO = "Имя может содержать только буквы, цифры и символы подчеркивания."
const ERROR_VALUE_TREE = "Тег может содержать от 3 до 24 символов."
const ERROR_VALUE_FOUR = "Тег может содержать только буквы, цифры и символы подчеркивания."

const ADD = ({list, arr, placeholder, name, onChange}) => {
  return (
    <div className={classNames(styles["add"])}>
      <datalist id={list}>
        {arr.map((e, i) =>
          <option key={i} value={e}/>
        )}
      </datalist>
      <input
        name={name}
        list={list}
        type="search"
        className={classNames(styles["choice_form"])}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button type="submit" className={classNames(styles["submit"])}>&#10003;</button>
    </div>
  )
}

const EditAddPost = (params) => {

  const isLoading = useLoading();

  const navigate = useNavigate();
  const {id} = useParams();

  const alert = useAlert();

  const config2 = {
    borderRadius: '5px',
    language: 'ru',
    width: '280px',
    height: '200px',
    objectFit: 'contain',
    compressInitial: null,
  };
  const initialImage = '';

  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageTags, setErrorMessageTags] = useState(null);
  const [errorMessagePostName, setErrorMessagePostName] = useState(null);
  const [errorMessagePostNameLength, setErrorMessagePostNameLength] = useState(null);
  const [errorMessagePostDescription, setErrorMessagePostDescription] = useState(null);
  const [errorMessagePostDescriptionLength, setErrorMessagePostDescriptionLength] = useState(null);

  const [init, setInit] = useState(false);

  const [countImage, setCountImage] = useState(1);
  const [names, setNames] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([])

  const handleAdd = () => {
    if (countImage < 16) {
      setCountImage(countImage + 1);
    }
  };

  const handleRemove = () => {
    if (countImage > 1) {
      setCountImage(countImage - 1);
    }
  };

  function createDivs() {
    const divs = [];
    for (let i = 0; i < countImage; i++) {
      divs.push(
        <div className={classNames(styles["margin"])} key={i}>
          <ReactImagePickerEditor
            config={config2}
            imageSrcProp={initialImage}
            imageChanged={(newDataImageUrl) => {
              if (!newDataImageUrl) {
                return
              }
              const copyData = [...images]
              const imageIndex = copyData.findIndex(el => el.index === i)

              if (imageIndex > -1) {
                copyData[imageIndex] = {...copyData[imageIndex], url: newDataImageUrl}
                setImages(copyData)
              } else {
                setImages(prev => [...prev, {
                  url: newDataImageUrl,
                  index: i
                }])
              }
            }}
          />
        </div>);
    }
    return divs;
  }

  function handleAddName(e) {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    if (name.length < 3 || name.length > 16) {
      setErrorMessage(ERROR_VALUE_ONE);
    } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      setErrorMessage(ERROR_VALUE_TWO);
    } else {
      setErrorMessage(null);
      setNames(prevNames => [...prevNames, name]);
      e.target.elements.name.value = "";
    }
  }

  function handleAddTag(e) {
    e.preventDefault();
    const tags = e.target.elements.tags.value.trim();
    if (tags.length < 3 || tags.length > 16) {
      setErrorMessageTags(ERROR_VALUE_TREE);
    } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(tags)) {
      setErrorMessageTags(ERROR_VALUE_FOUR);
    } else {
      setErrorMessageTags(null);
      setSelectedTags(prevTags => [...prevTags, tags]);
      e.target.elements.tags.value = "";
    }
  }

  function showMessage(response) {
    if (response.message) {
      alert.success(response.message);
      navigate(-1);
    } else {
      alert.error(response.error);
    }
  }

  function postRequest(url) {
    sendRequest(
      url,
      'POST',
      {
        authors: JSON.stringify(names),
        tags: JSON.stringify(selectedTags),
        title: title,
        description: description,
        url: images.map(el => el.url),
        check: false,
        galleryID: id === 'new' ? -1 : id
      }
    ).then(response => {
      showMessage(response);
    });
  }

  const addPost = () => {
    postRequest('/api/add_gallery');
  }

  const savePost = () => {
    postRequest('/api/edit_gallery');
  }

  const deletePost = () => {
    postRequest('/api/delete_gallery');
  }

  const resParams = useAxios(
    `/api/get_gallery/${id}`,
    'GET',
    {}
  );

  if (resParams.loading || isLoading) {
    return <Preload full={false}/>;
  }

  const data = resParams.data;

  if (resParams.loaded && id !== 'new' && !init) {
    setInit(true);
    setNames(JSON.parse(data.data.authors))
    setSelectedTags(JSON.parse(data.data.tags))
    setTitle(data.data.title)
    setDescription(data.data.description)
    // setImages(data.url)
  }

  // async function addPost(e) {
  //   e.preventDefault()
  //   const result = {
  //     authors: names,
  //     tags: selectedTags,
  //     title: title,
  //     description: description,
  //     url: images.map(el => el.url),
  //     galID: -1
  //   }
  //   console.log(result)
  //   const request = await axios.post('/api/add_gallery', result)
  //   // console.log(request)
  // }

  return (
    <div className={classNames(styles["container_add_edit"])}>
      <div className={classNames(styles["left"])}>
        <button onClick={() => navigate(-1)} className={classNames(styles["back"])}>{"<-- Показать весь список"}</button>
        <div className={classNames(styles["post_parameters"])}>
          <button className={classNames(styles["button_count"])} onClick={handleAdd}>+</button>
          <button className={classNames(styles["button_count"])} onClick={handleRemove}>-</button>
          <p className={classNames(styles["count_number"])}>{countImage}/16</p>
        </div>
        <div className={classNames(styles["container_photos"])}>{createDivs()}</div>
      </div>
      <div className={classNames(styles["right"])}>
        <div className={classNames(styles["warn_container"])}>
          <Notifications inf={LOAD_AND_EDIT_WARN} type="warn"/>
        </div>
        <div className={classNames(styles["interface_user_add"])}>
          <h4 className={classNames(styles["title"])}>Выбор и отображение строителей:</h4>
          <form onSubmit={handleAddName}>
            <ADD
              list="usersAdd"
              arr={testArrayUsers}
              placeholder="Ник игрока"
              name="name"
              onChange={e => {
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
            {errorMessage && <Notifications inf={errorMessage} type="error"/>}
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
                  onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}
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
              onChange={e => {
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
            {errorMessageTags && <Notifications inf={errorMessageTags} type="error"/>}
          </form>
          <div className={classNames(styles["tags_block"])}>
            {selectedTags.map((el, index) => (
              <div className={classNames(styles["one_tag"])} key={index}>
                <label className={classNames(styles["tag_view_name"])}>{"#" + el.trim()}</label>
                <button
                  className={classNames(styles["tag_view_actions"])}
                  onClick={() => setSelectedTags(prevTags => prevTags.filter((_, i) => i !== index))}
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
            {errorMessagePostName && <Notifications inf={errorMessagePostName} type="error"/>}
            <h4 className={classNames(styles["count"])}>{errorMessagePostNameLength}</h4>
          </div>
          <input
            value={title}
            className={classNames(styles["choice_text"])}
            type="text"
            name="postName"
            onChange={e => {
              const postName = e.target.value.trim();
              const minCount = 16
              const maxCount = 160
              if (postName.length < minCount) {
                setErrorMessagePostName("Название слишком короткое");
                setErrorMessagePostNameLength(<span>{postName.length}/{maxCount}</span>);
              } else if (postName.length > maxCount) {
                setErrorMessagePostName("Название слишком длинное");
                setErrorMessagePostNameLength(<label>{postName.length}/{maxCount}</label>);
              } else {
                setErrorMessagePostName(null);
                setErrorMessagePostNameLength(<span>{postName.length}/{maxCount}</span>);
              }
              setTitle(e.target.value)
            }}
          />
          <div className={classNames(styles["title_check"])}>
            <h4 className={classNames(styles["title"])}>Описание: </h4>
            {errorMessagePostDescription && <Notifications inf={errorMessagePostDescription} type="error"/>}
            <h4 className={classNames(styles["count"])}>{errorMessagePostDescriptionLength}</h4>
          </div>
          <textarea
            value={description}
            className={classNames(styles["choice_text"])}
            rows="3"
            name="postDescription"
            onChange={e => {
              const postName = e.target.value.trim();
              const minCount = 20
              const maxCount = 1000
              if (postName.length < minCount) {
                setErrorMessagePostDescription("Описание слишком короткое");
                setErrorMessagePostDescriptionLength(<span>{postName.length}/{maxCount}</span>);
              } else if (postName.length > maxCount) {
                setErrorMessagePostDescription("Описание слишком длинное");
                setErrorMessagePostDescriptionLength(<label>{postName.length}/{maxCount}</label>);
              } else {
                setErrorMessagePostDescription(null);
                setErrorMessagePostDescriptionLength(<span>{postName.length}/{maxCount}</span>);
              }
              setDescription(e.target.value)
            }}
          />
        </div>
        <div className={classNames(styles["wrapper_actions"])}>
          <Button view="submit" label="Сохранить" onClick={id === 'new' ? addPost : savePost}/>
          {id === 'new' ? null : <Button view="delete" label="Удалить" onClick={deletePost}/>}
        </div>
      </div>
    </div>
  );
};

export default EditAddPost;


