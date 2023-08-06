/**
 * You are a product manager and currently leading a team to develop a new 
 * product. Unfortunately, the latest version of your product fails the quality 
 * check. Since each version is developed based on the previous version, all 
 * the versions after a bad version are also bad.
 * 
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the 
 * first bad one, which causes all the following ones to be bad.
 * 
 * You are given an API bool isBadVersion(version) which returns whether 
 * version is bad. Implement a function to find the first bad version. You 
 * should minimize the number of calls to the API.
 * 
 */

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version - A number representing a version
 * @return {boolean} - Returns whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion() - A function that finds if a version is bad
 * @return {function} - Returns a function
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n - The total number of versions
   * @return {integer} -  Returns the number of the first bad version
   */
  return function(n) {
    let left = 1;
    let right = n;
    while (left < right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};