export function CalculatingTextLength(data) {
  let totalLength = 0;

  data.forEach((item) => {
    if (item.hasOwnProperty("text")) {
      totalLength += item.text.length;
    } else if (item.hasOwnProperty("children")) {
      totalLength += CalculatingTextLength(item.children);
    }
  });

  return totalLength;
}
