/**
 * This function takes in two strings, ransomNote and magazine, and returns
 * true if ransomNote can be constructed by using the letters from magazine.
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * @param {string} ransomNote - A string of lowercase English letters
 * @param {string} magazine - A string of lowercase English letters
 * @returns {boolean} - Returns true if ransomNote can be constructed by using
 *     the letters from magazine
 */
function canConstruct (ransomNote, magazine) {
  let hashmap = {};
  for (let i = 0; i < magazine.length; i++) {
    hashmap[magazine[i]] = (hashmap[magazine[i]] || 0) + 1;
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (hashmap[ransomNote[i]] > 0) {
      hashmap[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  return true;
}