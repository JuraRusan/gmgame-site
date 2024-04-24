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
        if (el.type === "paragraph") {
          return `<p class="p_editor">${format(el.children)}</p>`;
        }
        if (el.type === "heading-one") {
          return `<h1 class="h1_editor">${format(el.children)}</h1>`;
        }
        if (el.type === "heading-two") {
          return `<h2 class="h2_editor">${format(el.children)}</h2>`;
        }
        if (el.type === "heading-three") {
          return `<h3 class="h3_editor">${format(el.children)}</h3>`;
        }
        if (el.type === "heading-four") {
          return `<h4 class="h4_editor">${format(el.children)}</h4>`;
        }
        if (el.type === "heading-five") {
          return `<h5 class="h5_editor">${format(el.children)}</h5>`;
        }
        if (el.type === "heading-six") {
          return `<h6 class="h6_editor">${format(el.children)}</h6>`;
        }
        if (el.type === "block-quote") {
          return `<blockquote class="blockquote_editor">${format(el.children)}</blockquote>`;
        }
        if (el.type === "code") {
          return `<code class="code_editor">${format(el.children)}</code>`;
        }
        if (el.type === "bulleted-list") {
          return `<ul class="ul_editor">${list(el.children)}</ul>`;
        }
        if (el.type === "numbered-list") {
          return `<ol class="ol_editor">${list(el.children)}</ol>`;
        }
      };
      return local();
    })
    .join("");
}
