export function binarySearch(target, nums) {
  let floorIndex = -1;
  let ceilingIndex = nums.length;

  while (floorIndex + 1 < ceilingIndex) {
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance / 2);
    const guessIndex = floorIndex + halfDistance;

    const guessValue = nums[guessIndex];

    if (target === guessValue) {
      return guessIndex;
    }

    if (guessValue > target) {
      ceilingIndex = guessIndex;
    } else if (target > guessValue) {
      floorIndex = guessIndex;
    }
  }

  return -1;
}
