import classNames from "classnames";
import React, {useEffect, useState, useCallback, useRef, useMemo} from "react";
import AOS from "aos";
import {Editor, createEditor, Range, Transforms} from 'slate'
import {Slate, Editable, withReact, useSlate, useSelected, useFocused} from 'slate-react'
import { withHistory } from 'slate-history'
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import Preload from "../../../components/preloader/Preload.js";
import ReactDOM from 'react-dom'

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";

const insertMention = (editor, character) => {
  const mention = {
    type: 'mention',
    character,
    children: [{ text: '' }],
  }
  Transforms.insertNodes(editor, mention)
  Transforms.move(editor)
}

const Element = (props) => {
  const { attributes, children, element } = props

  switch (element.type) {
    case 'mention':
      return <Mention {...props} />
    default:
      return <p {...attributes}>{children}</p>
  }
}

const Mention = ({ attributes, children, element }) => {
  const selected = useSelected()
  const focused = useFocused()
  const style = {
    padding: '3px 3px 2px',
    margin: '0 1px',
    verticalAlign: 'baseline',
    display: 'inline-block',
    borderRadius: '4px',
    backgroundColor: '#ffeeba',
    color: '#212529',
    fontSize: '0.9em',
    boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
  }
  // See if our empty text child has any styling marks applied and apply those
  if (element.children[0].bold) {
    style.fontWeight = 'bold'
  }
  if (element.children[0].italic) {
    style.fontStyle = 'italic'
  }
  return (
    <span
      // {...attributes}
      contentEditable={false}
      data-cy={`mention-${element.character.name.replace(' ', '-')}`}
      style={style}
    >
      {element.character.type === 'user' ? '@' : '#'}{element.character.name}
      {children}
    </span>
  )
}

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
  const renderElement = useCallback(props => <Element {...props} />, [])
  const [value, setValue] = useState()
  const [mentions, setMentions] = useState([])
  const [question, setQuestion] = useState('')
  const [category, setCategory] = useState('')
  const [show, setShow] = useState(false)
  const [contentValue, setContent] = useState()
  const [faqId, setFaqId] = useState()

  const initialValue = useMemo(
    () => {
    if (contentValue) {
      return JSON.parse(contentValue)
     } else {
      return [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ]
    }
  }, [contentValue])

  const chars = mentions.filter(c => 
    c.name ? c.name.toLowerCase().startsWith(search.toLowerCase()) : false
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

  const resParams = useAxios(
    "/api/get_mentions",
    'GET',
    {}
  );

  const resFaq = useAxios(
    "/api/get_faq",
    'GET',
    {}
  );

  const alert = useAlert();

  if (resParams.loading || resFaq.loading) {
    return <Preload/>
  }

  if (resParams.loaded && mentions.length === 0) {
    setMentions(resParams.data.data);
  }

  const saveFaq = () => {
    let payload = {
      id: faqId || -1,
      quest: question,
      answer: value,
      category: category,
      show: +show
    };
    sendRequest(
      '/api/save_faq',
      'POST',
      payload
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.id);
      } else {
        alert.error(response.error);
      }
    });
  }

  const publishFaq = () => {
    sendRequest(
      '/api/publish_faq',
      'POST',
      {}
    ).then(response => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.id);
      } else {
        alert.error(response.error);
      }
    });
  }

  function searchQuestion (value) {
    if (value === '') {
      setQuestion('');
      setCategory('');
      setShow(false);
      setFaqId('');
      return;
    }

    const quest = resFaq.data.filter(c => 
      c.quest ? c.quest.toLowerCase().startsWith(value.toLowerCase()) : false
    )

    if (quest.length > 0) {
      setQuestion(quest[0].quest);
      setCategory(quest[0].category);
      setShow(quest[0].show);
      setFaqId(quest[0].id);

      let totalNodes = editor.children.length;

      for (let i = 0; i < totalNodes - 1; i++) {
        Transforms.removeNodes(editor, {
            at: [totalNodes-i-1],
        });
      }
    
      // Add content to SlateJS
      for (const value of JSON.parse(quest[0].answer) ) {
          Transforms.insertNodes(editor, value, {
              at: [editor.children.length],
          });
      }
    
      // Remove the last node that was leftover from before
      Transforms.removeNodes(editor, {
          at: [0],
      });
    }
  }

  return (
    <div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">

      <h3>faq editor</h3>

      <button onClick={() => saveFaq()}>Save</button>
      <input type="text" onChange={(e) => setQuestion(e.target.value)} value={question}/>
      <input type="text" onChange={(e) => setCategory(e.target.value)} value={category}/>
      <input type="checkbox" onChange={(e) => setShow(e.target.checked)} checked={show ? true : false}/>
      <input type="text" onChange={(e) => searchQuestion(e.target.value)}/>
      <button onClick={() => publishFaq()}>Опубликовать в DC</button>

      <Slate 
        editor={editor} 
        value={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            op => 'set_selection' !== op.type
          )
          if (isAstChange) {
            const content = JSON.stringify(value)
            setValue(content);
          }

          const { selection } = editor
  
          if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection)
            const wordBefore = Editor.before(editor, start, { unit: 'word' })
            const before = wordBefore && Editor.before(editor, wordBefore)
            const beforeRange = before && Editor.range(editor, before, start)
            const beforeText = beforeRange && Editor.string(editor, beforeRange)
            const beforeMatch = beforeText && (beforeText.match(/^@(\w|\W+?)$/) || beforeText.match(/^#(\w|\W+?)$/))
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
          <Editable 
            className={classNames(styles["editor"])} 
            renderLeaf={renderLeaf} 
            onKeyDown={onKeyDown}
            renderElement={renderElement}
          />
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
                    key={char.name}
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
                    {char.name}
                  </div>
                ))}
              </div>,
              document.getElementById('root')
            )
          )}
        </div>

      </Slate>

    </div>
  );
};

export default FaqEditor;