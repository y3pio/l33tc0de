/**
 * // Definition for a _Node.
 * function _Node(val,prev,next) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 * };
 */

/**
 * @param {_Node} head
 * @return {number[]}
 */
var toArray = function(head) {
  const result = [];

  while(head) {
    result.push(head.val);
    head = head.next;
  }

  return result;
};