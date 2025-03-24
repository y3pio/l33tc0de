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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  if (!root) {
    return root;
  }

  if (!root.left && !root.right) {
    return root;
  }

  const result = [];

  const inOrderTraverse = (node) => {
    if (!node) {
      return;
    }

    result.push(node.val);
    inOrderTraverse(node.left);
    inOrderTraverse(node.right);
  }

  inOrderTraverse(root);
  let curr = root;
  root.left = null;
  for (let i=1; i<result.length; i++) {
    const newNode = new TreeNode(result[i], null, null);
    curr.right = newNode;
    curr = curr.right;
  }

};