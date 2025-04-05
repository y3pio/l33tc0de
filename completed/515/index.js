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
 * @return {number[]}
 */
var largestValues = function(root) {
  const levelMap = new Map();

  const dfs = (node, level) => {
    if (!node) {
      return;
    }

    let currLevelMax = levelMap.get(level) === undefined ? node.val : levelMap.get(level);
    currLevelMax = Math.max(currLevelMax, node.val);
    levelMap.set(level, currLevelMax);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }


  dfs(root, 0)

  return Array.from(levelMap.values());
};