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
var getMinimumDifference = function(root) {
  const nodes = [];

  const addNodes = (node) => {
    if (!node) {
      return;
    }

    nodes.push(node.val);
    addNodes(node.left);
    addNodes(node.right);
  }

  addNodes(root);
  nodes.sort((a,b) => a-b);
  let min = Infinity;
  for (let i=0; i<nodes.length-1; i++) {
    min = Math.min(min, Math.abs(nodes[i] - nodes[i+1]))
  }

  return min;
};