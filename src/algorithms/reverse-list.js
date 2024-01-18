/**
 * @format
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Given the head of a singly linked list, reverses the list, and returns the
 * reversed list.
 *
 * @param {ListNode} head - A linked list containing numbers
 * @return {ListNode} - Returns a modified linked list
 */
function reverseList(head) {
  let previous = null;
  let current = head;
  while (current !== null) {
    temp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
}
