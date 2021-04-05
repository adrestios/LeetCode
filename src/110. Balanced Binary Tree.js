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
var isBalanced = function(root) {
  getHeight(root) >= 0;
};

function getHeight(root) {
  if (root === null) {
    return 0;
  }
  let lHeight = getHeight(root.left);
  let rHeight = getHeight(root.right);
  if (lHeight < 0 || rHeight < 0) {
    return -1;
  }
  if (Math.abs(lHeight - rHeight) > 1) {
    return -1;
  }
  return Math.max(lHeight, rHeight) + 1;
}