/**
 * Given an array of strings nums containing n unique binary strings each of
 * length n, returns a binary string of length n that does not appear in nums.
 *
 * @format
 * @param {string[]} nums - An array of strings representing binary numbers
 * @return {string} - Returns a unique binary string
 */

function findDifferentBinaryString(nums) {
  let res = "";
  for (let i = 0; i < nums.length; i++) {
    res += nums[i][i] === "0" ? "1" : "0";
  }
  return res;
}
