export function checkName(text, min, max, set) {
  if (text.length < min) {
    set("Название слишком короткое");
  } else if (text.length > max) {
    set("Название слишком длинное");
  } else {
    set("");
  }
}
