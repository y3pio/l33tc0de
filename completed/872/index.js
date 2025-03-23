/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const sum1 = [];
  const sum2 = [];

  const traverse = (node, bucket) => {
    if (!node.left && !node.right) {
      bucket.push(node.val);
      return;
    }

    node.left && traverse(node.left, bucket);
    node.right && traverse(node.right, bucket);
  }

  traverse(root1, sum1);
  traverse(root2, sum2);

  return sum1.length === sum2.length && sum1.every((n, i) => n === sum2[i])
};