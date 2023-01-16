/**
 * This function takes in an integer array score, where all scores are unique,
 * and returns an array where res[i] is the rank of the ith athlete.
 *     • The 1st place athlete's rank is "Gold Medal".
 *     • The 2nd place athlete's rank is "Silver Medal".
 *     • The 3rd place athlete's rank is "Bronze Medal".
 *     • For all other athletes, their rank is their placement number.
 * 
 * @param {number[]} score - An array of numbers representing athlete placement
 * @returns {string[]} - Returns an array of strings denoting the ranks of
 *     the athletes from the competition
 */
function findRelativeRanks (score) {
  let res = [];
  let hash = {};
  let sortedScores = [...score];
  sortedScores.sort((a, b) => {
    return b - a;
  });
  for (let i = 0; i < sortedScores.length; i++) {
    if (i === 0) {
      hash[sortedScores[i]] = 'Gold Medal';
    } else if (i === 1) {
      hash[sortedScores[i]] = 'Silver Medal';
    } else if (i === 2) {
      hash[sortedScores[i]] = 'Bronze Medal';
    } else {
      hash[sortedScores[i]] = String(i + 1);
    }
  }
  for (const elem of score) {
    res.push(hash[elem]);
  }
  return res;
}