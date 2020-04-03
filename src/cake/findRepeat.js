/**
 * Find a number that appears more than once
 * @param {*} numbers
 */
export function findRepeat(numbers) {
  if (numbers.length === 1) {
    return;
  }

  const repeaters = new Set([numbers[0]]);

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];

    if (repeaters.has(current)) {
      return current;
    }

    repeaters.add(current);
  }

  return;
}
