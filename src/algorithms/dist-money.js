/**
 * Given an integer money denoting an amount of money (in dollars) and an 
 * integer children denoting the number of children that money must be 
 * distributed to, the money must be distributed according to the following 
 * rules:
 *     • All money must be distributed.
 *     • Everyone must receive at least 1 dollar.
 *     • Nobody receives 4 dollars.
 * 
 * Returns the maximum number of children who may receive exactly 8 dollars if 
 * the money is distributed according to the rules. If there is no way to 
 * distribute the money, returns -1.
 * 
 * @param {number} money - A number representing money in dollars
 * @param {number} children - A number representing how many children there are
 * @returns {number} - Returns a count of children who receive exactly 8 dollars
 */
function distMoney (money, children) {
  money -= children;
  if (money < 0) {
    return -1;
  }
  if (Math.floor(money / 7) === children && money % 7 === 0) {
    return children;
  }
  if (Math.floor(money / 7) === children - 1 && money % 7 === 3) {
    return children - 2;
  }
  return Math.min(children - 1, Math.floor(money / 7));
}