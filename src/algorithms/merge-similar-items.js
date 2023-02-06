/**
 * Given two 2D integer arrays, items1 and items2, representing two sets of 
 * items. Each array items has the following properties:
 *     • items[x] = [valueₓ, weightₓ] of the xth item.
 *     • The value of each item in items is unique.
 * 
 * Returns a 2D integer array where ret[x] = [valueₓ, weightₓ], with weightₓ 
 * being the sum of weights of all items with value valueₓ.
 * 
 * @param {number[][]} items1 - A 2d integer array
 * @param {number[][]} items2 - A 2d integer array
 * @returns {number[][]} - Returns a 2d integer array
 */
function mergeSimilarItems (items1, items2) {
  let hash = {};
  for (let i = 0; i < items1.length; i++) {
    hash[items1[i][0]] = items1[i][1];
  }
  for (let i = 0; i < items2.length; i++) {
    if (hash.hasOwnProperty(items2[i][0])) {
      hash[items2[i][0]] += items2[i][1];
    } else {
      hash[items2[i][0]] = items2[i][1];
    }
  }
  mymap = Object.entries(hash);
  return mymap;
}