/**
 * // Definition for a _Node.
 * function _Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
  const result = [];

  const dfs = (node) => {
    if (!node) {
      return;
    }

    result.push(node.val);
    node.children.forEach(child => {
      dfs(child);
    })
  }

  dfs(root);

  return result;
};