/**
 * Create a class ArrayWrapper that accepts an array of integers in its
 * constructor. This class should have two features:
 *   • When two instances of this class are added together with the + operator,
 *     the resulting value is the sum of all the elements in both arrays.
 *   • When the String() function is called on the instance, it will return a
 *     comma separated string surrounded by brackets. For example, [1,2,3].
 * 
 * @param {number[]} nums - An array of numbers
 * @return {void}
 */
var ArrayWrapper = function(nums) {
  this.nums = nums;
};

/**
 * @return {number} - Returns the sum of numbers from the nums array
 */
ArrayWrapper.prototype.valueOf = function() {
  let sum = this.nums.reduce((accumulator, currentNum) => accumulator + currentNum, 0);
  return sum;
}

/**
 * @return {string} - Returns the nums array converted to a string
 */
ArrayWrapper.prototype.toString = function() {
  let str = this.nums.join(',');
  return `[${str}]`;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */