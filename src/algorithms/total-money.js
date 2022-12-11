/**
 * A person puts money into a bank every day. They start by putting $1 in on
 * Monday, the first day. Every day from Tuesday to Sunday, they will put $1
 * more than the day before. On every subsequent Monday, they will put in $1
 * more than the previous Monday.
 * 
 * Given a number n, returns the totat amount of money in the bank at the end
 * of the nth day.
 * 
 * @param {number} n - A number of days
 * @returns {number} - Returns the amount of money in the bank
 */
function totalMoney (n) {
  let savedMoney = 0;
  for (let i = 0; i < n; i++) {
    let day = i % 7;
    let week = Math.floor(i / 7);
    savedMoney += 1 + day + week;
  }
  return savedMoney;
}