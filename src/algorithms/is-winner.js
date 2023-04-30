/**
 * This function takes in two integer arrays that represent the number of pins 
 * two players hit in a bowling game. There are a maximum of 10 pins per round 
 * to hit. If a player hits 10 pins in any round, the following two turns are 
 * worth double the amount of hit pins. Otherwise, the player scores the 
 * standard amount of pins.
 *     • Returns 1 if player 1's overall score is greater than player 2's.
 *     • Returns 2 if player 2's overall score is greater than player 1's.
 *     • Returns 0 if there is a tie.
 * 
 * @param {number[]} player1 - A number array of player 1's scores
 * @param {number[]} player2 - A number array of player 2's scores
 * @returns {number} - Returns a number representing the winner of the game
 */
function isWinner (player1, player2) {
  let res = 0;
  let p1Score = playerScore(player1);
  let p2Score = playerScore(player2);
  if (p1Score > p2Score) {
    res = 1;
  } else if (p1Score < p2Score) {
    res = 2;
  }
  return res;
}

/**
 * This function helper adds up a player's score for a bowling game and returns
 * the score.
 * 
 * @param {number[]} scores - An array of numbers representing scores
 * @returns {number} - Returns a sum of numbers representing overall score
 */
function playerScore (scores) {
  let sum = 0;
  let multiplier = 0;
  for (const score of scores) {
    sum += multiplier > 0 ? 2 * score : score;
    multiplier--;
    if (score === 10) {
      multiplier = 2;
    }
  }
  return sum;
}