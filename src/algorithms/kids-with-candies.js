/**
 * Given n kids and an integer array candies, returns an array of booleans 
 * stating if when extraCandies is added to candies[i], the ith kid now has
 * the most candies.
 * 
 * Note that multiple kids can have the greatest number of candies.
 * 
 * @param {number[]} candies - An array of numbers representing the candies
 *     each kid has
 * @param {number} extraCandies - A number parameter representing the extra
 *     candies that are available
 * @returns {boolean[]} - Returns an array of booleans
 */
function kidsWithCandies (candies, extraCandies) {
  let maxCandy = Math.max(...candies);
  let hasGreatest = [];
  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= maxCandy) {
      hasGreatest.push(true);
    } else {
      hasGreatest.push(false);
    }
  }
  return hasGreatest;
}