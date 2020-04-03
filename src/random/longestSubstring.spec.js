import { longestSubString } from "./longestSubstring";

describe("longest substring", () => {
  test("1", () => {
    expect(longestSubString("abcabcbb")).toEqual(3);
  });

  test("2", () => {
    expect(longestSubString("bbbbb")).toEqual(1);
  });

  test("3", () => {
    expect(longestSubString("pwwkew")).toEqual(3);
  });
});
