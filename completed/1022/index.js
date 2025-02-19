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
var sumRootToLeaf = function(root) {
  const nums = [];

  const traverse = (node, path) => {
    if (!node) {
      return;
    }

    path += node.val;

    if (!node.left && !node.right) {
      nums.push(path);
      return;
    }

    traverse(node.left, path)
    traverse(node.right, path)
  }

  traverse(root, '')

  return nums.reduce((sum, n) => sum + parseInt(n, 2), 0)
};