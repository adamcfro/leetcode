/**
 * Given a 0-indexed string s and a 0-indexed integer array spaces that 
 * describes the indices in the original string where spaces will be added,
 * returns a modified string after the spaces have been added.
 * 
 * For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place 
 * spaces before 'Y' and 'C', which are at indices 5 and 9 respectively. Thus, 
 * we obtain "Enjoy Your Coffee".
 * 
 * @param {string} s - A string of English letters
 * @param {number[]} spaces - An array of numbers that describes where spaces 
 *     should be added in s
 * @returns {string} - Returns a modified string
 */
function addSpaces (s, spaces) {
  let res = '';
  let j = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === spaces[j]) {
      res += ' ';
      j++;
    }
    res += s[i];
  }
  return res;
}