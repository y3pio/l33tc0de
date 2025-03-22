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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xNode = {};
  let yNode = {};
  const traverse = (node, parent, level) => {
    if (!node) {
      return;
    }

    if (node.val === x) {
      xNode.level = level;
      xNode.parent = parent;

      return;
    }

    if (node.val === y) {
      yNode.level = level;
      yNode.parent = parent;
      return;
    }

    traverse(node.left, node, level+1)
    traverse(node.right, node, level+1)
  }

  traverse(root, null, 0);

  // Same level, diff parent;
  return xNode.level === yNode.level && xNode.parent !== yNode.parent;
};