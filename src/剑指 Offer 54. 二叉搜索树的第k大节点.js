/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let res;
  function _kthLargest(root) {
    if (root === null) {
      return;
    }
    _kthLargest(root.right);
    if (--k === 0) {
      res = root.val
    }
    _kthLargest(root.left)
  }
  _kthLargest(root);
  return res;
};