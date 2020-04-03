import { runUpStairs } from "./dynamic";

test("default configuration", () => {
  expect(runUpStairs(0)).toBe(1);
  expect(runUpStairs(1)).toBe(1);
  expect(runUpStairs(2)).toBe(2);
  expect(runUpStairs(3)).toBe(4);
  expect(runUpStairs(4)).toBe(7);
});

test("extended configuration", () => {
  expect(runUpStairs(4, [1, 2, 3, 4])).toBe(8);
});
