/**
 * You are given the strings key and message, which represent a cipher key and
 * a secret message, respectively. The steps to decode message are as follows:
 *   • Use the first appearance of all 26 lowercase English letters in key as
 *     the order of the substitution table.
 *   • Align the substitution table with the regular English alphabet.
 *   • Each letter in message is then substituted using the table.
 *   • Spaces ' ' are transformed to themselves.
 * For example, given key = "happy boy" (actual key would have at least one
 * instance of each letter in the alphabet), we have the partial substitution
 * table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' ->
 * 'f').
 *
 * Returns the decoded message.
 *
 * @format
 * @param {string} key - A string of lowercase English letters representing a
 *     cipher
 * @param {string} message - A string of lowercase English letters representing
 *     an encoded message
 * @returns {string} - Returns a decoded string
 */

function decodeMessage(key, message) {
  let res = "";
  let mapping = {};
  let currentChar = 97;
  for (let i = 0; i < key.length; i++) {
    if (!mapping[key[i]] && key[i] !== " ") {
      mapping[key[i]] = String.fromCharCode(currentChar);
      currentChar++;
    }
  }
  for (let i = 0; i < message.length; i++) {
    if (message[i] === " ") {
      res += " ";
    } else {
      res += mapping[message[i]];
    }
  }
  return res;
}
