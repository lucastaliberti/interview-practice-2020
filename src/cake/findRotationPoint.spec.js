import { findRotationPoint } from "./findRotationPoint";

describe("findRotationPoint", () => {
  test("small array", () => {
    const actual = findRotationPoint(["cape", "cake"]);
    const expected = 1;
    expect(actual).toEqual(expected);
  });

  test("medium array", () => {
    const actual = findRotationPoint([
      "grape",
      "orange",
      "plum",
      "radish",
      "apple"
    ]);
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  test("large array", () => {
    const actual = findRotationPoint([
      "ptolemaic",
      "retrograde",
      "supplant",
      "undulate",
      "xenoepist",
      "asymptote",
      "babka",
      "banoffee",
      "engender",
      "karpatka",
      "othellolagkage"
    ]);
    const expected = 5;
    expect(actual).toEqual(expected);
  });
});
