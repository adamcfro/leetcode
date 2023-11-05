/**
 * Given an integer array arr of distinct integers and an integer k, a game
 * will be played between the first two elements of the array (i.e. arr[0] and
 * arr[1]). In each round of the game, we compare arr[0] with arr[1], the
 * larger integer wins and remains at position 0, and the smaller integer moves
 * to the end of the array. The game ends when an integer wins k consecutive
 * rounds.
 *
 * Returns the integer which will win the game. It is guaranteed that there
 * will be a winner of the game.
 *
 * @format
 * @param {number[]} arr - An array of numbers
 * @param {number} k - A number of rounds to win
 * @returns {number} - Returns the integer which will win the game
 */

function getWinner(arr, k) {
  const maxNum = Math.max(...arr);
  let wins = 0;
  let curr = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (curr > arr[i]) {
      wins++;
    } else {
      curr = arr[i];
      wins = 1;
    }
    if (wins === k || curr === maxNum) {
      return curr;
    }
  }
}
