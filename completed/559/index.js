/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val === undefined ? null : val;
 *    this.children = children === undefined ? null : children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0;
  }

  let max = 1;
  const dfs = (node, level) => {
    max = Math.max(max, level);

    node.children.forEach(child => {
      dfs(child, level + 1)
    })
  }

  dfs(root, 1);
  return max;
};