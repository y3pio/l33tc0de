/**
 * // Definition for a _Node.
 * function _Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {_Node} p
 * @param {_Node} q
 * @return {_Node}
 */
var lowestCommonAncestor = function(p, q) {
  const seen = new Set();

  while (p) {
    if (seen.has(p)) {
      return p;
    }

    seen.add(p)
    p = p.parent;
  }

  while (q) {
    if (seen.has(q)) {
      return q;
    }

    seen.add(q)
    q = q.parent;
  }
};