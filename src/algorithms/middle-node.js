/**
 * This function takes in the head of a singly linked list, and returns the
 * middle node of the linked list. If there are two middle nodes, returs the
 * second middle node.
 * 
 * @param {ListNode} head - The heead of a singly linked list
 * @returns {ListNode} - Returns the middle node of the linked list
 */
function middleNode (head) {
  let middle = head;
  let end = head;
  while (end !== null && end.next !== null) {
    middle = middle.next;
    end = end.next.next;
  }
  return middle;
}