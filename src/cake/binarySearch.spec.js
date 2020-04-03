import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  it("works", () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const target = 3;
    expect(binarySearch(target, nums)).toEqual(2);
  });
});
