import "./Prepare.scss";

function format(code, font) {
  return code
    .map((format) => {
      let styles = "";
      let colors = "";

      if (font) styles += " minecraft_font";

      if (format.bold) styles += " strong_editor";
      if (format.italic) styles += " em_editor";
      if (format.underline) styles += " u_editor";
      if (format.strikethrough) styles += " s_editor";
      if (format.code) styles += " code_editor";
      if (format.url) styles += " a_editor";
      if (format.type === "mention") styles += " mentions";

      if (format.textColor) colors += "color: " + format.textColor;

      if (format.url) {
        return `<a href=${format.url} rel="noreferrer" target="_blank" class="${styles}" style="${colors}">${format.text}</a>`;
      }

      if (format.type === "mention") {
        if (format.character.type === "user") {
          return `<span class="${styles}">@${format.character.name}</span>`;
        }
        if (format.character.type === "chat") {
          return `<a class="${styles}" href='https://discord.com/channels/723912565234728972/${format.character.id}' target="_blank" rel="noreferrer">#${format.character.name}</a>`;
        }
      }

      return `<span class="${styles}" style="${colors}">${format.text}</span>`;
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

export function prepare(code, font = false) {
  return code
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

        if (el.type === "paragraph") {
          return `<p class="${styles}">${format(el.children, font)}</p>`;
        }
        if (el.type === "heading-one") {
          return `<h1 class="${styles}">${format(el.children, font)}</h1>`;
        }
        if (el.type === "heading-two") {
          return `<h2 class="${styles}">${format(el.children, font)}</h2>`;
        }
        if (el.type === "heading-three") {
          return `<h3 class="${styles}">${format(el.children, font)}</h3>`;
        }
        if (el.type === "heading-four") {
          return `<h4 class="${styles}">${format(el.children, font)}</h4>`;
        }
        if (el.type === "heading-five") {
          return `<h5 class="${styles}">${format(el.children, font)}</h5>`;
        }
        if (el.type === "heading-six") {
          return `<h6 class="${styles}">${format(el.children, font)}</h6>`;
        }
        if (el.type === "block-quote") {
          return `<blockquote class="${styles}">${format(el.children, font)}</blockquote>`;
        }
        if (el.type === "code") {
          return `<code class="${styles}">${format(el.children, font)}</code>`;
        }
        if (el.type === "bulleted-list") {
          return `<ul class="${styles}">${list(el.children, font)}</ul>`;
        }
        if (el.type === "numbered-list") {
          return `<ol class="${styles}">${list(el.children, font)}</ol>`;
        }
      };
      return local();
    })
    .join("");
}

function formatLite(code) {
  return code
    .map((format) => {
      let styles = "";
      let colors = "";

      if (format.bold) styles += " strong_editor";
      if (format.italic) styles += " em_editor";
      if (format.underline) styles += " u_editor";
      if (format.strikethrough) styles += " s_editor";

      if (format.textColor) colors += "color: " + format.textColor;

      return `<span class="${styles}" style="${colors}">${format.text}</span>`;
    })
    .join("");
}

export function prepareLite(code) {
  const local = () => {
    if (code.type === "paragraph") {
      return formatLite(code.children);
    }
  };
  return local();
}
