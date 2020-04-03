import { findRepeat } from "./findRepeat";

describe.only("findRepeat", () => {
  test("just the repeated number", () => {
    const actual = findRepeat([1, 1]);
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("short array", () => {
    const actual = findRepeat([1, 2, 3, 2]);
    const expected = 2;
    expect(actual).toEqual(expected);
  });

  test("medium array", () => {
    const actual = findRepeat([1, 2, 5, 5, 5, 5]);
    const expected = 5;
    expect(actual).toEqual(expected);
  });

  test("long array", () => {
    const actual = findRepeat([4, 1, 4, 8, 3, 2, 7, 6, 5]);
    const expected = 4;
    expect(actual).toEqual(expected);
  });
});
