/**
 * You are given a string text of words that are placed among some number of
 * spaces. Each word consists of one or more lowercase English letters and are
 * separated by at least one space. It's guaranteed that text contains at least
 * one word.
 *
 * Rearrange the spaces so that there is an equal number of spaces between
 * every pair of adjacent words and that number is maximized. If you cannot
 * redistribute all the spaces equally, place the extra spaces at the end,
 * meaning the returned string should be the same length as text.
 *
 * Return the string after rearranging the spaces.
 *
 * @format
 * @param {string} text - A string of lowercase English letters and empty spaces
 * @returns {string} - Returns a string after rearranging the spaces
 */

function reorderSpaces(text) {
  let res = "";
  let spaces = 0;
  for (const char of text) {
    if (char === " ") {
      spaces++;
    }
  }
  text = text.split(" ");
  text = text.filter((elem) => elem);
  let spacesBetweenWords = Math.floor(spaces / (text.length - 1));
  for (const word of text) {
    res += word;
    if (spaces > 0 && spaces >= spacesBetweenWords) {
      res += " ".repeat(spacesBetweenWords);
      spaces -= spacesBetweenWords;
    }
  }
  if (spaces > 0) {
    res += " ".repeat(spaces);
  }
  return res;
}
