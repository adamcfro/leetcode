/**
 * You are given an integer array height of length n. There are n vertical
 * lines drawn such that the two endpoints of the ith line are (i, 0) and (i,
 * height[i]). Find two lines that together with the x-axis form a container,
 * such that the container contains the most water.
 *
 * Returns the maximum amount of water a container can store.
 *
 * @format
 * @param {number[]} height - An array of numbers representing line heights
 * @returns {number} - Returns the maximum amount of water a container can store
 */

function maxArea(height) {
  let maxWater = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const currentWidth = right - left;
    maxWater = Math.max(
      maxWater,
      Math.min(height[left], height[right]) * currentWidth
    );
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
