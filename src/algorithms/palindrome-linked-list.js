/**
 * Definition for singly-linked list.
 * @format
 *
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Given the head of a singly linked list, return true if it is a
 * palindrome or false otherwise.
 *
 * @param {ListNode} head - The head of a singly linked list
 * @returns {boolean} - Returns true if the linked list is a palindrome
 */
function isPalindrome(head) {
  let listCopy = [];
  let current = head;
  while (current !== null) {
    listCopy.push(current.val);
    current = current.next;
  }
  let front = 0;
  let back = listCopy.length - 1;
  while (front < back) {
    if (listCopy[front] !== listCopy[back]) {
      return false;
    }
    front++;
    back--;
  }
  return true;
}
