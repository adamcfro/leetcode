/**
 * You are given a 0-indexed integer array nums of size 3 which can form the
 * sides of a triangle.
 *   • A triangle is called equilateral if it has all sides of equal length.
 *   • A triangle is called isosceles if it has exactly two sides of equal
 *     length.
 *   • A triangle is called scalene if all its sides are of different lengths
 * Return a string representing the type of triangle that can be formed or
 * "none" if it cannot form a triangle.
 *
 * @format
 * @param {number[]} nums - An array of numbers of length 3
 * @returns {string} - Returns a string representing the type of triangle
 */

function triangleType(nums) {
  let res = "";
  nums.sort((a, b) => a - b);
  if (nums[0] + nums[1] > nums[2]) {
    if (nums[0] === nums[1] && nums[1] === nums[2]) {
      res = "equilateral";
    } else if (nums[0] === nums[1] || nums[1] === nums[2]) {
      res = "isosceles";
    } else {
      res = "scalene";
    }
  } else {
    res = "none";
  }
  return res;
}
