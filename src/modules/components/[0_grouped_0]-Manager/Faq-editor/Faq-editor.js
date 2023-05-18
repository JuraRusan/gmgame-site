import classNames from "classnames";
import React, {useEffect, useState} from "react";
import AOS from "aos";
import {Editor, createEditor} from 'slate'
import {Slate, Editable, withReact, useSlate} from 'slate-react'

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";

const FaqEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const [editor] = useState(() => withReact(createEditor()))
  const initialValue = [
    {
      type: 'paragraph',
      children: [{text: 'A line of text in a paragraph.'}],
    },
  ]

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor)
    return marks ? marks[format] === true : false
  }

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format)

    if (isActive) {
      Editor.removeMark(editor, format)
    } else {
      Editor.addMark(editor, format, true)
    }
  }

  const MarkButton = ({format, icon}) => {
    const editor = useSlate()
    return (
      <button
        className={styles["btn"]}
        active={isMarkActive(editor, format)}
        onMouseDown={event => {
          event.preventDefault()
          toggleMark(editor, format)
        }}
      >{icon}
      </button>
    )
  }

  return (
    <div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">

      <h3>faq editor</h3>

      <Slate editor={editor} value={initialValue}>
        <MarkButton format="bold" icon="&#119809;"/>
        <MarkButton format="italic" icon="&#66310;"/>
        <MarkButton format="underline" icon="&#9089;"/>
        <Editable className={classNames(styles["editor"])}/>
      </Slate>

    </div>
  );
};

export default FaqEditor;