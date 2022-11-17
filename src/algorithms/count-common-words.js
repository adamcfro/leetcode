/**
 * Given two string arrays words1 and words2, returns the number of strings
 * that appear exactly once in each of the two arrays.
 * 
 * @param {string[]} words1 - First array of strings
 * @param {string[]} words2 - Second array of strings
 * @returns {number} - Returns a count of strings that appear exactly once
 *     in each array
 */
function countWords (words1, words2) {
  let count = 0;
  let words1Count = {};
  let words2Count = {};
  for (let i = 0; i < words1.length; i++) {
    words1Count[words1[i]] = (words1Count[words1[i]] || 0) + 1;
  }
  for (let i = 0; i < words2.length; i++) {
    words2Count[words2[i]] = (words2Count[words2[i]] || 0) + 1;
  }
  for (const key in words1Count) {
    if (words2Count.hasOwnProperty(key)) {
      if (words1Count[key] === 1 && words2Count[key] === 1) {
        count++;
      }
    }
  }
  return count;
}