import classNames from "classnames";
import React, {useEffect, useState, useCallback, useRef, useMemo} from "react";
import AOS from "aos";
import {Editor, createEditor, Range, Transforms} from 'slate'
import {Slate, Editable, ReactEditor, withReact, useSlate, useSelected, useFocused} from 'slate-react'
import {withHistory} from 'slate-history'
import {sendRequest, useAxios} from '../../../../DataProvider';
import {useAlert} from "react-alert";
import Preload from "../../../components/preloader/Preload.js";
import ReactDOM from 'react-dom'
import BoldSvgComponent from "../../../../bases/icons/formatBoldSVG/BoldSVG";
import ItalicSvgComponent from "../../../../bases/icons/formatItalicSVG/ItalicSVG";
import UnderlineSvgComponent from "../../../../bases/icons/formatUnderlineSVG/UnderlineSVG";

import styles from "./Faq-editor.module.scss";
import "aos/dist/aos.css";

const insertMention = (editor, character) => {
  const mention = {
    type: 'mention', character, children: [{text: ''}],
  }
  Transforms.insertNodes(editor, mention)
  Transforms.move(editor)
}

const Element = (props) => {
  const {attributes, children, element} = props

  switch (element.type) {
    case 'mention':
      return <Mention {...props} />
    default:
      return <p {...attributes} className={classNames(styles["mainText"])}>{children}</p>
  }
}

const Mention = ({attributes, children, element}) => {
  // const selected = useSelected()
  // const focused = useFocused()
  // const style = {
  //   boxShadow: selected && focused ? '0 0 0 2px #ff0000' : 'none',
  // }
  // // See if our empty text child has any styling marks applied and apply those
  // if (element.children[0].bold) {
  //   style.fontWeight = 'bold'
  // }
  // if (element.children[0].italic) {
  //   style.fontStyle = 'italic'
  // }
  return (<span
    // {...attributes}
    // style={style}
    contentEditable={false}
    data-cy={`mention-${element.character.name.replace(' ', '-')}`}
    className={classNames(styles["pingSpan"])}
  >
      {element.character.type === 'user' ? '@' : '#'}{element.character.name}
    {children}
    </span>)
}

const FaqEditor = () => {

  useEffect(() => {
    AOS.init({duration: 1000});
  }, []);

  const withMentions = editor => {
    const {isInline, isVoid, markableVoid} = editor

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
  const editor = useMemo(() => withMentions(withReact(withHistory(createEditor()))), [])

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

  // if (!mentions.length) {
  //   setMentions([
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'},
  //     {name: 'prestig9110', type: 'user'},
  //     {name: 'pDalandis', type: 'user'},
  //     {name: 'pNiksa', type: 'user'},
  //     {name: 'pSoftPanda3', type: 'user'}
  //   ])
  // }

  const initialValue = useMemo(() => {
    if (contentValue) {
      return JSON.parse(contentValue)
    } else {
      return [{
        type: 'paragraph', children: [{text: 'Стартовый текст'}],
      },]
    }
  }, [contentValue])

  const chars = mentions.filter(c => c.name ? c.name.toLowerCase().startsWith(search.toLowerCase()) : false).slice(0, 10)

  useEffect(() => {
    if (target && chars.length > 0) {
      const el = ref.current
      const domRange = ReactEditor.toDOMRange(editor, target)
      const rect = domRange.getBoundingClientRect()
      el.style.top = `${rect.top + window.pageYOffset + 24}px`
      el.style.left = `${rect.left + window.pageXOffset}px`
    }
  }, [chars.length, editor, index, search, target])

  const onKeyDown = useCallback(event => {
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
  }, [chars, editor, index, target])

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

  const Leaf = ({attributes, children, leaf}) => {
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
    return (<button
      className={styles["btn"]}
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </button>)
  }

  const renderLeaf = useCallback(props => <Leaf {...props} />, []);

  const resParams = useAxios("/api/get_mentions", 'GET', {});

  const resFaq = useAxios("/api/get_faq", 'GET', {});

  const alert = useAlert();

  if (resParams.loading || resFaq.loading) {
    return <Preload/>
  }

  if (resParams.loaded && mentions.length === 0) {
    setMentions(resParams.data.data);
  }

  const saveFaq = () => {
    let payload = {
      id: faqId || -1, quest: question, answer: value, category: category, show: +show
    };
    sendRequest('/api/save_faq', 'POST', payload).then(response => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.id);
      } else {
        alert.error(response.error);
      }
    });
  }

  const publishFaq = () => {
    sendRequest('/api/publish_faq', 'POST', {}).then(response => {
      if (response.message) {
        alert.success(response.message);
        setFaqId(response.id);
      } else {
        alert.error(response.error);
      }
    });
  }

  function searchQuestion(value) {
    if (value === '') {
      setQuestion('');
      setCategory('');
      setShow(false);
      setFaqId('');
      return;
    }

    const quest = resFaq.data.filter(c => c.quest ? c.quest.toLowerCase().startsWith(value.toLowerCase()) : false)

    if (quest.length > 0) {
      setQuestion(quest[0].quest);
      setCategory(quest[0].category);
      setShow(quest[0].show);
      setFaqId(quest[0].id);

      let totalNodes = editor.children.length;

      for (let i = 0; i < totalNodes - 1; i++) {
        Transforms.removeNodes(editor, {
          at: [totalNodes - i - 1],
        });
      }

      // Add content to SlateJS
      for (const value of JSON.parse(quest[0].answer)) {
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

  return (<div className={classNames(styles["faqEditorWrapper"])} data-aos="zoom-in">

    <div className={classNames(styles["topLine"])}>
      <div className={classNames(styles["textInput"])}>
        <datalist id="categoryList">
          <option value="сервер"/>
          <option value="фарм"/>
          <option value="дс"/>
          {/* сюды должно приходить те что уже есть категории ну и так как импут можно сразу же новую добавить удобнее чем селект обычный */}
        </datalist>
        <input
          type="search"
          className={classNames(styles["inputStyle"])}
          onChange={(e) => searchQuestion(e.target.value)}
          placeholder="Поиск по вопросу"
        />
        <input
          type="text"
          className={classNames(styles["inputStyle"])}
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          placeholder="Вопрос?"
        />
        <input
          type="text"
          list="categoryList"
          className={classNames(styles["inputStyle"])}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="Категория"
        />
        <div className={classNames(styles["viewBox"])}>
          <input
            className={classNames(styles["checkboxView"])}
            type="checkbox"
            onChange={(e) => setShow(e.target.checked)}
            checked={show ? true : false}
          />
          <label className={classNames(styles["checkboxName"])}>Скрытие вопроса</label>
        </div>
      </div>
      <div className={classNames(styles["actionWrapper"])}>
        <button className={classNames(styles["actions"])} onClick={() => publishFaq()}>Опубликовать в Discord</button>
        <button className={classNames(styles["actions"])} onClick={() => saveFaq()}>Сохранить</button>
      </div>
    </div>

    <div className={classNames(styles["bottomLine"])}>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(op => 'set_selection' !== op.type)
          if (isAstChange) {
            const content = JSON.stringify(value)
            setValue(content);
          }

          const {selection} = editor

          if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection)
            const wordBefore = Editor.before(editor, start, {unit: 'word'})
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
        <div className={classNames(styles["wrapperBox"])}>
          <div className={classNames(styles["editingPanel"])}>
            <MarkButton format="bold" icon={<BoldSvgComponent wight="100%" height="100%" color="#fff"/>}/>
            <MarkButton format="italic" icon={<ItalicSvgComponent wight="100%" height="100%" color="#fff"/>}/>
            <MarkButton format="underline" icon={<UnderlineSvgComponent wight="100%" height="100%" color="#fff"/>}/>
          </div>
          <Editable
            className={classNames(styles["editor"])}
            renderLeaf={renderLeaf}
            onKeyDown={onKeyDown}
            renderElement={renderElement}
          />
          {target && chars.length > 0 && (ReactDOM.createPortal(
            <div
              ref={ref}
              className={classNames(styles["portal"])}
              data-cy="mentions-portal"
            >
              {chars.map((char, i) => (
                <label
                  className={classNames(styles["labelLine"])}
                  key={char.name}
                  onClick={() => {
                    Transforms.select(editor, target)
                    insertMention(editor, char)
                    setTarget(null)
                  }}
                  style={{
                    background: i === index ? '#e9f1ff' : 'transparent',
                    color: i === index ? '#011625' : '#f4f4f4'
                  }}
                >
                  {char.name}
                </label>
              ))}
            </div>, document.getElementById('root')))}
        </div>
      </Slate>
    </div>

  </div>);
};

export default FaqEditor;