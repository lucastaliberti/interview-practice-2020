import { mergeArray } from "./mergeArray";

test("", () => {
  let array1 = [3, 4, 6, 10, 11, 15];
  let array2 = [1, 5, 8, 12, 14, 19];
  let array3 = [];

  let resultArray = [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19];

  expect(mergeArray(array1, array2)).toEqual(resultArray);

  array1 = [1];
  array2 = [5, 8, 12, 14, 19];

  resultArray = [1, 5, 8, 12, 14, 19];

  expect(mergeArray(array1, array2)).toEqual(resultArray);

  array1 = [1];
  array2 = [5];
  array3 = [8, 12, 14, 19];

  resultArray = [1, 5, 8, 12, 14, 19];

  expect(mergeArray(array1, array2, array3)).toEqual(resultArray);
});
