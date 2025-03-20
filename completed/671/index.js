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
var findSecondMinimumValue = function(root) {
  const nodes = new Set();

  const dfs = (node) => {
    if (!node) {
      return
    }

    nodes.add(node.val);

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  const nodeArr = Array.from(nodes);
  if (nodeArr.length < 2) {
    return -1;
  }

  nodeArr.sort((a,b) => a-b);
  return nodeArr[1];
};