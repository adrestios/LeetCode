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
var zigzagLevelOrder = function(root, k = 0, array = []) {
  if (root === null) {
    return array;
  }
  if (k === array.length && !array[k]) {
    array.push([]);
  }

  k % 2 === 0 ? array[k].push(root.val) : array[k].unshift(root.val);

  zigzagLevelOrder(root.left, k+1, array);
  zigzagLevelOrder(root.right, k+1, array);
  return array;
};