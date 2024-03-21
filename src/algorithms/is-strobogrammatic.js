/**
 * Given a string num which represents an integer, returns true if num is a
 * strobogrammatic number.
 *
 * A strobogrammatic number is a number that looks the same when rotated 180
 * degrees (looked at upside down).
 *
 * @format
 * @param {string} num - A string representation of a number
 * @returns {boolean} - Returns true if num is a strobogrammatic number
 */

function isStrobogrammatic(num) {
  let res = "";
  let index = 0;
  const strobogrammaticNums = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };
  while (index < num.length) {
    res = strobogrammaticNums[num[index]] + res;
    index++;
  }
  return res === num;
}
