/**
 * There are n balls on a table, each ball has a color black or white. You are
 * given a 0-indexed binary string s of length n, where 1 and 0 represent black
 * and white balls, respectively. In each step, you can choose two adjacent
 * balls and swap them.
 *
 * Returns the minimum number of steps to group all the black balls to the
 * right and all the white balls to the left.
 *
 * @format
 * @param {string} s - A string made up of "0" and "1" characters
 * @returns {number} - Returns the number of steps to properly group numbers
 */

function minimumSteps(s) {
  let steps = 0;
  let ones = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "1") {
      ones++;
    } else {
      steps += ones;
    }
  }
  return steps;
}
