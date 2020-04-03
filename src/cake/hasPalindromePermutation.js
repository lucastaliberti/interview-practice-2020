/**
 * Check if any permutation of the input is a palindrome
 * @param {*} theString
 */
export function hasPalindromePermutation(theString) {
  const oddChars = new Set();

  for (let char of theString) {
    if (oddChars.has(char)) {
      oddChars.delete(char);
    } else {
      oddChars.add(char);
    }
  }

  return oddChars.size <= 1;
}
