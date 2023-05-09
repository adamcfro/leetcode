/**
 * Given strings sequence and word, returns the maximum k-repeating value of
 * word in sequence.
 * 
 * A string word is k-repeating if word concatenated k times is a substring of
 * sequence. The word's maximum k-repeating value is the highest value k where
 * word is k-repeating in sequence. If word is not a substring of sequence,
 * word's maximum k-repeating value is 0.
 * 
 * @param {string} sequence - A string of lowercase English letters
 * @param {string} word - A possible substring of sequence
 * @returns {number} - Returns word's maximum k-repeating value in sequence
 */
function maxRepeating (sequence, word) {
  let res = 0;
  while (sequence.includes(word.repeat(res + 1))) {
    res++;
  }
  return res;
}