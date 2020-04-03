export function mergeMeetings(arr) {
  const sortByStartTime = ({ startTime: a }, { startTime: b }) => a - b;

  return arr.sort(sortByStartTime).reduce(
    (acc, currentMeeting, i) => {
      const lastMerged = acc[acc.length - 1];

      if (currentMeeting.startTime <= lastMerged.endTime) {
        lastMerged.endTime = Math.max(
          currentMeeting.endTime,
          lastMerged.endTime
        );
      } else {
        acc.push(currentMeeting);
      }

      return acc;
    },
    [arr[0]]
  );
}
