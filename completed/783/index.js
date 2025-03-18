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
var minDiffInBST = function(root) {
  let prev = null;
  let minDiff = Infinity;

  const dfs = (node) => {
    if (!node) return;

    // Traverse the left subtree
    dfs(node.left);

    // Process the current node
    if (prev !== null) {
      minDiff = Math.min(minDiff, Math.abs(node.val - prev));
    }
    prev = node.val;

    // Traverse the right subtree
    dfs(node.right);
  };

  dfs(root);
  return minDiff;
};