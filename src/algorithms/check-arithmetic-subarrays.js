/**
 * Returns a list of boolean elements res, where res[i] is true if the subarray
 * nums[l[i]], ... , nums[r[i]] can be arranged to form an arithmetic sequence,
 * and false otherwise.
 * 
 * An arithmetic sequence consists of at least two elements where the difference
 * between every two consecutive elements is the same.
 * 
 * @param {number[]} nums - An array of numbers
 * @param {number[]} l - An array of numbers representing starting indices
 * @param {number[]} r - An array of numbers representing ending indices
 * @returns {boolean[]} - Returns an array of boolean values stating whether
 *     or not a subarray can be arranged in an arithmetic sequence
 */
function checkArithmeticSubarrays (nums, l, r) {
  let res = [];
  for (let i = 0; i < l.length; i++) {
    let subarray = nums.slice(l[i], r[i] + 1);
    subarray.sort((a, b) => {
      return b - a;
    });
    let distance = subarray[0] - subarray[1];
    for (let j = 0; j < subarray.length - 1; j++) {
      if (subarray[j] - subarray[j + 1] !== distance) {
        res.push(false);
        break;
      } else if (j + 2 === subarray.length) {
        res.push(true);
      }
    }
  }
  return res;
}