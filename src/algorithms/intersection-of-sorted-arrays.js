/**
 * Given three integer arrays sorted in strictly increasing order,
 * returns a sorted array of only the integers that appeared in all 3 arrays.
 * 
 * @param {number[]} arr1 - First array of numbers
 * @param {number[]} arr2 - Second array of numbers
 * @param {number[]} arr3 - Third array of numbers
 * @returns {number[]} - Returns intersection of arrays
 */
function arraysIntersection (arr1, arr2, arr3) {
  let intersection = [];
  let i = 0;
  let j = 0;
  let k = 0;
  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr1[i] === arr3[k]) {
      intersection.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }
  return intersection;
}