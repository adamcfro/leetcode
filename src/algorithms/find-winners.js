/**
 * Given an integer array matches where matches[i] = [winner, loser] indicates
 * that the player winner defeated player loser in a match, returns a list
 * of size 2 where res[0] is a list of all players who have not lost any matches
 * and res[1] is a list of all players who have lost exactly one match. The
 * values in the two lists are returned in increasing order.
 * 
 * @param {number[][]} matches - An array of number arrays
 * @returns {number[][]} - Returns an array of arrays
 */
function findWinners (matches) {
  let res = [[], []];
  let matchOutcomes = {};
  for (let i = 0; i < matches.length; i++) {
    if (!matchOutcomes[matches[i][0]]) {
      matchOutcomes[matches[i][0]] = 0;
    }
    matchOutcomes[matches[i][1]] = (matchOutcomes[matches[i][1]] || 0) + 1;
  }
  for (const [key, val] of Object.entries(matchOutcomes)) {
    if (val === 0) {
      res[0].push(key);
    } else if (val === 1) {
      res[1].push(key);
    }
  }
  return res;
}