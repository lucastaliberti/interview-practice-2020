import { getProductsOfAllIntsExceptAtIndex } from "./getProductsOfAll";

describe("getProductsOfAllIntsExceptAtIndex", () => {
  test("short array", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([1, 2, 3]);
    const expected = [6, 3, 2];
    expect(actual).toEqual(expected);
  });

  test("longer array", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([8, 2, 4, 3, 1, 5]);
    const expected = [120, 480, 240, 320, 960, 192];
    expect(actual).toEqual(expected);
  });

  test("array has one zero", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([6, 2, 0, 3]);
    const expected = [0, 0, 36, 0];
    expect(actual).toEqual(expected);
  });

  test("array has two zeros", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([4, 0, 9, 1, 0]);
    const expected = [0, 0, 0, 0, 0];
    expect(actual).toEqual(expected);
  });

  test("one negative number", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([-3, 8, 4]);
    const expected = [32, -12, -24];
    expect(actual).toEqual(expected);
  });

  test("all negative numbers", () => {
    const actual = getProductsOfAllIntsExceptAtIndex([-7, -1, -4, -2]);
    const expected = [-8, -56, -14, -28];
    expect(actual).toEqual(expected);
  });

  test("error with empty array", () => {
    const emptyArray = () => getProductsOfAllIntsExceptAtIndex([]);
    expect(emptyArray).toThrow();
  });
  test("error with one number", () => {
    const oneNumber = () => getProductsOfAllIntsExceptAtIndex([1]);
    expect(oneNumber).toThrow();
  });
});
