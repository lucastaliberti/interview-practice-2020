/**
 * O(nm)
 * n being the sum of the sizes of the the input arrays
 * m number of arrays provided
 *
 * @param  {...any} arrays
 */
export function mergeArray(...arrays) {
  const newArray = [];
  let notExhausted = true;

  while (notExhausted) {
    let minValue = Number.POSITIVE_INFINITY;
    let minValueIndex = Number.POSITIVE_INFINITY;

    arrays.forEach(([firstElement], i) => {
      if (firstElement < minValue) {
        minValue = firstElement;
        minValueIndex = i;
      }
    });

    if (minValue === Number.POSITIVE_INFINITY) {
      notExhausted = false;
    } else {
      newArray.push(arrays[minValueIndex].shift());
    }
  }

  return newArray;
}
