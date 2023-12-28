export function completeArray(arr) {
  const filledArray = [];
  for (let i = 0; i <= 26; i++) {
    const item = arr.find((el) => Number(el.slot) === i);
    if (item) {
      filledArray.push(item);
    } else {
      filledArray.push({slot: String(i), type: null, type_ru: null, amount: null});
    }
  }
  return filledArray;
}