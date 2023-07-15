/**
 * This function takes in an array of strings details, where each element
 * provides information about a given passenger compressed into a string of
 * length 15. The system is such that:
 *   • The first ten characters consist of the phone number of passengers.
 *   • The next character denotes the gender of the person.
 *   • The following two characters are used to indicate the age of the person.
 *   • The last two characters determine the seat allotted to that person.
 * Returns the number of passengers who areee strictly more than 60 years old.
 * 
 * @param {string[]} details - An array of strings containing passenger details
 * @returns {number} - Returns a count of passengers who are older than 60
 */
function countSeniors (details) {
  let count = 0;
  for (const citizen of details) {
    let age = citizen.slice(11, 13);
    if (Number(age) > 60) {
      count++;
    }
  }
  return count;
}