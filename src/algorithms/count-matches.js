/**
 * Given an array items, where each items[i] = [type, color, name] describes
 * the ith item, and a rule represented by two strings, ruleKey and ruleValue,
 * the ith item is said to match the rule if one of the following is true:
 *     • ruleKey == "type" and ruleValue == typei.
 *     • ruleKey == "color" and ruleValue == colori.
 *     • ruleKey == "name" and ruleValue == namei.
 * Returns the number of items that match the given rule.
 * 
 * @param {string[][]} items - A 2D array of strings
 * @param {string} ruleKey - A string representing the first part of a rule
 * @param {string} ruleValue - A string representing the second part of a rule
 * @returns {number} - Returns a count of items that match the given rule
 */
function countMatches (items, ruleKey, ruleValue) {
  let matches = 0;
  for (let i = 0; i < items.length; i++) {
    if (ruleKey === 'type') {
      if (items[i][0] === ruleValue) {
        matches++;
      }
    } else if (ruleKey === 'color') {
      if (items[i][1] === ruleValue) {
        matches++;
      }
    } else if (ruleKey === 'name') {
      if (items[i][2] === ruleValue) {
        matches++;
      }
    }
  }
  return matches;
}