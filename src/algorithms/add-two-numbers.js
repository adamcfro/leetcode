/**
 * @format
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Given two non-empty linked lists representing two non-negative integers
 * where the digits are stored in reverse order and each of their nodes
 * contains a single digit, adds the two numbers and returns the sum as a
 * linked list.
 *
 * @param {ListNode} l1 - First linked list
 * @param {ListNode} l2 - Second linked list
 * @return {ListNode} - Returns the sum of two lists as a new linked list
 */
function addTwoNumbers(l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;
  while (l1 !== null || l2 !== null || carry !== 0) {
    let val1 = l1 !== null ? l1.val : 0;
    let val2 = l2 !== null ? l2.val : 0;
    let sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    l1 = l1 !== null ? l1.next : l1;
    l2 = l2 !== null ? l2.next : l2;
  }
  return dummyHead.next;
}
