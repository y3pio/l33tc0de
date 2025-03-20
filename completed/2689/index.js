/**
 * Definition for a rope tree node.
 * class RopeTreeNode {
 *     constructor(len, val, left, right) {
 *         this.len = (len===undefined ? 0 : len);
 *         this.val = (val===undefined ? "" : val);
 *         this.left = (left===undefined ? null : left);
 *         this.right = (right===undefined ? null : right);
 *     }
 * }
 */
/**
 * @param {RopeTreeNode} root
 * @param {number} k
 * @return {character}
 */
var getKthCharacter = function(root, k) {
  let string = '';

  const dfs = (node) => {
    if (!node) {
      return;
    }

    if (node.len === 0) {
      string = string + node.val;
      return;
    }

    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);

  return string[k-1]
};