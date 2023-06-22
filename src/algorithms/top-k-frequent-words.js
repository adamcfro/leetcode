/**
 * Given an array of strings words and an integer k, returns the k most frequent
 * strings. The answer is sorted by the frequency from highest to lowest. Sorts
 * the words with the same frequency by their lexicographical order.
 * 
 * @param {string[]} words - A string array of lowercase English letters
 * @param {number} k - A number representing the number of strings to return
 * @returns {string[]} - Returns a sorted array of the k most frequent strings
 */
function topKFrequent (words, k) {
  let res = [];
  let temp = [];
  let frequency = {};
  for (const word of words) {
    frequency[word] = (frequency[word] || 0) + 1;
  }
  for (const [key, val] of Object.entries(frequency)) {
    temp.push([key, val]);
  }
  temp.sort(function (a, b) {
    if (a[0] < b[0]) {
      return - 1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });
  temp.sort((a, b) => b[1] - a[1]);
  for (let i = 0; i < k; i++) {
    res.push(temp[i][0]);
  };
  return res;
}