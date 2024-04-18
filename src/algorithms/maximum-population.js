/**
 * You are given a 2D integer array logs where each logs[i] = [birthi, deathi]
 * indicates the birth and death years of the ith person.
 *
 * The population of some year x is the number of people alive during that
 * year. The ith person is counted in year x's population if x is in the
 * inclusive range [birthi, deathi - 1]. Note that the person is not counted in
 * the year that they die.
 *
 * Return the earliest year with the maximum population.
 *
 * @format
 * @param {number[][]} logs - A 2D array of numbers representing years
 * @returns {number} - Returns a year
 */

function maximumPopulation(logs) {
  const count = new Array(101).fill(0);
  for (const [birth, death] of logs) {
    count[birth - 1950]++;
    count[death - 1950]--;
  }
  let max = 0;
  for (let i = 1; i < 101; i++) {
    count[i] += count[i - 1];
    if (count[i] > count[max]) max = i;
  }
  return 1950 + max;
}
