/**
 * Given a string, find the length of the longest substring without repeating characters.
 */
export function longestSubString(string) {
  let start = 0;
  let maxLength = 0;
  const seen = new Map();

  [...string].forEach((char, i) => {
    if (seen.has(char) && start <= seen.get(char)) {
      maxLength = Math.max(i - start, maxLength);
      start = seen.get(char) + 1;
    }

    seen.set(char, i);
  });
  return maxLength;
}
