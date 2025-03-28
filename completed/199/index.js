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
var rightSideView = function(root) {
  if (!root) {
    return [];
  }

  if (!root.left && !root.right) {
    return [root.val]
  }

  const levelMap = new Map();
  let maxLevel = 0;

  const dfs = (node, level) => {
    if (!node) {
      return;
    }

    maxLevel = Math.max(maxLevel, level);

    const currentLevelNodes = levelMap.get(level) || [];
    currentLevelNodes.push(node.val);
    levelMap.set(level, currentLevelNodes);

    dfs(node.left, level+1)
    dfs(node.right, level+1)
  }

  // Recursive DFS
  dfs(root, 0);

  const result = [];

  for (let i=0; i<=maxLevel; i++) {
    const currentLevelNodes = levelMap.get(i);
    const rightMostNode = currentLevelNodes.pop();
    result.push(rightMostNode);
  }

  return result;


};