export function RgbToHex(rgb) {
  const red = Math.min(255, Math.max(0, rgb.red));
  const green = Math.min(255, Math.max(0, rgb.green));
  const blue = Math.min(255, Math.max(0, rgb.blue));

  let hexRed = red.toString(16).padStart(2, "0");
  let hexGreen = green.toString(16).padStart(2, "0");
  let hexBlue = blue.toString(16).padStart(2, "0");

  let hexColor = "#" + hexRed + hexGreen + hexBlue;

  return hexColor.toLowerCase();
}
