/**
 * Given a 0-indexed string s typed by a user, returns the number of times the
 * user had to change the key.
 *
 * Changing a key is defined as using a key different from the last used key.
 * For example, s = "ab" has a change of a key while s = "bBBb" does not have
 * any.
 *
 * Note: Modifiers like shift or caps lock won't be counted in changing the key
 * that is if a user typed the letter 'a' and then the letter 'A' then it will
 * not be considered as a changing of key.
 *
 * @format
 * @param {string} s - A string of English letters
 * @returns {number} - Returns a count of key changes
 */

function countKeyChanges(s) {
  let count = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1].toLowerCase() !== s[i].toLowerCase()) {
      count++;
    }
  }
  return count;
}
