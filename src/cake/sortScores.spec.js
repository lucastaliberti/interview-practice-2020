import { sortScores } from "./sortScores";

describe("sortScores", () => {
  test("no scores", () => {
    const actual = sortScores([], 100);
    const expected = [];
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });
  test("one score", () => {
    const actual = sortScores([55], 100);
    const expected = [55];
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });

  test("two scores", () => {
    const actual = sortScores([30, 60], 100);
    const expected = [60, 30];
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });

  test("many scores", () => {
    const actual = sortScores([37, 89, 41, 65, 91, 53], 100);
    const expected = [91, 89, 65, 53, 41, 37];
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });

  test("repeated scores", () => {
    const actual = sortScores([20, 10, 30, 30, 10, 20], 100);
    const expected = [30, 30, 20, 20, 10, 10];
    expect(JSON.stringify(actual)).toEqual(JSON.stringify(expected));
  });
});
