/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root, array = []) {
  if (root === null) {
    return array;
  }
  array.push(root.val);
  for(let node of root.children) {
    preorder(node, array);
  }
  return array;
};