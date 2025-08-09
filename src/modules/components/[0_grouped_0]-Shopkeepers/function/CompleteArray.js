export function completeArrayShulker(arr) {
  const filledArray = [];

  for (let i = 0; i <= 26; i++) {
    const item = arr.find((el) => Number(el.slot) === i);
    if (item) {
      filledArray.push(item);
    } else {
      filledArray.push({ slot: String(i), id: null, amount: null });
    }
  }
  return filledArray;
}

export function completeArrayBundle(arr) {
  const filledArray = [];

  for (let i = 0; i <= 63; i++) {
    const item = arr.find((el) => Number(el.pos) === i);
    if (item) {
      filledArray.push(item);
    } else {
      filledArray.push({ pos: String(i), id: null, amount: null });
    }
  }
  return filledArray;
}
