/**
 * Given an array of positive integers, returns an array that consists of the
 * digits of each integer of nums after separating them in the same order they
 * appear in nums.
 * 
 * @param {number[]} nums - An array of numbers
 * @returns {number[]} - Returns an array of numbers once they've been separated
 */
function separateDigits (nums) {
  let answer = [];
  for (let i = 0; i < nums.length; i++) {
    let strNum = String(nums[i]);
    let j = 0;
    while (j < strNum.length) {
      answer.push(Number(strNum[j]));
      j++;
    }
  }
  return answer;
}