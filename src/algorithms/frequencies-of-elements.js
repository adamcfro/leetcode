/**
 * Given the head of a linked list containing k distinct elements, return the
 * head to a linked list of length k containing the frequency of each distinct
 * element in the given linked list in any order.
 *
 * @format
 * @param {ListNode} head - The head of a linked list
 * @returns {ListNode} - Returns the head of a linked list
 */

function frequenciesOfElements(head) {
  let frequencies = {};
  let current = head;
  while (current !== null) {
    frequencies[current.val] = (frequencies[current.val] || 0) + 1;
    current = current.next;
  }
  let resHead = null;
  let resCurr = null;
  for (const val of Object.values(frequencies)) {
    if (!resHead) {
      resHead = new ListNode(val);
      resCurr = resHead;
    } else {
      resCurr.next = new ListNode(val);
      resCurr = resCurr.next;
    }
  }
  return resHead;
}
