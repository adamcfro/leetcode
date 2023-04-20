/**
 * Given a string array words, returns the number of pairs of strings in words
 * that consist of the same characters.
 * 
 * @param {string[]} words - An array of strings
 * @returns {number} - Returns a count of similar pairs of strings
 */
function similarPairs (words) {
  let count = 0;
  let results = [];
  for (let i = 0; i < words.length; i++) {
    const tempSet = new Set(words[i]);
    results.push(tempSet);
  }
  for (let i = 0; i < results.length - 1; i++) {
    for (let j = i + 1; j < results.length; j++) {
      if (areSetsEqual(results[i], results[j])) {
        count++;
      }
    }
  }
  return count;
}

/**
 * This function takes in two sets and checks if they contain the same elements.
 * Returns true if sets are equivalent.
 * 
 * @param {Set<string>} set1 - A set of lowercase English letters
 * @param {Set<string>} set2 - Second set of lowercase English letters
 * @returns {boolean} - Returns true if sets contain same elements
 */
function areSetsEqual (set1, set2) {
  return set1.size === set2.size &&
  [...set1].every((val) => set2.has(val));
}