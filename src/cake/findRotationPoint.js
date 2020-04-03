/**
 * Find the rotation point in the vector
 * @param {*} words
 */
export function findRotationPoint(words) {
  const firstWord = words[0];

  let floorIndex = 0;
  let ceilingIndex = words.length - 1;

  while (floorIndex < ceilingIndex) {
    const guessIndex = Math.floor(
      floorIndex + (ceilingIndex - floorIndex / 2) / 2
    );

    // If guess comes after first word or is the first word
    if (words[guessIndex] >= firstWord) {
      // Go right
      floorIndex = guessIndex;
    } else {
      // Go left
      ceilingIndex = guessIndex;
    }

    if (floorIndex + 1 === ceilingIndex) {
      break;
    }
  }

  return ceilingIndex;
}
