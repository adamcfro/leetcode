/**
 * Given an array of n strings all of the same length, counts the columns that
 * are not sorted lexicographically and returns the number of columns that
 * should be deleted.
 * 
 * @param {string[]} strs - An array of strings made up of English letters
 * @returns {number} - Returns a count of columns that are not sorted
 */
function minDeletionSize (strs) {
  let res = 0;
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] < strs[j - 1][i]) {
        res++;
        break;
      }
    }
  }
  return res;
}