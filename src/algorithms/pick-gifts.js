/**
 * You are given an integer array gifts denoting the number of gifts in various
 * piles. Every second, you do the following:
 *   • Choose the pile with the maximum number of gifts.
 *   • If there is more than one pile with the maximum number of gifts, choose
 *     any.
 *   • Leave behind the floor of the square root of the number of gifts in the
 *     pile. Take the rest of the gifts.
 * Return the number of gifts remaining after k seconds.
 *
 * @format
 * @param {number[]} gifts - An array of numbers representing gifts
 * @param {number} k - A number representing seconds
 * @return {number} - Returns the number of gifts remaining after k seconds
 */

function pickGifts(gifts, k) {
  let numGifts = 0;
  for (let i = 0; i < k; i++) {
    gifts.sort((a, b) => b - a);
    gifts[0] = Math.floor(Math.sqrt(gifts[0]));
  }
  for (let num of gifts) {
    numGifts += num;
  }
  return numGifts;
}
