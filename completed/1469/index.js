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
var getLonelyNodes = function(root) {
  const result = [];

  const traverse = (node) => {
    if (!node) {
      return;
    }
    const children = [];
    if (node.left) {
      children.push(node.left)
    }

    if (node.right) {
      children.push(node.right)
    }

    if (children.length === 1) {
      result.push(children[0].val)
      traverse(children[0]);
    } else {
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);

  return result;
};