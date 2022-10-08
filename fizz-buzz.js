/**
 * Given an integer n, returns a string array answer (1-indexed) Where:
 *  • answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
 *  • answer[i] == "Fizz" if i is divisible by 3.
 *  • answer[i] == "Buzz" if i is divisible by 5.
 *  • answer[i] == i (as a string) if none of the above conditions are true.

 * 
 * @param {number} n - A number denoting the top end of a range
 * @returns {string[]} - Returns an array of strings
 */
function fizzBuzz (n) {
  let fizzArr = [];
  const hash = {3: 'Fizz', 5: 'Buzz'};
  const divisors = [3, 5];
  for (let i = 1; i < n + 1; i++) {
    let answer = '';
    for (const key in divisors) {
      if (i % divisors[key] === 0) {
        answer += (hash[divisors[key]]);
      }
    }
    if (answer.length === 0) {
      answer += (String(i));
    }
    fizzArr.push(answer);
  }
  return fizzArr;
}