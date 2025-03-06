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
 * @return {number}
 */

var longestZigZag = function(root) {

  const findPath = (node, last, count) => {
    if (!node) {
      return count;
    }

    if (last === 'left') {
      return findPath(node.right, 'right', count + 1);
    } else if (last === 'right') {
      return findPath(node.left, 'left', count + 1);
    }
  }

  let maxCandidate = 0;
  const nodesToVisit = [root]
  while(nodesToVisit.length > 0) {
    const curr = nodesToVisit.pop();
    const maxCurr = Math.max(findPath(curr.left, 'left', 0), findPath(curr.right, 'right', 0))
    maxCandidate = Math.max(maxCandidate, maxCurr);
    if (curr.left) {
      nodesToVisit.push(curr.left)
    }

    if (curr.right) {
      nodesToVisit.push(curr.right)
    }
  }

  return maxCandidate

};