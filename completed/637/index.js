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
var averageOfLevels = function(root) {
  const levelMap = new Map();
  let maxLevel = 0;

  const traverse = (node, level) => {
    if (!node) {
      return;
    }

    maxLevel = Math.max(level, maxLevel);

    if (levelMap.has(level)) {
      const nodeVal = levelMap.get(level);
      nodeVal.push(node.val);
      levelMap.set(level, nodeVal)
    } else {
      levelMap.set(level, [node.val])
    }


    traverse(node.left, level + 1);
    traverse(node.right, level + 1);
  }

  traverse(root, 0);

  const result = [];
  for (let i=0; i<= maxLevel; i++) {
    const levelValues = levelMap.get(i);
    const levelTotal = levelValues.reduce((sum, n) => sum + n, 0);
    result.push(levelTotal/levelValues.length);
  }

  return result;
};