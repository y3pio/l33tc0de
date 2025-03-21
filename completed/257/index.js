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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root.left && !root.right) {
    return [`${root.val}`]
  }

  const result = new Set();
  const generatePath = (node, path) => {
    if (!node.left && !node.right) {
      result.add(`${path}->${node.val}`);
      return;
    }

    node.left && generatePath(node.left, `${path}->${node.val}`)
    node.right && generatePath(node.right, `${path}->${node.val}`)
  }

  root.left && generatePath(root.left, `${root.val}`)
  root.right && generatePath(root.right, `${root.val}`)

  return Array.from(result);
};