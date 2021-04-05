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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  function isMatch(a, b) {
      if(a === b && a === null) {
          return true
      }
      if(a === null || b === null) {
          return false;
      }
      return a.val === b.val && isMatch(a.left, b.right) && isMatch(a.right, b.left);
  }
  return isMatch(root.left, root.right);
};