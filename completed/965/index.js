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
var isUnivalTree = function(root) {
  const seen = new Set();

  const dfs = (node) => {
    if (!node) {
      return;
    }

    seen.add(node.val);
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root);

  return seen.size === 1;
};
