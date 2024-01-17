/**
 * International Morse Code defines a standard encoding where each letter is
 * mapped to a series of dots and dashes, as follows:
 *   • 'a' maps to ".-",
 *   • 'b' maps to "-...",
 *   • 'c' maps to "-.-.", and so on.
 * For example, "cab" can be written as "-.-..--...", which is the
 * concatenation of "-.-.", ".-", and "-...". We will call such a concatenation
 * the transformation of a word.
 *
 * Given an array of strings words where each word can be written as a
 * concatenation of the Morse code of each letter, returns the number of
 * different transformations among all parameter words.
 *
 * @format
 * @param {string[]} words - An array of strings consisting of lowercase English letters
 * @returns {number} - Returns the number of different transformations among all words
 */

function uniqueMorseRepresentations(words) {
  const morseCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
  };
  let temp = "";
  let seen = new Set();
  for (const word of words) {
    for (const char of word) {
      temp += morseCode[char];
    }
    seen.add(temp);
    temp = "";
  }
  return seen.size;
}
