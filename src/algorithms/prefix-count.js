/**
 * Given an array of strings words and a string pref, returns the number of
 * strings in words that contain pref as a prefix.
 * 
 * @param {string[]} words - An array of strings
 * @param {string} pref - A string prefix
 * @returns {number} - Returns a count of strings that contain pref as a prefix
 */
function prefixCount (words, pref) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].substring(0, pref.length) === pref) {
      count++;
    }
  }
  return count;
}