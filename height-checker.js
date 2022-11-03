/**
 * Students are supposed to be standing in non-decreasing order by height.
 * Given an integer array heights representing the current order that students
 * are standing in, returns a count of the students who are not in their
 * expected position.
 * 
 * @param {number[]} heights - An array of numbers representing heights
 * @returns {number} - Returns a count of students who are out of order
 */
function heightChecker (heights) {
  let wrongIndices = 0;
  let actualHeights = [...heights];
  let expected = heights.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < heights.length; i++) {
    if (actualHeights[i] !== expected[i]) {
      wrongIndices++;
    }
  }
  return wrongIndices;
}