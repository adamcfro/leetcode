/**
 * Given a robot's starting position of [0, 0], returns true if after the
 * given sequence of moves, the robot ends up back at [0, 0].
 * 
 * The string moves represents the move sequence of the robot where moves[i]
 * represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up),
 * and 'D' (down).
 * 
 * @param {string} moves - A string representing movable directions
 * @returns {boolean} - Returns true if the robot ends up back at its origin
 */
function judgeCircle (moves) {
  let position = [0, 0];
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'U') {
      position[0] += 1;
    } else if (moves[i] === 'D') {
      position[0] -= 1;
    } else if (moves[i] === 'L') {
      position[1] -= 1;
    } else {
      position[1] += 1;
    }
  }
  return JSON.stringify(position) === JSON.stringify([0, 0]);
}