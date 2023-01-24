/**
 * Sorts and returns the elements of arr1 such that the relative ordering of
 * items in arr1 are the same as in arr2. Elements that do not appear in arr2
 * are placed at the end of arr1 in ascending order.
 * 
 * The elements of arr2 are distinct and all elements in arr2 are also in arr1.
 * 
 * @param {number[]} arr1 - An array of numbers
 * @param {number[]} arr2 - An array of unique numbers that appear in arr1
 * @returns {number[]} - Returns a sorted list
 */
function relativeSortArray (arr1, arr2) {
  let res = [];
  let leftovers = [];
  let charCount = {};
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      charCount[arr1[i]] = (charCount[arr1[i]] || 0) + 1;
    } else {
      leftovers.push(arr1[i]);
    }
  }
  leftovers.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < arr2.length; i++) {
    let j = 0;
    while (j < charCount[arr2[i]]) {
      res.push(arr2[i]);
      j++;
    }
  }
  for (const val of leftovers) {
    res.push(val);
  }
  return res;
}