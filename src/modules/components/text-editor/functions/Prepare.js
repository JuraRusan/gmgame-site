import "./Prepare.scss";

function format(code) {
  return code
    .map((format) => {
      if (format.text === "") {
        return `</br>`;
      } else {
        let styles = "";

        if (format.bold) styles += " strong_editor";
        if (format.italic) styles += " em_editor";
        if (format.underline) styles += " u_editor";
        if (format.code) styles += " code_editor";
        if (format.link) styles += " a_editor";

        if (!format.link) {
          return `<span class="${styles}">${format.text}</span>`;
        }
        return `<a href=${format.text} rel="noreferrer" target="_blank" class="${styles}">${format.text}</a>`;
      }
    })
    .join("");
}

function list(code) {
  return code
    .map((t) => {
      if (t.type === "list-item") {
        return `<li class="li_editor">${format(t.children)}</li>`;
      }
      return t.children.text;
    })
    .join("");
}

export function prepare(code) {
  return JSON.parse(code)
    .map((el) => {
      const local = () => {
        let styles = "";

        if (el.type === "paragraph") styles += " p_editor";
        if (el.type === "heading-one") styles += " h1_editor";
        if (el.type === "heading-two") styles += " h2_editor";
        if (el.type === "heading-three") styles += " h3_editor";
        if (el.type === "heading-four") styles += " h4_editor";
        if (el.type === "heading-five") styles += " h5_editor";
        if (el.type === "heading-six") styles += " h6_editor";
        if (el.type === "block-quote") styles += " blockquote_editor";
        if (el.type === "code") styles += " code_editor";
        if (el.type === "bulleted-list") styles += " ul_editor";
        if (el.type === "numbered-list") styles += " ol_editor";

        if (el.align === "left") styles += " left_editor";
        if (el.align === "center") styles += " center_editor";
        if (el.align === "right") styles += " right_editor";
        if (el.align === "justify") styles += " justify_editor";

        console.log(styles);

        if (el.type === "paragraph") {
          return `<p class="${styles}">${format(el.children)}</p>`;
        }
        if (el.type === "heading-one") {
          return `<h1 class="${styles}">${format(el.children)}</h1>`;
        }
        if (el.type === "heading-two") {
          return `<h2 class="${styles}">${format(el.children)}</h2>`;
        }
        if (el.type === "heading-three") {
          return `<h3 class="${styles}">${format(el.children)}</h3>`;
        }
        if (el.type === "heading-four") {
          return `<h4 class="${styles}">${format(el.children)}</h4>`;
        }
        if (el.type === "heading-five") {
          return `<h5 class="${styles}">${format(el.children)}</h5>`;
        }
        if (el.type === "heading-six") {
          return `<h6 class="${styles}">${format(el.children)}</h6>`;
        }
        if (el.type === "block-quote") {
          return `<blockquote class="${styles}">${format(el.children)}</blockquote>`;
        }
        if (el.type === "code") {
          return `<code class="${styles}">${format(el.children)}</code>`;
        }
        if (el.type === "bulleted-list") {
          return `<ul class="${styles}">${list(el.children)}</ul>`;
        }
        if (el.type === "numbered-list") {
          return `<ol class="${styles}">${list(el.children)}</ol>`;
        }
      };
      return local();
    })
    .join("");
}
