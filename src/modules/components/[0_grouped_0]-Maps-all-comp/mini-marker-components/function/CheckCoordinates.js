export function checkCoordinates(number, set) {
  if (!/^[0-9+-]+$/.test(number)) {
    set("Координаты могут быть только числом");
  } else {
    set("");
  }
}
