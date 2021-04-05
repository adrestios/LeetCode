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
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
  if (root === null) {
    return 0;
  }
  let max = 1; 
  let queue = [[root, 0]]
  while(queue.length) {
    let width = queue[queue.length - 1][1] - queue[0][1] + 1;
    max = Math.max(max, width);
    let temp = [];
    for (let i = 0; i < queue.length; i++) {
      queue[i][0].left && temp.push([queue[i][0].left, (queue[i][1] - queue[0][1]) * 2]);
      queue[i][0].right && temp.push([queue[i][0].right, (queue[i][1] - queue[0][1]) * 2 + 1]);
    }
    queue = temp;
  }
  return max;
};