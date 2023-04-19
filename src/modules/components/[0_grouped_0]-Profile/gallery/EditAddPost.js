import React from "react";
import ReactImagePickerEditor from 'react-image-picker-editor';
import {testArrayUsers} from "../../../pages/gallery/GalleryArray";

import 'react-image-picker-editor/dist/index.css'

const EditAddPost = () => {

  const config2 = {
    borderRadius: '8px',
    language: 'en',
    width: '330px',
    height: '250px',
    objectFit: 'contain',
    compressInitial: null,
  };

  // const initialImage = '/assets/images/8ptAya.webp';
  const initialImage = '';

  return (
    <>
      <ReactImagePickerEditor config={config2} imageSrcProp={initialImage}/>
      <input list="browsers"/>
      <datalist id="browsers">
        {testArrayUsers.map((e, i) =>
          <>
            <option key={i} value={e}/>
          </>
        )}
      </datalist>
    </>
  );
};

export default EditAddPost;


