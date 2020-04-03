import { isFirstComeFirstServed } from "./isFirstComeFirstServed";

describe("isFirstComeFirstServed", () => {
  it("both registers have same number of orders", () => {
    const actual = isFirstComeFirstServed(
      [1, 4, 5],
      [2, 3, 6],
      [1, 2, 3, 4, 5, 6]
    );
    expect(actual).toBeTruthy();
  });

  it("registers have different lengths", () => {
    const actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 2, 6, 3, 5]);

    expect(actual).toBeFalsy();
  });

  it("one register is empty", () => {
    const actual = isFirstComeFirstServed([], [2, 3, 6], [2, 3, 6]);
    expect(actual).toBeTruthy();
  });

  it("served orders is missing orders", () => {
    const actual = isFirstComeFirstServed([1, 5], [2, 3, 6], [1, 6, 3, 5]);
    expect(actual).toBeFalsy();
  });

  it("served orders has extra orders", () => {
    const actual = isFirstComeFirstServed(
      [1, 5],
      [2, 3, 6],
      [1, 2, 3, 5, 6, 8]
    );
    expect(actual).toBeFalsy();
  });

  it("one register has extra orders", () => {
    const actual = isFirstComeFirstServed([1, 9], [7, 8], [1, 7, 8]);
    expect(actual).toBeFalsy();
  });

  it("one register has unserved orders", () => {
    const actual = isFirstComeFirstServed([55, 9], [7, 8], [1, 7, 8, 9]);
    expect(actual).toBeFalsy();
  });
});
