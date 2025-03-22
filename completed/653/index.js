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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const seen = new Set();

  const traverse = (node) => {
    if(!node) {
      return false;
    }

    const compliment = k - node.val;
    if (seen.has(compliment)) {
      return true;
    }

    seen.add(node.val)

    return traverse(node.left) || traverse(node.right)
  }

  return traverse(root)
};