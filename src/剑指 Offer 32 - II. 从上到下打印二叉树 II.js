/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, k = 0, array = []) {
  if (root === null) {
    return array;
  }
  if (k === array.length && !array[k]) {
    array[k] = [];
  }
  array[k].push(root.val);
  levelOrder(root.left, k+1, array);
  levelOrder(root.right, k+1, array);
  return array;
};