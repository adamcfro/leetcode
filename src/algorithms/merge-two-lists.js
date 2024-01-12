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
 * Given the heads of two sorted linked lists list1 and list2, merges the two
 * lists into one sorted list. The list should be made by splicing together the
 * nodes of the first two lists.
 *
 * Returns the head of the merged linked list.
 *
 * @param {ListNode} list1 - First linked list
 * @param {ListNode} list2 - Second linked list
 * @return {ListNode} - Returns the head of the merged linked list
 */
function mergeTwoLists(list1, list2) {
  if (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      list1.next = mergeTwoLists(list1.next, list2);
      return list1;
    } else {
      list2.next = mergeTwoLists(list1, list2.next);
      return list2;
    }
  }
  if (list1 === null) {
    return list2;
  } else {
    return list1;
  }
}
