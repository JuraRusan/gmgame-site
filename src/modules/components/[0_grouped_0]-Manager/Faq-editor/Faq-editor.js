import classNames from "classnames";
import React, {useEffect, useRef} from "react";
import AOS from "aos";
import {Editor} from '@tinymce/tinymce-react';

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";

const FaqEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">редактор фака

      <Editor
        apiKey='yrozag0tsmzq254f5sk6cq5116rw2hx1k1u6b1nuticwvblo'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>Это начальное содержимое редактора.</p>"
        init={{
          height: 600,
          menubar: false,
          skin: 'tinymce-5-dark',
          content_css: 'tinymce-5-dark',
          language: 'ru',
          plugins: ['advlist', 'autolink', 'lists', 'charmap', 'preview', 'print', 'anchor', 'searchreplace', 'visualblocks', 'code', 'insertdatetime', 'media', 'table', 'code', 'wordcount', 'paste', 'link', 'image', 'imagetools', 'codesample'],
          toolbar: 'insertfile undo redo | blocks | bold italic underline strikethrough blockquote | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image | codesample',
          images_file_types: 'jpg,svg,webp',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>

    </div>
  );
};

export default FaqEditor;