import { WordCloudData } from "./WordCloudData";

/**
 * Simple custom map compare
 * @param {*} map1
 * @param {*} map2
 */
function isMapsEqual(map1, map2) {
  if (map1.size !== map2.size) {
    return false;
  }
  for (let [key, val] of map1) {
    const testVal = map2.get(key);

    // In cases of an undefined value, make sure the key
    // actually exists on the object so there are no false positives
    if (testVal !== val || (testVal === undefined && !map2.has(key))) {
      return false;
    }
  }
  return true;
}

describe("WordCloudData", () => {
  it("simple sentence", () => {
    const actual = new WordCloudData("I like cake").wordsToCounts;
    const expected = new Map([["I", 1], ["like", 1], ["cake", 1]]);
    expect(actual).toEqual(expected);
  });

  it("longer sentence", () => {
    const actual = new WordCloudData(
      "Chocolate cake for dinner and pound cake for dessert"
    ).wordsToCounts;
    const expected = new Map([
      ["and", 1],
      ["pound", 1],
      ["for", 2],
      ["dessert", 1],
      ["Chocolate", 1],
      ["dinner", 1],
      ["cake", 2]
    ]);
    expect(isMapsEqual(actual, expected)).toBeTruthy();
  });

  it("punctuation", () => {
    const actual = new WordCloudData("Strawberry short cake? Yum!")
      .wordsToCounts;
    const expected = new Map([
      ["cake", 1],
      ["Strawberry", 1],
      ["short", 1],
      ["Yum", 1]
    ]);
    expect(isMapsEqual(actual, expected)).toBeTruthy();
  });

  it("hyphenated Words", () => {
    const actual = new WordCloudData("Dessert - mille-feuille cake")
      .wordsToCounts;
    const expected = new Map([
      ["cake", 1],
      ["Dessert", 1],
      ["mille-feuille", 1]
    ]);

    expect(isMapsEqual(actual, expected)).toBeTruthy();
  });

  it("ellipses between words", () => {
    const actual = new WordCloudData("Mmm...mmm...decisions...decisions")
      .wordsToCounts;
    const expected = new Map([["mmm", 2], ["decisions", 2]]);
    expect(isMapsEqual(actual, expected)).toBeTruthy();
  });

  it("apostrophes", () => {
    const actual = new WordCloudData("Allie's Bakery: Sasha's Cakes")
      .wordsToCounts;
    const expected = new Map([
      ["Bakery", 1],
      ["Cakes", 1],
      ["Allie's", 1],
      ["Sasha's", 1]
    ]);
    expect(isMapsEqual(actual, expected)).toBeTruthy();
  });
});
