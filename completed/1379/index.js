/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {

  const findTarget = (node) => {
    if (!node) {
      return undefined;
    }

    if (node.val === target.val) {
      return node;
    }

    return findTarget(node.left) || findTarget(node.right);

  }

  return findTarget(cloned);
};