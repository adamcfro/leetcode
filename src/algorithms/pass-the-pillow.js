/**
 * There are n people standing in a line labeled from 1 to n. The first person
 * in the line is holding a pillow initially. Every second, the person holding
 * the pillow passes it to the next person standing in the line. Once the
 * pillow reaches the end of the line, the direction changes, and people
 * continue passing the pillow in the opposite direction.
 *
 * For example, once the pillow reaches the nth person they pass it to the n -
 * 1th person, then to the n - 2th person and so on.
 *
 * Given the two positive integers n and time, return the index of the person
 * holding the pillow after time seconds.
 *
 * @format
 * @param {number} n - A number representing an amount of people
 * @param {number} time - A number representing a length of time
 * @returns {number} - Returns an index
 */

function passThePillow(n, time) {
  let index = 1;
  let count = 0;
  let forward = true;
  while (count < time) {
    if (forward) {
      index++;
    } else {
      index--;
    }
    if (index === n) {
      forward = false;
    }
    if (index === 1) {
      forward = true;
    }
    count++;
  }
  return index;
}
