import classNames from "classnames";
import React, {useEffect, useState, useCallback, useRef, useMemo} from "react";
import AOS from "aos";
import {Editor, createEditor, Range, Transforms} from 'slate'
import {Slate, Editable, withReact, useSlate} from 'slate-react'
import { withHistory } from 'slate-history'

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";
import ReactDOM from 'react-dom'

const FaqEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const withMentions = editor => {
    const { isInline, isVoid, markableVoid } = editor
  
    editor.isInline = element => {
      return element.type === 'mention' ? true : isInline(element)
    }
  
    editor.isVoid = element => {
      return element.type === 'mention' ? true : isVoid(element)
    }
  
    editor.markableVoid = element => {
      return element.type === 'mention' || markableVoid(element)
    }
  
    return editor
  }

  const ref = useRef(null)
  const editor = useMemo(
    () => withMentions(withReact(withHistory(createEditor()))),
    []
  )
  const [target, setTarget] = useState()
  const [index, setIndex] = useState(0)
  const [search, setSearch] = useState('')

  const initialValue = [
    {
      type: 'paragraph',
      children: [{text: 'A line of text in a paragraph.'}],
    },
  ]

  const CHARACTERS = [
    'Aayla Secura',
    'Adi Gallia',
    'Admiral Dodd Rancit',
    'Admiral Firmus Piett',
    'Admiral Gial Ackbar',
    'Admiral Ozzel',
    'Admiral Raddus',
    'Admiral Terrinald Screed',
    'Admiral Trench',
    'Admiral U.O. Statura',
    'Agen Kolar',
    'Agent Kallus',
    'Aiolin and Morit Astarte',
    'Aks Moe',
    'Almec',
    'Alton Kastle',
    'Amee',
    'AP-5',
    'Armitage Hux',
  ]

  const chars = CHARACTERS.filter(c =>
    c.toLowerCase().startsWith(search.toLowerCase())
  ).slice(0, 10)

  const onKeyDown = useCallback(
    event => {
      if (target && chars.length > 0) {
        switch (event.key) {
          case 'ArrowDown':
            event.preventDefault()
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1
            setIndex(prevIndex)
            break
          case 'ArrowUp':
            event.preventDefault()
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1
            setIndex(nextIndex)
            break
          case 'Tab':
          case 'Enter':
            event.preventDefault()
            Transforms.select(editor, target)
            insertMention(editor, chars[index])
            setTarget(null)
            break
          case 'Escape':
            event.preventDefault()
            setTarget(null)
            break
        }
      }
    },
    [chars, editor, index, target]
  )

  const insertMention = (editor, character) => {
    const mention = {
      type: 'mention',
      character,
      children: [{ text: '' }],
    }
    Transforms.insertNodes(editor, mention)
    Transforms.move(editor)
  }

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

  const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>
    }
  
    if (leaf.code) {
      children = <code>{children}</code>
    }
  
    if (leaf.italic) {
      children = <em>{children}</em>
    }
  
    if (leaf.underline) {
      children = <u>{children}</u>
    }
  
    return <span {...attributes}>{children}</span>
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

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  return (
    <div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">

      <h3>faq editor</h3>

      <Slate 
        editor={editor} 
        value={initialValue}
        onChange={() => {
          const { selection } = editor
  
          if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection)
            const wordBefore = Editor.before(editor, start, { unit: 'word' })
            const before = wordBefore && Editor.before(editor, wordBefore)
            const beforeRange = before && Editor.range(editor, before, start)
            const beforeText = beforeRange && Editor.string(editor, beforeRange)
            const beforeMatch = beforeText && beforeText.match(/^@(\w+)$/)
            const after = Editor.after(editor, start)
            const afterRange = Editor.range(editor, start, after)
            const afterText = Editor.string(editor, afterRange)
            const afterMatch = afterText.match(/^(\s|$)/)
  
            if (beforeMatch && afterMatch) {
              setTarget(beforeRange)
              setSearch(beforeMatch[1])
              setIndex(0)
              return
            }
          }
  
          setTarget(null)
        }}
      >
        <MarkButton format="bold" icon="&#119809;"/>
        <MarkButton format="italic" icon="&#66310;"/>
        <MarkButton format="underline" icon="&#9089;"/>
        <div className={classNames(styles["wrapperBox"])}>
          <Editable className={classNames(styles["editor"])} renderLeaf={renderLeaf} onKeyDown={onKeyDown}/>
          {target && chars.length > 0 && (
            ReactDOM.createPortal(
              <div
                ref={ref}
                className={classNames(styles["portal"])}
                // style={{
                //   top: '-9999px',
                //   left: '-9999px',
                //   position: 'absolute',
                //   zIndex: 'auto',
                //   padding: '3px',
                //   background: 'white',
                //   borderRadius: '4px',
                //   boxShadow: '0 1px 5px rgba(0,0,0,.2)',
                // }}
                data-cy="mentions-portal"
              >
                {chars.map((char, i) => (
                  <div
                    key={char}
                    onClick={() => {
                      Transforms.select(editor, target)
                      insertMention(editor, char)
                      setTarget(null)
                    }}
                    style={{
                      padding: '1px 3px',
                      borderRadius: '3px',
                      background: i === index ? '#B4D5FF' : 'transparent',
                    }}
                  >
                    {char}
                  </div>
                ))}
              </div>,
              document.body
            )
          )}
        </div>

      </Slate>

    </div>
  );
};

export default FaqEditor;