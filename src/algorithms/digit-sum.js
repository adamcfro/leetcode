/**
 * You are given a string s consisting of digits and an integer k. A round can
 * be completed if the length of s is greater than k. In one round, do the
 * following:
 *   • Divide s into consecutive groups of size k such that the first k
 *     characters are in the first group, the next k characters are in the
 *     second group, and so on. Note that the size of the last group can be
 *     smaller than k.
 *   • Replace each group of s with a string representing the sum of all its
 *     digits. For example, "346" is replaced with "13" because 3 + 4 + 6 = 13.
 *   • Merge consecutive groups together to form a new string. If the length of
 *     the string is greater than k, repeat from step 1.
 * Returns s after all rounds have been completed.
 *
 * @format
 * @param {string} s - A string of digits
 * @param {number} k - A number representing length
 * @return {string} - Returns a string after all rounds have been completed
 */

function digitSum(s, k) {
  while (s.length > k) {
    let mergedString = "";
    let sum = 0;
    let groupSize = 0;
    for (let i = 0; i < s.length; i++) {
      sum += Number(s[i]);
      groupSize++;
      if (groupSize === k) {
        mergedString += String(sum);
        sum = 0;
        groupSize = 0;
      }
    }
    if (groupSize > 0) {
      mergedString += String(sum);
    }
    s = mergedString;
  }
  return s;
}
