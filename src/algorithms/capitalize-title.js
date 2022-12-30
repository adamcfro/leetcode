/**
 * Given a string title consisting of one or more words separated by a single
 * space, where each word consists of English letters, capitalizes the string
 * by changing the capitalization of each word such that:
 *     • if the length of the word is 1 or 2 letters, changes all the letters
 *       to lowercase.
 *     • otherwise, changes the first letter to uppercase and the remaining
 *       letters to lowercase.
 * Returns the capitalized parameter title.
 * 
 * @param {string} title - A string of English letters
 * @returns {string} - Returns a modified string
 */
function capitalizeTitle (title) {
  title = title.split(' ');
  for (let i = 0; i < title.length; i++) {
    if (title[i].length > 2) {
      title[i] = (
        title[i].charAt(0).toUpperCase() + title[i].slice(1).toLowerCase()
      );
    } else {
      title[i] = title[i].toLowerCase();
    }
  }
  title = title.join(' ');
  return title;
}