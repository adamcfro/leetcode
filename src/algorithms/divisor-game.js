/**
 * Alice and Bob take turns playing a game, with Alice starting first. Initially
 * there is a number n on the chalkboard. On each player's turn, that player
 * makes a move consisting of:
 *   • choosing any x with 0 < x < n and n % x === 0.
 *   • replacing the number n on the chalkboard with n - x.
 * Also, if a player cannot make a move, they lose the game.
 * 
 * Returns true if and only if Alice wins the game, assuming both players play
 * optimally.
 * 
 * @param {number} n - The upper limit of a range
 * @returns {boolean} - Returns true if Alice wins
 */
function divisorGame (n) {
  return n % 2 === 0;
}