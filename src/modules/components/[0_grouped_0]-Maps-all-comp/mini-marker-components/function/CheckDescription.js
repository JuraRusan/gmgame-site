export function checkDescription(text, min, max, set) {
  if (text.length < min) {
    set("Описание слишком короткое");
  } else if (text.length > max) {
    set("Описание слишком длинное");
  } else {
    set("");
  }
}
