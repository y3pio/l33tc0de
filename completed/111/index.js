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
var minDepth = function(root) {
  if (!root) {
    return 0;
  } else if (!root.right && !root.left) {
    return 1;
  }

  let minCandidate = Infinity;

  const dfs = (node, level) => {
    if (!node) {
      return;
    }

    if (!node.left && !node.right && node !== root) {
      // Leaf
      minCandidate = Math.min(level, minCandidate);
      return;
    }

    dfs(node.left, level+1);
    dfs(node.right, level+1);
  }

  dfs(root, 1);
  return minCandidate;
};