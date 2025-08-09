function completeArray(arr, length, key) {
  return Array.from({ length: length + 1 }, (_, i) => {
    const item = arr.find((el) => Number(el[key]) === i);
    return item || { [key]: String(i), id: null, amount: null };
  });
}

export const completeArrayShulker = (arr) => completeArray(arr, 26, "slot");
export const completeArrayBundle = (arr) => completeArray(arr, 63, "pos");
