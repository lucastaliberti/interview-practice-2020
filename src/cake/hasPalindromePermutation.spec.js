import { hasPalindromePermutation } from "./hasPalindromePermutation";

describe("hasPalindromePermutation", () => {
  it("permutation with odd number of chars", () => {
    expect(hasPalindromePermutation("aabcbcd")).toEqual(true);
  });

  it("permutation with even number of chars", () => {
    expect(hasPalindromePermutation("aabccbdd")).toEqual(true);
  });

  it("no permutation with odd number of chars", () => {
    expect(hasPalindromePermutation("aabcd")).toEqual(false);
  });

  it("no permutation with even number of chars", () => {
    expect(hasPalindromePermutation("aabbcd")).toEqual(false);
  });

  it("empty string", () => {
    expect(hasPalindromePermutation("")).toEqual(true);
  });

  it("one character string ", () => {
    expect(hasPalindromePermutation("a")).toEqual(true);
  });
});
