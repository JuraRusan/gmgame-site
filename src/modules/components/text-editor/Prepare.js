import classNames from "classnames";

import prepareStyle from "./Prepare.module.scss";

function format(code) {
  return code
    .map((o) => {
      if (o.text === "") {
        return `</br>`;
      } else {
        if (o.bold) {
          return `<strong className=${classNames(prepareStyle["strong_editor"])}>${o.text}</strong>`;
        }
        if (o.italic) {
          return `<em className=${classNames(prepareStyle["em_editor"])}>${o.text}</em>`;
        }
        if (o.underline) {
          return `<u className=${classNames(prepareStyle["u_editor"])}>${o.text}</u>`;
        }
        if (o.code) {
          return `<code className=${classNames(prepareStyle["code_editor"])}>${o.text}</code>`;
        }
        return o.text;
      }
    })
    .join("");
}

function list(code) {
  return code.map((t) => {
    if (t.type === "list-item") {
      return `<li className=${classNames(prepareStyle["li_editor"])}>${format(t.children)}</li>`;
    }
    return t.children.text;
  });
}

export function prepare(code) {
  console.log(code);
  return JSON.parse(code)
    .map((el) => {
      const local = () => {
        if (el.type === "paragraph") {
          return `<p className=${classNames(prepareStyle["p_editor"])}>${format(el.children)}</p>`;
        }
        if (el.type === "heading-one") {
          const style = classNames(prepareStyle["h1_editor"]);
          return `<h1 className=${style}>${format(el.children)}</h1>`;
        }
        if (el.type === "heading-two") {
          return `<h2 className=${classNames(prepareStyle["h2_editor"])}>${format(el.children)}</h2>`;
        }
        if (el.type === "heading-three") {
          return `<h3 className=${classNames(prepareStyle["h3_editor"])}>${format(el.children)}</h3>`;
        }
        if (el.type === "heading-four") {
          return `<h4 className=${classNames(prepareStyle["h4_editor"])}>${format(el.children)}</h4>`;
        }
        if (el.type === "heading-five") {
          return `<h5 className=${classNames(prepareStyle["h5_editor"])}>${format(el.children)}</h5>`;
        }
        if (el.type === "heading-six") {
          return `<h6 className=${classNames(prepareStyle["h6_editor"])}>${format(el.children)}</h6>`;
        }
        if (el.type === "block-quote") {
          return `<blockquote className=${classNames(prepareStyle["blockquote_editor"])}>${format(el.children)}</blockquote>`;
        }
        if (el.type === "code") {
          return `<code className=${classNames(prepareStyle["code_editor"])}>${format(el.children)}</code>`;
        }
        if (el.type === "bulleted-list") {
          return `<ul className=${classNames(prepareStyle["ul_editor"])}>${list(el.children).join("")}</ul>`;
        }
        if (el.type === "numbered-list") {
          return `<ol className=${classNames(prepareStyle["ol_editor"])}>${list(el.children).join("")}</ol>`;
        }
      };
      return local();
    })
    .join("");
}
