import { getMaxProfit } from "./getMaxProfit";

describe("getMaxProfit", () => {
  test("price goes up then down", () => {
    const actual = getMaxProfit([1, 5, 3, 2]);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test("price goes down then up", () => {
    const actual = getMaxProfit([7, 2, 8, 9]);
    const expected = 7;
    expect(actual).toEqual(expected);
  });

  test("price goes up all day", () => {
    const actual = getMaxProfit([1, 6, 7, 9]);
    const expected = 8;
    expect(actual).toEqual(expected);
  });

  test("price goes down all day", () => {
    const actual = getMaxProfit([9, 7, 4, 1]);
    const expected = -2;
    expect(actual).toEqual(expected);
  });

  test("price stays the same all day", () => {
    const actual = getMaxProfit([1, 1, 1, 1]);
    const expected = 0;
    expect(actual).toEqual(expected);
  });

  test("error with empty prices", () => {
    const emptyArray = () => getMaxProfit([]);
    expect(emptyArray).toThrow();
  });

  test("error with one price", () => {
    const onePrice = () => getMaxProfit([1]);
    expect(onePrice).toThrow();
  });
});
