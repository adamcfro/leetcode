/**
 * There are n employees in a company, numbered from 0 to n - 1. Each employee 
 * has worked for hours[i] hours in the company. The company requires each 
 * employee to work for at least target hours.
 * 
 * Given a 0-indexed array of non-negative integers hours of length n and a 
 * non-negative integer target, returns the integer denoting the number of 
 * employees who worked at least target hours.
 * 
 * @param {number[]} hours - An array of numbers
 * @param {number} target - A target number for employees to match or surpass
 * @returns {number} - Returns the number of employees who hit target hours
 */
function numberOfEmployeesWhoMetTarget (hours, target) {
  hours.sort((a, b) => {
    return a - b;
  });
  let i = 0;
  while (hours[i] < target) {
    i++;
  }
  return hours.length - i;
}