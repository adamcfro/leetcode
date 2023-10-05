/**
 * Given an array of integers citations where citations[i] is the number of 
 * citations a researcher received for their ith paper, returns the 
 * researcher's h-index.
 * 
 * The h-index is defined as the maximum value of h such that the given 
 * researcher has published at least h papers that have each been cited at 
 * least h times.
 * 
 * @param {number[]} citations - An array of numbers
 * @returns {number} - Returns a number representing the h-index
 */
function hIndex (citations) {
  let res = 0;
  let size = citations.length;
  citations.sort((a, b) => a - b);
  for (let i = 0; i < size; i++) {
    res = Math.max(res, Math.min(citations[i], size - i));
  }
  return res;
}