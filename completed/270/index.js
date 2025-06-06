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
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
  const candidate = {
    delta: Infinity,
    value: -1
  }

  const findClosest = (node) => {
    if (!node) {
      return;
    }

    const newDelta = Math.abs(target - node.val);
    if (newDelta < candidate.delta) {
      candidate.delta = newDelta;
      candidate.value = node.val;
    } else if (newDelta === candidate.delta && node.val < candidate.value) {
      candidate.value = node.val;
    }

    findClosest(node.left);
    findClosest(node.right);
  }

  findClosest(root)
  return candidate.value;
};