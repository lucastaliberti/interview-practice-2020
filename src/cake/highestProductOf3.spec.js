import { highestProductOf } from "./highestProductOf3";

describe("", () => {
  test("short array", () => {
    const actual = highestProductOf([1, 2, 3, 4]);
    const expected = 24;
    expect(actual).toBe(expected);
  });

  test("longer array", () => {
    const actual = highestProductOf([6, 1, 3, 5, 7, 8, 2]);
    const expected = 336;
    expect(actual).toBe(expected);
  });

  test("array has one negative", () => {
    const actual = highestProductOf([-5, 4, 8, 2, 3]);
    const expected = 96;
    expect(actual).toBe(expected);
  });

  test("array has two negatives", () => {
    const actual = highestProductOf([-10, 1, 3, 2, -10]);
    const expected = 300;
    expect(actual).toBe(expected);
  });

  test("array is all negatives", () => {
    const actual = highestProductOf([-5, -1, -3, -2]);
    const expected = -6;
    expect(actual).toBe(expected);
  });

  test("error with empty array", () => {
    const emptyArray = () => highestProductOf([]);
    expect(emptyArray).toThrow();
  });
  test("error with one number", () => {
    const oneNumber = () => highestProductOf([1]);
    expect(oneNumber).toThrow();
  });
  test("error with two numbers", () => {
    const twoNumber = () => highestProductOf([1, 1]);
    expect(twoNumber).toThrow();
  });
});
