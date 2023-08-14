/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Given the head of a sorted linked list, deletes all duplicates such that each
 * element appears only once, and returns the linked list that has been sorted.
 * 
 * @param {ListNode} head - The head of a linked list
 * @returns {ListNode} - Returns the sorted linked list
 */
function deleteDuplicates (head) {
  let temp = head;
  if (head === null) {
    return head;
  }
  while (temp.next !== null) {
    if (temp.val !== temp.next.val) {
      temp = temp.next;
    } else {
      temp.next = temp.next.next;
    }
  }
  return head;
}