/*
A child is running up a staircase with n steps  and 
can hop either 1 step, 2 steps, or 3 steps at a time.
Implement a method to count how many possible ways the child
can run up the stairs.
*/

const defaultPossibilities = [1, 2, 3];

export function runUpStairs(n, possibilities = defaultPossibilities) {
  if (n < 0) {
    return 0;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  if (n === 2) {
    return runUpStairs(1) + runUpStairs(1);
  }

  return possibilities.reduce((acc, step) => acc + runUpStairs(n - step), 0);

  // return runUpStairs(n - 1) + runUpStairs(n - 2) + runUpStairs(n - 3);
}
