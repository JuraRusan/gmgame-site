import React, { useCallback, useMemo } from "react";
import { Editable, withReact, useSlate, Slate } from "slate-react";
import { Editor, Transforms, createEditor, Element as SlateElement } from "slate";
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
import LinkSvgComponent from "../../../bases/icons/formatLinkSvg/LinkSvg";
import { CalculatingTextLength } from "./functions/CalculatingTextLength";
import { DEFAULT_VALUE } from "./Default-value";

import styles from "./TextEditor.module.scss";
import "./functions/Prepare.scss";

const LIST_TYPES = ["numbered-list", "bulleted-list"];
const TEXT_ALIGN_TYPES = ["left", "center", "right", "justify"];

const Button = ({ active, ...props }) => (
  <span
    {...props}
    className={classNames(styles["button_style"], {
      [styles["active_on"]]: active === true,
      [styles["active_off"]]: active === false,
    })}
  />
);

const BlockButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type")}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

const MarkButton = ({ format, icon }) => {
  const editor = useSlate();
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      {icon}
    </Button>
  );
};

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? "align" : "type");
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) &&
      SlateElement.isElement(n) &&
      LIST_TYPES.includes(n.type) &&
      !TEXT_ALIGN_TYPES.includes(format),
    split: true,
  });
  let newProperties;
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

const Element = ({ attributes, children, element }) => {
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
    default:
      return (
        <p className="p_editor" style={style} {...attributes}>
          {children}
        </p>
      );
  }
};

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong className="strong_editor">{children}</strong>;
  }

  if (leaf.italic) {
    children = <em className="em_editor">{children}</em>;
  }

  if (leaf.underline) {
    children = <u className="u_editor">{children}</u>;
  }

  if (leaf.code) {
    children = <code className="code_editor">{children}</code>;
  }

  if (leaf.link) {
    children = <span className="a_editor">{children}</span>;
  }

  return (
    <span className="span_editor" {...attributes}>
      {children}
    </span>
  );
};

const Toolbar = ({ children }) => <div className={classNames(styles["toolbar"])}>{children}</div>;

const RichTextExample = ({ value = DEFAULT_VALUE, setValue, textLength = () => {} }) => {
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);
  const editor = useMemo(() => withHistory(withReact(createEditor())), []);

  let dataValue;

  try {
    dataValue = JSON.parse(value);
  } catch {
    dataValue = value;
  }

  return (
    <div className={classNames(styles["text_editor"])}>
      <Slate
        editor={editor}
        initialValue={dataValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some((op) => "set_selection" !== op.type);

          if (isAstChange) {
            setValue(JSON.stringify(value));
            textLength(CalculatingTextLength(value));
          }
        }}
      >
        <Toolbar>
          <MarkButton format="bold" icon={<BoldSvgComponent width="100%" height="100%" />} />
          <MarkButton format="italic" icon={<ItalicSvgComponent width="100%" height="100%" />} />
          <MarkButton format="underline" icon={<UnderlineSvgComponent width="100%" height="100%" />} />
          <MarkButton format="code" icon={<CodeSvgComponent width="100%" height="100%" />} />
          <MarkButton format="link" icon={<LinkSvgComponent width="100%" height="100%" />} />
          <BlockButton format="paragraph" icon={<ParagraphSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-one" icon={<HeadingOneSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-two" icon={<HeadingTwoSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-three" icon={<HeadingThreeSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-four" icon={<HeadingFourSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-five" icon={<HeadingFiveSvgComponent width="100%" height="100%" />} />
          <BlockButton format="heading-six" icon={<HeadingSixSvgComponent width="100%" height="100%" />} />
          <BlockButton format="block-quote" icon={<QuoteSvgComponent width="100%" height="100%" />} />
          <BlockButton format="numbered-list" icon={<ListNumberedSvgComponent width="100%" height="100%" />} />
          <BlockButton format="bulleted-list" icon={<ListBulletedSvgComponent width="100%" height="100%" />} />
          <BlockButton format="left" icon={<AlignLeftSvgComponent width="100%" height="100%" />} />
          <BlockButton format="center" icon={<AlignCenterSvgComponent width="100%" height="100%" />} />
          <BlockButton format="right" icon={<AlignRightSvgComponent width="100%" height="100%" />} />
          <BlockButton format="justify" icon={<AlignJustifySvgComponent width="100%" height="100%" />} />
        </Toolbar>
        <Editable renderElement={renderElement} renderLeaf={renderLeaf} className={classNames(styles["editor"])} />
      </Slate>
    </div>
  );
};

export default RichTextExample;
