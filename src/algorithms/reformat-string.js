/**
 * This function takes an alphanumeric string s and finds a permutation of the
 * string where no letter is followed by another letter and no digit is followed
 * by another digit. Returns the reformatted string or returns an empty string
 * if it is impossible to reformat the string.
 * 
 * @param {string} s - A string of lowercase English letters and digits
 * @returns {string} - Returns a reformatted string
 */
function reformat (s) {
  let res = '';
  let letters = '';
  let numbers = '';
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      letters += s[i];
    } else {
      numbers += s[i];
    }
  }
  if (Math.abs(letters.length - numbers.length) > 1) {
    return '';
  }
  let i = 0;
  let j = 0;
  let k = 0;
  let alpha = letters.length > numbers.length ? true : false;
  while (i < s.length) {
    if (alpha) {
      res += letters[j];
      j++;
    } else {
      res += numbers[k];
      k++;
    }
    i++;
    alpha = !alpha;
  }
  return res;
}