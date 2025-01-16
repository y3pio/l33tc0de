/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[][]} descriptions
 * @return {TreeNode}
 */

var createBinaryTree = function(descriptions) {
  const childSet = new Set();
  const nodeMap = new Map();

  descriptions.forEach(node => {
    const parent = node[0];
    const child = node[1];
    const isLeft = node[2];

    childSet.add(child)

    const parentNode = nodeMap.get(parent) || new TreeNode(parent);
    const childNode = nodeMap.get(child) || new TreeNode(child);
    if (isLeft) {
      parentNode.left = childNode;
    } else {
      parentNode.right = childNode;
    }

    nodeMap.set(parent, parentNode);
    nodeMap.set(child, childNode);

  })

  let resultNode = undefined;

  nodeMap.forEach((value, key) => {
    if (!childSet.has(key)) {
      resultNode = value;
    }
  });

  return resultNode;
};