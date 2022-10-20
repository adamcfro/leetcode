/**
 * Given a string s and an integer array indices of the same length,
 * returns a new string where s is shuffled such that the character
 * at the ith position moves to indices[i] in the shuffled string.
 * 
 * @param {string} s - A string parameter
 * @param {number[]} indices - An array of numbers representing indices
 * @returns {string} - Returns a shuffled string
 */
function restoreString (s, indices) {
  let shuffledStr = '';
  let shuffledArr = new Array(indices.length);
  for (let i = 0; i < s.length; i++) {
    shuffledArr[indices[i]] = s[i];
  }
  for (let i = 0; i < shuffledArr.length; i++) {
    shuffledStr += shuffledArr[i];
  }
  return shuffledStr;
}