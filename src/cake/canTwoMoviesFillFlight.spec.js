import { canTwoMoviesFillFlight } from "./canTwoMoviesFillFlight";

describe("canTwoMoviesFillFlight", () => {
  it("short flight", () => {
    const actual = canTwoMoviesFillFlight([2, 4], 1);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it("long flight", () => {
    const actual = canTwoMoviesFillFlight([2, 4], 6);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("one movie half flight length", () => {
    const actual = canTwoMoviesFillFlight([3, 8], 6);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it("two movies half flight length", () => {
    const actual = canTwoMoviesFillFlight([3, 8, 3], 6);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("lots of possible pairs", () => {
    const actual = canTwoMoviesFillFlight([1, 2, 3, 4, 5, 6], 7);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("not using first movie", () => {
    const actual = canTwoMoviesFillFlight([4, 3, 2], 5);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it("only one movie", () => {
    const actual = canTwoMoviesFillFlight([6], 6);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it("no movies", () => {
    const actual = canTwoMoviesFillFlight([], 2);
    const expected = false;
    expect(actual).toEqual(expected);
  });
});
