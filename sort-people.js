/**
 * Given an array of strings names and a corresponding array heights that
 * consists of distinct positive integers, returns a new array of names
 * sorted in descending order by the people's heights.
 * 
 * @param {string[]} names - An array of people's names
 * @param {number[]} heights - An array of people's heights
 * @returns {string[]} - Returns an array of the names of people in 
 *     descending order based on height
 */
function sortPeople (names, heights) {
  let tempArr = [];
  for (let i = 0; i < names.length; i++) {
    tempArr.push([names[i], heights[i]]);
  }
  tempArr.sort(function(a, b) {
    return b[1] - a[1];
  })
  let sortedHeights = [];
  for (let i = 0; i < tempArr.length; i++) {
    sortedHeights.push(tempArr[i][0]);
  }
  return sortedHeights;
}