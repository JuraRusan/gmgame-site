import React, {useState} from "react";
import ReactImagePickerEditor from 'react-image-picker-editor';
import {testArrayUsers} from "../../../pages/gallery/GalleryArray";

import styles from "./EditAddPost.module.scss";
import '../../../custon-modules/react-image-picker-editor-index.scss'

const EditAddPost = () => {

  const [errorMessage, setErrorMessage] = useState(null);
  const [countImage, setCountImage] = useState("1");
  const [names, setNames] = useState([]);

  const ErrorValueOne = "Имя должно содержать от 3 до 16 символов."
  const ErrorValueTwo = "Имя может содержать только буквы, цифры и символы подчеркивания."
  const optionsList = [
    {value: "1", label: "1 фото"},
    {value: "2", label: "2 фото"},
    {value: "3", label: "3 фото"},
    {value: "4", label: "4 фото"},
    {value: "5", label: "5 фото"},
    {value: "6", label: "6 фото"},
    {value: "7", label: "7 фото"},
    {value: "8", label: "8 фото"},
  ];

  function createDivs() {
    const divs = [];
    for (let i = 0; i < countImage; i++) {
      divs.push(
        <div className={styles["margin"]} key={i}>
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

  const config2 = {
    borderRadius: '5px',
    language: 'en',
    width: '280px',
    height: '200px',
    objectFit: 'contain',
    compressInitial: null,
  };

  // const initialImage = '/assets/images/8ptAya.webp';
  const initialImage = '';

  return (
    <div className={styles["containerAddEdit"]}>
      <div className={styles["left"]}>
        <div className={styles["postParameters"]}>
          <select
            className={styles["listParameter"]}
            value={countImage}
            onChange={(event) => setCountImage(event.target.value)}
          >
            {optionsList.map((el, i) => (
              <option key={i} value={el.value}>{el.label}</option>
            ))}
          </select>
        </div>
        <div className={styles["containerPhotos"]}>{createDivs()}</div>
      </div>
      <div className={styles["right"]}>
        <div className={styles["interfaceUserAdd"]}>
          <h4 className={styles["title"]}>Выбор и отображение строителей:</h4>

          <form onSubmit={handleAddName}>
            <datalist id="browsers">
              {testArrayUsers.map((e, i) =>
                <>
                  <option key={i} value={e}/>
                </>
              )}
            </datalist>
            <input
              name="name"
              list="browsers"
              className={styles["usersName"]}
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
            <button type="submit" className={styles["submit"]}>&#10003;</button>
            {errorMessage && <div className={styles["error"]}>{errorMessage}</div>}
          </form>

          <div className={styles["usersBlock"]}>
            {names.map((name, index) => (
              <div className={styles["one"]}>
                <img className={styles["userViewIcon"]} src={`https://minotar.net/helm/${name}/100`} alt=" "></img>
                <label className={styles["userViewName"]} key={index}>{name}</label>
                <button className={styles["userViewDel"]} onClick={() => setNames(prevNames => prevNames.filter((_, i) => i !== index))}>&#10008;</button>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditAddPost;


