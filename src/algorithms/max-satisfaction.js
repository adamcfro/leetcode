/**
 * A chef has collected data on the satisfaction level of his n dishes. Chef
 * can cook any dish in 1 unit of time.
 *
 * Like-time coefficient of a dish is defined as the time taken to cook that
 * dish including previous dishes multiplied by its satisfaction level
 * i.e. time[i] * satisfaction[i].
 *
 * Returns the maximum sum of like-time coefficient that the chef can obtain
 * after preparing some amount of dishes.
 *
 * Dishes can be prepared in any order and the chef can discard some dishes to
 * get this maximum value.
 *
 * @format
 * @param {number[]} satisfaction - An array of numbers representing customer
 *     satisfaction
 * @returns {number} - Returns the maximum sum of like-time coefficient after
 *     preparing some amount of dishes
 */

function maxSatisfaction(satisfaction) {
  let maxSum = 0;
  satisfaction.sort((a, b) => {
    return a - b;
  });
  if (satisfaction[satisfaction.length - 1] <= 0) {
    return 0;
  }
  for (let i = 0; i < satisfaction.length; i++) {
    let currentSum = 0;
    let time = 1;
    for (let j = i; j < satisfaction.length; j++) {
      currentSum += time * satisfaction[j];
      time++;
    }
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
