/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root, k = 0, array = []) {
  if (root === null) {
    return array;
  }
  
  if (k === array.length && !array[k]) {
    array.unshift([])
  }
  array[array.length - 1 - k].push(root.val);
  levelOrderBottom(root.left, k+1, array);
  levelOrderBottom(root.right, k+1, array);
  return array;
};