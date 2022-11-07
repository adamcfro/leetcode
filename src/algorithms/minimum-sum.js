/**
 * Given a positive number consisting of exactly four digits, rearranges and 
 * splits that number into two new numbers, returning the minimum possible sum 
 * of the two new numbers.
 * 
 * @param {number} num - A number parameter
 * @returns {number} - Returns the minimum possible sum after splitting num
 */
function minimumSum (num) {
  num = String(num);
  let nums = num.split('');
  nums.sort((a, b) => {
    return a - b;
  });
  const num1 = Number(nums[0] + nums[2]);
  const num2 = Number(nums[1] + nums[3]);
  return num1 + num2;
}