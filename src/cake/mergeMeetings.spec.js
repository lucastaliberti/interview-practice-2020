import { mergeMeetings } from "./mergeMeetings";

test("mergeMeetings", () => {
  // const input1 = [{ startTime: 1, endTime: 3 }, { startTime: 2, endTime: 4 }];
  // expect(mergeMeetings(input1)).toEqual([{ startTime: 1, endTime: 4 }]);

  // const input2 = [{ startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }];
  // expect(mergeMeetings(input2)).toEqual([{ startTime: 1, endTime: 3 }]);

  const input3 = [
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 5 },
    { startTime: 4, endTime: 8 },
    { startTime: 10, endTime: 12 },
    { startTime: 9, endTime: 10 }
  ];
  expect(mergeMeetings(input3)).toEqual([
    { startTime: 0, endTime: 1 },
    { startTime: 3, endTime: 8 },
    { startTime: 9, endTime: 12 }
  ]);
});
