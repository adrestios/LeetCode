/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  function isMatch(a, b) {
    if (b === null) {
      return true;
    }
    if (a === null) {
      return false;
    }
    return a.val === b.val && isMatch(a.left, b.left) && isMatch(a.right, b.right);
  }
  if (B === null || A === null) {
    return false;
  }
  if (isMatch(A, B)) {
    return true
  }
  return isSubStructure(A.left, B) || isSubStructure(A.right, B);
};