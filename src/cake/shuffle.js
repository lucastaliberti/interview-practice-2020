function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

export function shuffle(array) {
  array.forEach((value, i) => {
    const newIndex = getRandom(i, array.length - 1);
    if (i !== newIndex) {
      const temp = array[newIndex];

      array[newIndex] = value;
      array[i] = temp;
    }
  });
}
