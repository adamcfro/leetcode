/**
 * An integer x is called achievable if it can become equal to the parameter 
 * num after applying the following operation no more than t times:
 *   • Increase or decrease x by 1, and simultaneously increase or decrease
 *     num by 1.
 * Returns the maximum possible achievable number.
 * 
 * @param {number} num - A starting number
 * @param {number} t - A number of operations to perform
 * @returns {number} - Returns the maximum possible achievable number
 */
function theMaximumAchievableX (num, t) {
  return t * 2 + num;
}