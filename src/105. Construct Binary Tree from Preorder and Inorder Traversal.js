/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  const map = new Map();
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  function _buildTree(pStart, pEnd, iStart, iEnd) {
    if (pStart > pEnd) {
      return null;
    }
      console.log(pStart, pEnd, iStart, iEnd)
    let root = new TreeNode(preorder[pStart]);
    let middle = map.get(preorder[pStart])
    let leftLength = middle - iStart;
    root.left = _buildTree(pStart + 1, pStart + leftLength, iStart, middle - 1);
    root.right = _buildTree(pStart + leftLength + 1, pEnd, middle + 1, iEnd);
    return root;
  }
  return _buildTree(0, preorder.length - 1, 0, inorder.length - 1);
};