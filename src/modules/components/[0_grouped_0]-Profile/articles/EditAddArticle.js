import classNames from "classnames";
import { Slate, Editable, withReact, useSlate } from "slate-react";
import { useState, useCallback, useMemo } from "react";
import { withHistory } from "slate-history";
import { useParams } from "react-router-dom";
import { Editor, createEditor, Range } from "slate";
import BoldSvgComponent from "../../../../bases/icons/formatBoldSvg/BoldSvg";
import ItalicSvgComponent from "../../../../bases/icons/formatItalicSvg/ItalicSvg";
import UnderlineSvgComponent from "../../../../bases/icons/formatUnderlineSvg/UnderlineSvg";
import { useAxios } from "../../../../DataProvider";
import useLoading from "../../../loading/useLoading";
import Preload from "../../preloader/Preload";

import styles from "../../[0_grouped_0]-Maps-all-comp/maps-elements-add.module.scss";

const EditAddArticle = (params) => {
  const editor = useMemo(() => withReact(withHistory(createEditor())), []);
  const isLoading = useLoading();

  const Element = (props) => {
    const { attributes, children, element } = props;

    switch (element.type) {
      default:
        return (
          <p {...attributes} className={classNames(styles["mainText"])}>
            {children}
          </p>
        );
    }
  };
  // eslint-disable-next-line
  const [contentValue, setContent] = useState();
  // eslint-disable-next-line
  const [value, setValue] = useState();
  // eslint-disable-next-line
  const [target, setTarget] = useState();
  // eslint-disable-next-line
  const [index, setIndex] = useState(0);
  // eslint-disable-next-line
  const [search, setSearch] = useState("");
  const renderElement = useCallback((props) => <Element {...props} />, []);

  const initialValue = useMemo(() => {
    if (contentValue) {
      return JSON.parse(contentValue);
    } else {
      return [
        {
          type: "paragraph",
          children: [{ text: "test" }],
        },
      ];
    }
  }, [contentValue]);

  const Leaf = ({ attributes, children, leaf }) => {
    if (leaf.bold) {
      children = <strong>{children}</strong>;
    }

    if (leaf.code) {
      children = <code>{children}</code>;
    }

    if (leaf.italic) {
      children = <em>{children}</em>;
    }

    if (leaf.underline) {
      children = <u>{children}</u>;
    }

    return <span {...attributes}>{children}</span>;
  };

  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const { id } = useParams();
  const resParams = useAxios(`/api/get_article/${id}`, "GET", {});

  if (resParams.loading || isLoading) {
    return <Preload full={false} />;
  }

  // eslint-disable-next-line
  const data = resParams.data;

  const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const MarkButton = ({ format, icon }) => {
    const editor = useSlate();
    return (
      <button
        className={styles["btn"]}
        active={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {icon}
      </button>
    );
  };

  return (
    <div className={classNames(styles["box_map_add_wrapper"])}>
      <Slate
        editor={editor}
        value={initialValue}
        onChange={(value) => {
          const isAstChange = editor.operations.some(
            (op) => "set_selection" !== op.type
          );
          if (isAstChange) {
            const content = JSON.stringify(value);
            setValue(content);
          }

          const { selection } = editor;

          if (selection && Range.isCollapsed(selection)) {
            const [start] = Range.edges(selection);
            const wordBefore = Editor.before(editor, start, { unit: "word" });
            const before = wordBefore && Editor.before(editor, wordBefore);
            const beforeRange = before && Editor.range(editor, before, start);
            const beforeText =
              beforeRange && Editor.string(editor, beforeRange);
            const beforeMatch =
              beforeText &&
              (beforeText.match(/^@(\w|\W+?)$/) ||
                beforeText.match(/^#(\w|\W+?)$/));
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
        }}
      >
        <div className={classNames(styles["wrapperBox"])}>
          <div className={classNames(styles["editingPanel"])}>
            <MarkButton
              format="bold"
              icon={
                <BoldSvgComponent wight="100%" height="100%" color="#fff" />
              }
            />
            <MarkButton
              format="italic"
              icon={
                <ItalicSvgComponent wight="100%" height="100%" color="#fff" />
              }
            />
            <MarkButton
              format="underline"
              icon={
                <UnderlineSvgComponent
                  wight="100%"
                  height="100%"
                  color="#fff"
                />
              }
            />
          </div>
          <Editable
            className={classNames(styles["editor"])}
            renderLeaf={renderLeaf}
            renderElement={renderElement}
          />
        </div>
      </Slate>
    </div>
  );
};

export default EditAddArticle;
