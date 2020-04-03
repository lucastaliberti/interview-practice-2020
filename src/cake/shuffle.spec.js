import { shuffle } from "./shuffle";

describe("shuffle", () => {
  it("works", () => {
    const sample = [1, 2, 3, 4, 5];
    const original = [...sample];

    expect(shuffle(sample)).toEqual(undefined);
    expect(sample).not.toEqual(original);
  });
});
