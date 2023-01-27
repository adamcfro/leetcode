/**
 * // This is the ImmutableListNode's API interface.
 * // You should not implement it, or speculate about its implementation.
 * 
 * An interface of immutable linked list, you are given the head of the list.
 * The following functions are used to access the linked list:
 *     • ImmutableListNode.printValue(): Print value of the current node.
 *     • ImmutableListNode.getNext(): Return the next node.
 * 
 * function ImmutableListNode() {
 *    @ return {void}
 *    this.printValue = function() { // print the value of this node.
 *       ...
 *    }; 
 *
 *    @return {ImmutableListNode}
 *    this.getNext = function() { // return the next node.
 *       ...
 *    };
 * };
 */

/**
 * Given an immutable linked list, prints out all values of each node in reverse
 * with the help of the ImmutableListNode interface.
 * 
 * @param {ImmutableListNode} head
 * @return {void}
 */
var printLinkedListInReverse = function(head) {
  if (head.getNext() !== null) {
    printLinkedListInReverse(head.getNext());
  }
  head.printValue();
};