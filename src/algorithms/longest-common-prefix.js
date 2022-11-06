/**
 * A function that finds the longest common prefix string amongst an array
 * of strings. If there is no common prefix, returns an empty string.
 * 
 * @param {Array} strs - An array of strings
 * @returns {string} - Returns the longest common prefix amongst the strs array
 */
function longestCommonPrefix (strs) {
  if (strs.length === 0 || strs === null) {
    return '';
  }
  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i === strs[j].length || strs[j][i] !== char) {
        return strs[0].substring(0, i);
      }
    }
  }
  return strs[0];
}