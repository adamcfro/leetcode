/**
 * Given an array paths, where paths[i] = [cityA1, cityB1] means there exists
 * a direct path going from cityA1 to cityB1, returns the destination city.
 * 
 * The destination city is the city without any path outgoing to another city.
 * 
 * @param {string[][]} paths - A 2d array of strings representing cities
 * @returns {string} - Returns the destination city
 */
function destCity (paths) {
  let cities = new Set();
  let res = '';
  for (let i = 0; i < paths.length; i++) {
    cities.add(paths[i][0]);
  }
  for (let i = 0; i < paths.length; i++) {
    if (!cities.has(paths[i][paths[i].length - 1])) {
      res = paths[i][paths[i].length - 1];
    }
  }
  return res;
}