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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  const nodes = [];

  const inOrder = (node) => {
    if (!node) {
      return;
    }

    inOrder(node.left);
    nodes.push(node)
    inOrder(node.right)
  }

  inOrder(root)

  if (nodes.length === 1) {
    return new TreeNode(nodes[0].val)
  }

  const head = new TreeNode()
  let curr = head;

  for(let i=0; i<nodes.length-1; i++) {
    curr.left = null
    curr.right = new TreeNode(nodes[i+1].val)
    curr.val = nodes[i].val;
    curr = curr.right;
  }

  return head
};