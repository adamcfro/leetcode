/**
 * Given an array of unique integers salary where salary[i] is the salary of the
 * ith employee, returns the average salary of employees excluding the minimum
 * and maximum salary.
 * 
 * @param {number[]} salary - An array of numbers
 * @returns {number} - Returns the mean average excluding min and max numbers
 *     from the array parameter
 */
function average (salary) {
  let sum = 0;
  salary.sort((a, b) => {
    return a - b;
  });
  for (let i = 1; i < salary.length - 1; i++) {
    sum += salary[i];
  }
  return sum / (salary.length - 2);
}