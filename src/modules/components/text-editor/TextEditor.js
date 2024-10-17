import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Editable, ReactEditor, Slate, useSlate, withReact } from "slate-react";
import { createEditor, Editor, Element as SlateElement, Range, Transforms } from "slate";
import { withHistory } from "slate-history";
import classNames from "classnames";
import BoldSvgComponent from "../../../bases/icons/formatBoldSvg/BoldSvg";
import ItalicSvgComponent from "../../../bases/icons/formatItalicSvg/ItalicSvg";
import UnderlineSvgComponent from "../../../bases/icons/formatUnderlineSvg/UnderlineSvg";
import CodeSvgComponent from "../../../bases/icons/formatCodeSvg/CodeSvg";
import QuoteSvgComponent from "../../../bases/icons/formatQuoteSvg/QuoteSvg";
import ListNumberedSvgComponent from "../../../bases/icons/formatListNumberedSvg/ListNumberedSvg";
import ListBulletedSvgComponent from "../../../bases/icons/formatListBulletedSvg/ListBulletedSvg";
import AlignLeftSvgComponent from "../../../bases/icons/formatAlignLeftSvg/AlignLeftSvg";
import AlignCenterSvgComponent from "../../../bases/icons/formatAlignCenterSvg/AlignCenterSvg";
import AlignRightSvgComponent from "../../../bases/icons/formatAlignRightSvg/AlignRightSvg";
import AlignJustifySvgComponent from "../../../bases/icons/formatAlignJustifySvg/AlignJustifySvg";
import HeadingOneSvgComponent from "../../../bases/icons/formatHeadingOneSvg/HeadingOneSvg";
import HeadingTwoSvgComponent from "../../../bases/icons/formatHeadingTwoSvg/HeadingTwoSvg";
import HeadingThreeSvgComponent from "../../../bases/icons/formatHeadingThreeSvg/HeadingThreeSvg";
import HeadingFourSvgComponent from "../../../bases/icons/formatHeadingFourSvg/HeadingFourSvg";
import HeadingFiveSvgComponent from "../../../bases/icons/formatHeadingFiveSvg/HeadingFiveSvg";
import HeadingSixSvgComponent from "../../../bases/icons/formatHeadingSixSvg/HeadingSixSvg";
import ParagraphSvgComponent from "../../../bases/icons/formatParagraphSvg/ParagraphSvg";
import VisibleOnSvgComponent from "../../../bases/icons/visibleOnSvg/VisibleOnSvg";
import StrikethroughSvgComponent from "../../../bases/icons/formatStrikethroughSvg/StrikethroughSvg";
import ColorSvgComponent from "../../../bases/icons/formatColorSvg/ColorSvg";
import LinkSvgComponent from "../../../bases/icons/formatLinkSvg/LinkSvg";
import LinkRemoveSvgComponent from "../../../bases/icons/formatLinkRemoveSvg/LinkRemoveSvg";
import { CalculatingTextLength } from "./functions/CalculatingTextLength";
import MyModal from "../../../common/modal/MyModal";
import { prepare } from "./functions/Prepare";
import EmojiPicker, { Emoji } from "emoji-picker-react";
import ReactDOM from "react-dom";
import Input from "../input/Input";
import Button from "../button/Button";
import FormTitle from "../form-title/FormTitle";
import ColorPickerLite from "../color-picker/ColorPickerLite";
import ColorPickerFull from "../color-picker/ColorPickerFull";
import { useAxios } from "../../../DataProvider";
import Preload from "../preloader/Preload";
import useLoading from "../../loading/useLoading";

import styles from "./TextEditor.module.scss";
import "./functions/Prepare.scss";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

export const DEFAULT_VALUE = [
  {
    type: "paragraph",
    children: [{ text: "Начините писать текст..." }],
  },
];

const ToolbarButton = ({ active = false, className, ...props }) => (
  <span
    className={classNames(
      styles["button_style"],
      {
        [styles["active_on"]]: active === true,
        [styles["active_off"]]: active === false,
      },
      className
    )}
    {...props}
  />
);

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <ToolbarButton
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type")}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </ToolbarButton>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();

  return (
    <ToolbarButton
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </ToolbarButton>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");
  const isList = LIST_TYPES.includes(format);
  let newProperties;

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });

  if (TEXT_ALIGN_TYPES.includes(format)) {
    newProperties = {
      align: isActive ? undefined : format,
    };
  } else {
    newProperties = {
      type: isActive ? "paragraph" : isList ? "list-item" : format,
    };
  }
  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const isBlockActive = (editor, format, blockType = "type") => {
  const { selection } = editor;
  if (!selection) return false;

  const [match] = Array.from(
    Editor.nodes(editor, {
      at: Editor.unhangRange(editor, selection),
      match: (n) => !Editor.isEditor(n) && SlateElement.isElement(n) && n[blockType] === format,
    })
  );

  return !!match;
};

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);

  return marks ? marks[format] === true : false;
};

const Element = (props) => {
  const { attributes, children, element } = props;

  const style = { textAlign: element.align };

  switch (element.type) {
    case "block-quote":
      return (
        <blockquote className="blockquote_editor" style={style} {...attributes}>
          {children}
        </blockquote>
      );
    case "bulleted-list":
      return (
        <ul className="ul_editor" style={style} {...attributes}>
          {children}
        </ul>
      );
    case "numbered-list":
      return (
        <ol className="ol_editor" style={style} {...attributes}>
          {children}
        </ol>
      );
    case "list-item":
      return (
        <li className="li_editor" style={style} {...attributes}>
          {children}
        </li>
      );
    case "paragraph":
      return (
        <p className="p_editor" style={style} {...attributes}>
          {children}
        </p>
      );
    case "heading-one":
      return (
        <h1 className="h1_editor" style={style} {...attributes}>
          {children}
        </h1>
      );
    case "heading-two":
      return (
        <h2 className="h2_editor" style={style} {...attributes}>
          {children}
        </h2>
      );
    case "heading-three":
      return (
        <h3 className="h3_editor" style={style} {...attributes}>
          {children}
        </h3>
      );
    case "heading-four":
      return (
        <h4 className="h4_editor" style={style} {...attributes}>
          {children}
        </h4>
      );
    case "heading-five":
      return (
        <h5 className="h5_editor" style={style} {...attributes}>
          {children}
        </h5>
      );
    case "heading-six":
      return (
        <h6 className="h6_editor" style={style} {...attributes}>
          {children}
        </h6>
      );
    case "mention":
      return <Mention {...props} />;
    default:
      return (
        <p className="p_editor" style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  const style = { color: leaf.textColor };

  if (leaf.bold) {
    children = (
      <strong className="strong_editor" style={style}>
        {children}
      </strong>
    );
  }

  if (leaf.italic) {
    children = (
      <em className="em_editor" style={style}>
        {children}
      </em>
    );
  }

  if (leaf.underline) {
    children = (
      <u className="u_editor" style={style}>
        {children}
      </u>
    );
  }

  if (leaf.strikethrough) {
    children = (
      <s className="s_editor" style={style}>
        {children}
      </s>
    );
  }

  if (leaf.code) {
    children = (
      <code className="code_editor" style={style}>
        {children}
      </code>
    );
  }

  if (leaf.url) {
    children = (
      <span className="a_editor" style={style}>
        {children}
      </span>
    );
  }

  return (
    <span className="span_editor" {...attributes} style={style}>
      {children}
    </span>
  );
};

const withMentions = (editor) => {
  const { isInline, isVoid, markableVoid } = editor;

  editor.isInline = (element) => {
    return element.type === "mention" ? true : isInline(element);
  };

  editor.isVoid = (element) => {
    return element.type === "mention" ? true : isVoid(element);
  };

  editor.markableVoid = (element) => {
    return element.type === "mention" || markableVoid(element);
  };

  return editor;
};

const insertMention = (editor, character) => {
  const mention = {
    type: "mention",
    character,
    children: [{ text: "" }],
  };

  Transforms.insertNodes(editor, mention);
  Transforms.move(editor);
};

const Mention = ({ attributes, children, element }) => {
  return (
    <span
      contentEditable={false}
      data-cy={`mention-${element.character.name.replace(" ", "-")}`}
      className="mentions"
      {...attributes}
    >
      {element.character.type === "user" ? "@" : "#"}
      {element.character.name}
      {children}
    </span>
  );
};

const ColorTextPlugin = {
  setTextColor(editor, color) {
    editor.addMark("textColor", color);
  },
};

const LinkTextPlugin = {
  setLink(editor, href) {
    editor.addMark("url", href);
  },

  unsetLink(editor, href) {
    editor.removeMark("url", href);
  },
};

const TextEditor = ({
  lite = false,
  size = "medium",
  value = DEFAULT_VALUE,
  setValue,
  textLength = () => {},
  mentionsList = [],
}) => {
  let dataValue = value === null ? DEFAULT_VALUE : value;

  const isLoading = useLoading();

  const mentionsRef = useRef(null);

  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withMentions(withHistory(withReact(createEditor()))), []);

  const [search, setSearch] = useState("");

  const [mentions, setMentions] = useState(mentionsList);
  const [index, setIndex] = useState(0);
  const [target, setTarget] = useState();

  const [previewModal, setPreviewModal] = useState(false);
  const [preview, setPreview] = useState(dataValue);

  const [emojiModal, setEmojiModal] = useState(false);
  const [emoji, setEmoji] = useState(null);

  const [colorPickerModal, setColorPickerModal] = useState(false);
  const [color, setColor] = useState("#F4F4F4");

  const [urlModal, setUrlModal] = useState(false);
  const [url, setUrl] = useState("");

  const chars = mentions
    .filter((c) => (c.name ? c.name.toLowerCase().startsWith(search.toLowerCase()) : []))
    .slice(0, 10);

  const resParams = useAxios("/api/profile", "GET", {});

  const handleActiveColor = (color) => {
    setColor(color);
  };

  const handleActiveUrl = (e) => {
    setUrl(e.target.value);
  };

  const handleActiveEmoji = (e) => {
    setEmoji(e);
    closeEmoji();
  };

  const openPreview = () => {
    setPreviewModal(true);
  };

  const closePreview = () => {
    setPreviewModal(false);
  };

  const openEmoji = () => {
    setEmojiModal(true);
  };

  const closeEmoji = () => {
    setEmojiModal(false);
    setEmoji(null);
  };

  const openColorPicker = () => {
    setColorPickerModal(true);
  };

  const closeColorPicker = () => {
    setColorPickerModal(false);
    setColor("#F4F4F4");
  };

  const openUrl = () => {
    setUrlModal(true);
  };

  const closeUrl = () => {
    setUrlModal(false);
    setUrl("");
  };

  const handleChangeAddColor = useCallback(() => {
    ColorTextPlugin.setTextColor(editor, color);
    setColorPickerModal(false);
    setColor("#F4F4F4");
  }, [editor, color]);

  const handleChangeAddUrl = useCallback(() => {
    LinkTextPlugin.setLink(editor, url);
    setUrlModal(false);
    setUrl("");
  }, [editor, url]);

  const handleChangeDelUrl = useCallback(() => {
    LinkTextPlugin.unsetLink(editor);
  }, [editor]);

  const PortalMention = () => {
    return (
      <div ref={mentionsRef} className={classNames(styles["portal"])} data-cy="mentions-portal">
        {chars.map((char, i) => (
          <label
            className={classNames(styles["line"], { [styles["active"]]: i === index })}
            key={char.name}
            onClick={() => {
              Transforms.select(editor, target);
              insertMention(editor, char);
              editor.insertText(" ");
              setTarget(null);
            }}
          >
            {char.name}
          </label>
        ))}
      </div>
    );
  };

  const handleEditor = (value) => {
    const isAstChange = editor.operations.some((op) => "set_selection" !== op.type);

    if (isAstChange) {
      setValue(value);
      setPreview(value);
      textLength(CalculatingTextLength(value));
    }

    const { selection } = editor;

    if (selection && Range.isCollapsed(selection)) {
      const [start] = Range.edges(selection);
      const wordBefore = Editor.before(editor, start, { unit: "word" });
      const before = wordBefore && Editor.before(editor, wordBefore);
      const beforeRange = before && Editor.range(editor, before, start);
      const beforeText = beforeRange && Editor.string(editor, beforeRange);
      const beforeMatch =
        beforeText && (beforeText.match(/^@([\wа-яА-ЯёЁ-]+)$/) || beforeText.match(/^#([\wа-яА-ЯёЁ-]+)$/));
      const after = Editor.after(editor, start);
      const afterRange = Editor.range(editor, start, after);
      const afterText = Editor.string(editor, afterRange);
      const afterMatch = afterText.match(/^(\s|$)/);

      if (beforeMatch && afterMatch) {
        setTarget(beforeRange);
        setSearch(beforeMatch[1]);
        setIndex(0);
        return;
      }
    }

    setTarget(null);
  };

  const onKeyDown = useCallback(
    (event) => {
      if (target && chars.length > 0) {
        switch (event.key) {
          case "ArrowDown":
            event.preventDefault();
            const prevIndex = index >= chars.length - 1 ? 0 : index + 1;
            setIndex(prevIndex);
            break;
          case "ArrowUp":
            event.preventDefault();
            const nextIndex = index <= 0 ? chars.length - 1 : index - 1;
            setIndex(nextIndex);
            break;
          case "Tab":
          case "Enter":
            event.preventDefault();
            Transforms.select(editor, target);
            insertMention(editor, chars[index]);
            setTarget(null);
            break;
          case "Escape":
            event.preventDefault();
            setTarget(null);
            break;
          default:
            break;
        }
      }
    },
    [chars, editor, index, target]
  );

  useEffect(() => {
    if (emoji !== null) {
      editor.insertText(emoji.emoji);
      setEmoji(null);
    }
  }, [editor, emoji]);

  useEffect(() => {
    if (target && chars.length > 0) {
      const el = mentionsRef.current;
      const domRange = ReactEditor.toDOMRange(editor, target);
      const rect = domRange.getBoundingClientRect();
      el.style.top = `${rect.top + window.pageYOffset + 18}px`;
      el.style.left = `${rect.left + window.pageXOffset + 8}px`;
    }
  }, [chars.length, editor, index, search, target]);

  useEffect(() => {
    if (mentionsList.length === 0) {
      setMentions([
        { id: "789246865144545280", name: "общий-2", type: "chat" },
        { id: "799754645614493777", name: "общий-1", type: "chat" },
        { id: "274466897070915584", name: "dalandis", type: "user" },
        { id: "502182630238978069", name: "prestig9110", type: "user" },
      ]);
    }
  }, [mentionsList.length]);

  if (resParams.loading || isLoading) {
    return <Preload full={true} />;
  }

  console.log(resParams);

  return (
    <div className={classNames(styles["text_editor"])}>
      <Slate editor={editor} initialValue={dataValue} onChange={handleEditor}>
        <div className={classNames(styles["toolbar"])}>
          {lite ? (
            <div className={classNames(styles["block"])}>
              <MarkButton format="bold" icon={<BoldSvgComponent width="100%" height="100%" />} />
              <MarkButton format="italic" icon={<ItalicSvgComponent width="100%" height="100%" />} />
              <MarkButton format="underline" icon={<UnderlineSvgComponent width="100%" height="100%" />} />
              <MarkButton format="strikethrough" icon={<StrikethroughSvgComponent width="100%" height="100%" />} />
              <ToolbarButton onClick={openColorPicker}>
                <ColorSvgComponent width="100%" height="100%" />
              </ToolbarButton>
            </div>
          ) : (
            <>
              <div className={classNames(styles["block"])}>
                <ToolbarButton onClick={openEmoji}>
                  <Emoji unified="1f60a" size="18" />
                </ToolbarButton>
                <MarkButton format="bold" icon={<BoldSvgComponent width="100%" height="100%" />} />
                <MarkButton format="italic" icon={<ItalicSvgComponent width="100%" height="100%" />} />
                <MarkButton format="underline" icon={<UnderlineSvgComponent width="100%" height="100%" />} />
                <MarkButton format="strikethrough" icon={<StrikethroughSvgComponent width="100%" height="100%" />} />
                <MarkButton format="code" icon={<CodeSvgComponent width="100%" height="100%" />} />
                <ToolbarButton onClick={openUrl}>
                  <LinkSvgComponent width="100%" height="100%" />
                </ToolbarButton>
                <ToolbarButton onClick={handleChangeDelUrl}>
                  <LinkRemoveSvgComponent width="100%" height="100%" />
                </ToolbarButton>
                <ToolbarButton onClick={openColorPicker}>
                  <ColorSvgComponent width="100%" height="100%" />
                </ToolbarButton>
              </div>
              <div className={classNames(styles["block"])}>
                <BlockButton format="paragraph" icon={<ParagraphSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-one" icon={<HeadingOneSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-two" icon={<HeadingTwoSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-three" icon={<HeadingThreeSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-four" icon={<HeadingFourSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-five" icon={<HeadingFiveSvgComponent width="100%" height="100%" />} />
                <BlockButton format="heading-six" icon={<HeadingSixSvgComponent width="100%" height="100%" />} />
                <BlockButton format="block-quote" icon={<QuoteSvgComponent width="100%" height="100%" />} />
              </div>
              <div className={classNames(styles["block"])}>
                <BlockButton format="numbered-list" icon={<ListNumberedSvgComponent width="100%" height="100%" />} />
                <BlockButton format="bulleted-list" icon={<ListBulletedSvgComponent width="100%" height="100%" />} />
                <BlockButton format="left" icon={<AlignLeftSvgComponent width="100%" height="100%" />} />
                <BlockButton format="center" icon={<AlignCenterSvgComponent width="100%" height="100%" />} />
                <BlockButton format="right" icon={<AlignRightSvgComponent width="100%" height="100%" />} />
                <BlockButton format="justify" icon={<AlignJustifySvgComponent width="100%" height="100%" />} />
                <ToolbarButton onClick={openPreview}>
                  <VisibleOnSvgComponent width="100%" height="100%" />
                </ToolbarButton>
              </div>
            </>
          )}
        </div>
        <Editable
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          onKeyDown={onKeyDown}
          className={classNames(styles["editor"], {
            [styles["editor_small"]]: size === "small",
            [styles["editor_medium"]]: size === "medium",
            [styles["editor_large"]]: size === "large",
          })}
        />
        {target && chars.length > 0 && ReactDOM.createPortal(<PortalMention />, document.getElementById("root"))}
      </Slate>
      <MyModal open={previewModal} close={closePreview}>
        <div className={classNames(styles["content_box"])}>
          <div className={classNames(styles["prev"])} dangerouslySetInnerHTML={{ __html: prepare(preview) }} />
        </div>
      </MyModal>
      <MyModal open={colorPickerModal} close={closeColorPicker}>
        <div className={classNames(styles["picker_box"])}>
          <p className={classNames(styles["warn_color"])} style={{ color: color }}>
            Не злоупотребляйте цветами — это затруднит чтение текста. Используйте цвета для выделения важного.
          </p>
          {resParams.data.discordUser.role === "admin" && <ColorPickerFull color={color} onChange={setColor} />}
          <ColorPickerLite onClick={handleActiveColor} />
          <Button label="Выбрать" onClick={handleChangeAddColor} className={classNames(styles["margin"])} />
        </div>
      </MyModal>
      <MyModal open={emojiModal} close={closeEmoji}>
        <div className={classNames(styles["emoji_box"])}>
          <EmojiPicker theme="dark" height="100%" width="100%" lazyLoadEmojis={true} onEmojiClick={handleActiveEmoji} />
        </div>
      </MyModal>
      <MyModal open={urlModal} close={closeUrl}>
        <div className={classNames(styles["url_box"])}>
          <FormTitle title="Введите URL-адрес ссылки:" center={true} count={false} required={false} />
          <Input onChange={handleActiveUrl} />
          <Button onClick={handleChangeAddUrl} className={classNames(styles["button_custom_style"])} />
        </div>
      </MyModal>
    </div>
  );
};

export default TextEditor;
