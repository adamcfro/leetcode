/**
 * In English, there is a concept called root, which can be followed by some
 * other word to form another longer word - let's call this word successor. For
 * example, when the root "an" is followed by the successor word "other", we
 * can form a new word "another".
 *
 * Given a dictionary consisting of many roots and a sentence consisting of
 * words separated by spaces, replaces all the successors in the sentence with
 * the root forming it. If a successor can be replaced by more than one root,
 * replaces it with the root that has the shortest length.
 *
 * Returns the sentence after the replacement.
 *
 * @format
 * @param {string[]} dictionary - An array of strings of lowercase letters
 * @param {string} sentence - A string of lowercase letters and spaces
 * @returns {string} - Returns a modified string
 */

function replaceWords(dictionary, sentence) {
  sentence = sentence.split(" ");
  for (let i = 0; i < sentence.length; i++) {
    for (const word of dictionary) {
      let len = word.length;
      if (sentence[i].slice(0, len) === word) {
        sentence[i] = word;
      }
    }
  }
  return sentence.join(" ");
}
