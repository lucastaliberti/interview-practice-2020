import { reverseArrayInPlace } from "./reverseArrayInPlace";

test("", () => {
  const input1 = ["a", "b"];
  reverseArrayInPlace(input1);
  expect(input1).toEqual(["b", "a"]);

  const input2 = ["a", "b", "c"];
  reverseArrayInPlace(input2);
  expect(input2).toEqual(["c", "b", "a"]);
});
