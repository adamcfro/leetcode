/**
 * Given the root of a binary tree that consists of exactly 3 nodes: the root,
 * its left child, and its right child, returns true if the value of the root
 * is equal to the sum of the values of its two children, or false otherwise.
 * 
 * Definition for a binary tree node:
 * function TreeNode(val, left, right) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.left = (left===undefined ? null : left)
 *   this.right = (right===undefined ? null : right)
 * }
 *
 * @param {TreeNode} root - The root of a binary tree consisting of 3 nodes
 * @returns {boolean} - Returns true if the child nodes sum to the root node
 */
function checkTree (root) {
  return root.val === root.left.val + root.right.val;
}