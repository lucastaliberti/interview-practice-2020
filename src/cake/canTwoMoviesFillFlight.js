/**
 * Determine if two movie runtimes add up to the flight length
 * @param {*} movieLengths
 * @param {*} flightLength
 */
export function canTwoMoviesFillFlight(movieLengths, flightLength) {
  const seenMovies = new Set();
  const size = movieLengths.length;

  // O(n)
  for (let i = 0; i < size; i++) {
    const firstMovie = movieLengths[i];

    const secondMovieTime = flightLength - firstMovie;
    // O(1)
    if (seenMovies.has(secondMovieTime)) {
      return true;
    }

    seenMovies.add(firstMovie);
  }

  return false;
}
