/**
 * Given an array of integers nums and a positive integer k, check whether it 
 * is possible to divide this array into sets of k consecutive numbers.
 * 
 * Returns true if it is possible. Otherwise, returns false.
 * 
 * @param {number[]} nums - An array of positive numbers
 * @param {number} k - The length of sets of k consecutive numbers
 * @returns {boolean} - Returns true if the array can be divided into sets of
 *     k consecutive numbers
 */
function isPossibleDivide (nums, k) {
  let map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }
  while (Object.keys(map).length !== 0) {
    let firstKey = Number(Object.keys(map)[0]);
    for (let i = firstKey; i < firstKey + k; i++) {
      if (!map[i]) {
        return false;
      }
      map[i]--;
      if (map[i] === 0) {
        delete map[i];
      }
    }
  }
  return true;
}