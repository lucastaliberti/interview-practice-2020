/**
 * Sort the scores in O(n) time
 * @param {*} unorderedScores
 * @param {*} highestPossibleScore
 */
export function sortScores(unorderedScores, highestPossibleScore) {
  const scoreCount = new Array(highestPossibleScore + 1).fill(0);
  const sortedScores = [];

  unorderedScores.forEach(score => {
    scoreCount[score]++;
  });

  for (let score = highestPossibleScore + 1; score >= 0; score--) {
    const times = scoreCount[score];

    if (times <= 0) {
      continue;
    }

    for (let time = 0; time < times; time++) {
      sortedScores.push(score);
    }
  }

  return sortedScores;
}
