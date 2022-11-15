/**
 * There are n people that are split into some unknown number of groups. 
 * Each person is labeled with a unique ID from 0 to n - 1.
 * 
 * You are given an integer array groupSizes, where groupSizes[i] is the size 
 * of the group that person i is in. For example, if groupSizes[1] = 3, then 
 * person 1 must be in a group of size 3.
 * 
 * Return a list of groups such that each person i is in a group of size 
 * groupSizes[i].
 * 
 * @param {number[]} groupSizes - An array of numbers
 * @returns {number[][]} - Returns an array containing arrays of indices
 */
function groupThePeople (groupSizes) {
  let res = [];
  let map = {};
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupSizes[i] in map) {
      map[groupSizes[i]].push(i);
    } else {
      map[groupSizes[i]] = [i];
    }
    if (map[groupSizes[i]].length === groupSizes[i]) {
      res.push(map[groupSizes[i]]);
      map[groupSizes[i]] = [];
    }
  }
  return res;
}