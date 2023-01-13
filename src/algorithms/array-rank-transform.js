/**
 * Given an array of integers arr, replaces each element with its rank and
 * returns the new array.
 * 
 * The rank represents how large the element is. The rank has these rules:
 *     • Rank is an integer starting from 1.
 *     • The larger the element, the larger the rank. If two elements are equal,
 *       thier rank must be the same.
 *     • Rank should be as small as possible.
 * 
 * @param {number[]} arr - An array of numbers
 * @returns {number[]} - Returns an array of numbers representing ranks
 */
function arrayRankTransform (arr) {
  let res = [];
  let elemRank = {};
  let sortedArr = Array.from(arr);
  sortedArr = sortedArr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0, j = 1; i < sortedArr.length; i++) {
    if (sortedArr[i] > sortedArr[i - 1]) {
      j++;
    }
    elemRank[sortedArr[i]] = j;
  }
  for (let i = 0; i < sortedArr.length; i++) {
    res.push(elemRank[arr[i]]);
  }
  return res;
}