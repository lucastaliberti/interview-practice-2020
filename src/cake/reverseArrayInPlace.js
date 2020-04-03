export function reverseArrayInPlace(arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    // Swap characters
    const temp = arr[leftIndex];
    arr[leftIndex] = arr[rightIndex];
    arr[rightIndex] = temp;

    // Move towards middle
    leftIndex++;
    rightIndex--;
  }
}
