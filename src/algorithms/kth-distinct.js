/**
 * Given an array of strings arr and an integer k, returns the kth distinct
 * string present in arr. If there are fewer than k distinct strings, returns
 * an empty string ''.
 * 
 * A distinct string is a string that is present only once in an array.
 * 
 * @param {string[]} arr - An array of strings
 * @param {number} k - The k distinct string to appear
 * @returns {string} - Returns the kth distinct string
 */
function kthDistinct (arr, k) {
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = (map[arr[i]] || 0) + 1;
  }
  for (const [key, val] of Object.entries(map)) {
    if (val === 1) {
      res.push(key);
    }
  }
  return res[k - 1] || '';
}