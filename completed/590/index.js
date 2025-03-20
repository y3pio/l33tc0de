/**
 * // Definition for a _Node.
 * function _Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {_Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
  const result = [];

  const postOrder = (node) => {
    if (!node) {
      return;
    }

    node.children.forEach(child => {
      postOrder(child)
    })

    result.push(node.val)
  }

  postOrder(root);
  return result;
};