/**
 * You are given an array apple of size n and an array capacity of size m.
 * There are n packs where the ith pack contains apple[i] apples. There are m
 * boxes as well, and the ith box has a capacity of capacity[i] apples.
 *
 * Return the minimum number of boxes you need to select to redistribute these
 * n packs of apples into boxes.
 *
 * Note that, apples from the same pack can be distributed into different boxes.
 *
 * @format
 * @param {number[]} apple - An array of numbers representing apples
 * @param {number[]} capacity - An array of numbers representing capacity
 * @returns {number} - Returns the minimum number of boxes to pack apples into
 */

function minimumBoxes(apple, capacity) {
  let res = 0;
  let sum = apple.reduce((acc, current) => acc + current, 0);
  capacity.sort((a, b) => b - a);
  for (let i = 0; i < capacity.length; i++) {
    res++;
    sum -= capacity[i];
    if (sum <= 0) {
      break;
    }
  }
  return res;
}
