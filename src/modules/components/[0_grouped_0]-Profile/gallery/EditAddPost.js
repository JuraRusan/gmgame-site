import classNames from "classnames";
import React, {useEffect, useState} from "react";
import ReactImagePickerEditor from 'react-image-picker-editor';
import {testArrayTags, testArrayUsers} from "../../../pages/gallery/GalleryArray";
import Warn from "../../warn/Warn";

import styles from "./EditAddPost.module.scss";
import '../../../custon-modules/react-image-picker-editor-index.scss'

const EditAddPost = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [errorMessageTags, setErrorMessageTags] = useState(null);
  const [errorMessagePostName, setErrorMessagePostName] = useState(null);
  const [errorMessagePostNameLength, setErrorMessagePostNameLength] = useState(null);
  const [errorMessagePostDescription, setErrorMessagePostDescription] = useState(null);
  const [errorMessagePostDescriptionLength, setErrorMessagePostDescriptionLength] = useState(null);
  const [countImage, setCountImage] = useState("1");
  const [names, setNames] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [numberTextareaRow, setNumberTextareaRow] = useState(0);

  const loadAndEditWarn = "Внимание! При работе с файлами в большом разрешении могут наблюдаться задержки отрисовки изображения. Рекомендуется использовать изображения в умеренном качестве, в ином случае сохранять спокойствие."
  const ErrorValueOne = "Имя должно содержать от 3 до 16 символов."
  const ErrorValueTwo = "Имя может содержать только буквы, цифры и символы подчеркивания."
  const ErrorValueTree = "Тег может содержать от 3 до 24 символов. "
  const ErrorValueFour = "Тег может содержать только буквы, цифры и символы подчеркивания."

  const optionsList = [
    {value: "1", label: "1 фото"},
    {value: "2", label: "2 фото"},
    {value: "3", label: "3 фото"},
    {value: "4", label: "4 фото"},
    {value: "5", label: "5 фото"},
    {value: "6", label: "6 фото"},
    {value: "7", label: "7 фото"},
    {value: "8", label: "8 фото"},
    {value: "9", label: "9 фото"},
    {value: "10", label: "10 фото"},
    {value: "11", label: "11 фото"},
    {value: "12", label: "12 фото"},
    {value: "13", label: "13 фото"},
    {value: "14", label: "14 фото"},
    {value: "15", label: "15 фото"},
    {value: "16", label: "16 фото"},
  ];

  function createDivs() {
    const divs = [];
    for (let i = 0; i < countImage; i++) {
      divs.push(
        <div className={classNames(styles["margin"])} key={i}>
          <ReactImagePickerEditor config={config2} imageSrcProp={initialImage}/>
        </div>);
    }
    return divs;
  }

  function handleAddName(e) {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    if (name.length < 3 || name.length > 16) {
      setErrorMessage(<span>{ErrorValueOne}</span>);
    } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
      setErrorMessage(<span>{ErrorValueTwo}</span>);
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
      setErrorMessageTags(<span>{ErrorValueTree}</span>);
    } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(tags)) {
      setErrorMessageTags(<span>{ErrorValueFour}</span>);
    } else {
      setErrorMessageTags(null);
      setSelectedTags(prevTags => [...prevTags, tags]);
      e.target.elements.tags.value = "";
    }
  }

  const config2 = {
    borderRadius: '5px',
    language: 'ru',
    width: '280px',
    height: '200px',
    objectFit: 'contain',
    compressInitial: null,
  };

  // const initialImage = '/assets/images/8ptAya.webp';
  const initialImage = '';

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 960 && window.innerWidth < 1280) {
        setNumberTextareaRow(2);
      } else if (window.innerWidth >= 1280) {
        setNumberTextareaRow(4);
      } else {
        setNumberTextareaRow(6);
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={classNames(styles["containerAddEdit"])}>

      <div className={classNames(styles["left"])}>
        <div className={classNames(styles["postParameters"])}>
          <select
            className={classNames(styles["listParameter"])}
            value={countImage}
            onChange={(event) => setCountImage(event.target.value)}
          >
            {optionsList.map((el, i) => (
              <option key={i} value={el.value}>{el.label}</option>
            ))}
          </select>
        </div>
        <div className={classNames(styles["containerPhotos"])}>{createDivs()}</div>
      </div>

      <div className={classNames(styles["right"])}>

        <div className={classNames(styles["warmContainer"])}>
          <Warn inf={loadAndEditWarn}/>
        </div>

        <div className={classNames(styles["interfaceUserAdd"])}>
          <h4 className={classNames(styles["title"])}>Выбор и отображение строителей:</h4>
          <form onSubmit={handleAddName}>
            <div className={classNames(styles["add"])}>
              <datalist id="usersAdd">
                {testArrayUsers.map((e, i) =>
                  <option key={i} value={e}/>
                )}
              </datalist>
              <input
                name="name"
                list="usersAdd"
                className={classNames(styles["usersName"])}
                placeholder="Name"
                onChange={e => {
                  const name = e.target.value.trim();
                  if (name.length < 3 || name.length > 16) {
                    setErrorMessage(<span>{ErrorValueOne}</span>);
                  } else if (!/^[a-zA-Z0-9_]+$/.test(name)) {
                    setErrorMessage(<span>{ErrorValueTwo}</span>);
                  } else {
                    setErrorMessage(null);
                  }
                }}
              />
              <button type="submit" className={classNames(styles["submit"])}>&#10003;</button>
            </div>
            {errorMessage && <div className={classNames(styles["errorWrapper"])}>{errorMessage}</div>}
          </form>
          <div className={classNames(styles["usersBlock"])}>
            {names.map((name, index) => (
              <div className={classNames(styles["oneName"])} key={index}>
                <img className={classNames(styles["userViewIcon"])} src={`https://minotar.net/helm/${name}/100`} alt=" "></img>
                <label className={classNames(styles["userViewName"])}>{name}</label>
                <button className={classNames(styles["userViewDel"])} onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}>&#10008;</button>
              </div>
            ))}
          </div>
        </div>

        <div className={classNames(styles["interfaceTagAdd"])}>
          <h4 className={classNames(styles["title"])}>Выбор и отображение тегов:</h4>
          <form onSubmit={handleAddTag}>
            <div className={classNames(styles["add"])}>
              <datalist id="tagsAdd">
                {testArrayTags.map((e, i) =>
                  <option key={i} value={e}/>
                )}
              </datalist>
              <input
                name="tags"
                list="tagsAdd"
                className={classNames(styles["usersName"])}
                placeholder="#tags"
                onChange={e => {
                  const name = e.target.value.trim();
                  if (name.length < 3 || name.length > 16) {
                    setErrorMessageTags(<span>{ErrorValueTree}</span>);
                  } else if (!/^[а-яА-Яa-zA-Z0-9_]+$/.test(name)) {
                    setErrorMessageTags(<span>{ErrorValueFour}</span>);
                  } else {
                    setErrorMessageTags(null);
                  }
                }}
              />
              <button type="submit" className={classNames(styles["submit"])}>&#10003;</button>
            </div>
            {errorMessageTags && <div className={classNames(styles["errorWrapper"])}>{errorMessageTags}</div>}
          </form>
          <div className={classNames(styles["tagsBlock"])}>
            {selectedTags.map((el, index) => (
              <div className={classNames(styles["oneTag"])} key={index}>
                <label className={classNames(styles["tagViewName"])}>{"#" + el.trim()}</label>
                <button className={classNames(styles["tagViewDel"])} onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}>&#10008;</button>
              </div>
            ))}
          </div>
        </div>

        <div className={classNames(styles["fillTextBlock"])}>
          <div className={classNames(styles["titleCheck"])}>
            <h4 className={classNames(styles["title"])}>Название: {errorMessagePostName}</h4>
            <h4 className={classNames(styles["title"])}>{errorMessagePostNameLength}</h4>
          </div>
          <input
            className={classNames(styles["in"])}
            type="text"
            name="postName"
            onChange={e => {
              const postName = e.target.value.trim();
              const minCount = 16
              const maxCount = 160
              if (postName.length < minCount) {
                setErrorMessagePostName(<span className={styles["error"]}>Название слишком короткое</span>);
                setErrorMessagePostNameLength(<span className={styles["true"]}>{postName.length}/{maxCount}</span>);
              } else if (postName.length > maxCount) {
                setErrorMessagePostName(<span className={styles["error"]}>Название слишком длинное</span>);
                setErrorMessagePostNameLength(<span className={styles["error"]}>{postName.length}/{maxCount}</span>);
              } else {
                setErrorMessagePostName(null);
                setErrorMessagePostNameLength(<span className={styles["true"]}>{postName.length}/{maxCount}</span>);
              }
            }}
          />
          <div className={classNames(styles["titleCheck"])}>
            <h4 className={classNames(styles["title"])}>Описание: {errorMessagePostDescription}</h4>
            <h4 className={classNames(styles["title"])}>{errorMessagePostDescriptionLength}</h4>
          </div>
          <textarea
            className={classNames(styles["in"])}
            rows={numberTextareaRow}
            name="postDescription"
            onChange={e => {
              const postName = e.target.value.trim();
              const minCount = 20
              const maxCount = 1000
              if (postName.length < minCount) {
                setErrorMessagePostDescription(<span className={styles["error"]}>Описание слишком короткое</span>);
                setErrorMessagePostDescriptionLength(<span className={styles["true"]}>{postName.length}/{maxCount}</span>);
              } else if (postName.length > maxCount) {
                setErrorMessagePostDescription(<span className={styles["error"]}>Описание слишком длинное</span>);
                setErrorMessagePostDescriptionLength(<span className={styles["error"]}>{postName.length}/{maxCount}</span>);
              } else {
                setErrorMessagePostDescription(null);
                setErrorMessagePostDescriptionLength(<span className={styles["true"]}>{postName.length}/{maxCount}</span>);
              }
            }}
          />
        </div>

        <div className={classNames(styles["wrapperBtn"])}>
          <button className={classNames(styles["actions"], styles["save"])}>Сохранить</button>
          <button className={classNames(styles["actions"], styles["delete"])}>Удалить</button>
        </div>

      </div>

    </div>
  );
};

export default EditAddPost;


