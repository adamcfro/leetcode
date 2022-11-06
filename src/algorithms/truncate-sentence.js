/**
 * Given a sentence s and an integer k, returns a truncated string such that
 * s contains only the first k words.
 * 
 * A sentence is a list of words that are separated by a single space with
 * no leading or trailing spaces, consisting of only uppercase and lowercase
 * English letters (no punctuation).
 * 
 * @param {string} s - A string of uppercase and lowercase letters
 * @param {number} k - A number representing the first k words of the sentence
 * @returns {string} - Returns a truncated string
 */
function truncateSentence (s, k) {
  s = s.split(' ').splice(0, k);
  return s.join(' ');
}