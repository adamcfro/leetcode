/**
 * You are given a string moves of length n consisting only of characters 'L',
 * 'R', and '_'. The string represents your movement on a number line starting
 * from the origin 0. In the ith move, you can choose one of the following
 * directions:
 *   • move to the left if moves[i] = 'L' or moves[i] = '_'
 *   • move to the right if moves[i] = 'R' or moves[i] = '_'
 * Return the distance from the origin of the furthest point you can get to
 * after n moves.
 *
 * @format
 * @param {string} moves - A string of the characters "L",  "R" and "_"
 * @returns {number} - Returns the furthest distance from origin achievable
 */

function furthestDistanceFromOrigin(moves) {
  let point = 0;
  let extraMoves = 0;
  for (const char of moves) {
    if (char === "L") {
      point--;
    } else if (char === "R") {
      point++;
    } else {
      extraMoves++;
    }
  }
  if (point >= 0) {
    point += extraMoves;
  } else {
    point -= extraMoves;
  }
  return Math.abs(point);
}
