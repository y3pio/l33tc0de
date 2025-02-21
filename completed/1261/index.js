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
 */
var FindElements = function(root) {
  this.root = root
  this.root.val = 0;
  this.nodeSet = new Set();

  const recoverTree = (node) => {
    this.nodeSet.add(node.val)
    if (node.left) {
      node.left.val = 2 * node.val + 1;
      recoverTree(node.left)
    }

    if (node.right) {
      node.right.val = 2 * node.val + 2;
      recoverTree(node.right)
    }
  }

  recoverTree(this.root)
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.nodeSet.has(target)
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */