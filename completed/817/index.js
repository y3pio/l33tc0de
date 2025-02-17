/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} nums
 * @return {number}
 */
var numComponents = function(head, nums) {
  const numSet = new Set(nums)

  let result = []
  let curr = [];

  while(head) {
    if (numSet.has(head.val)) {
      curr.push(head.val)
    } else {
      result.push(curr)
      curr = [];
    }

    head = head.next;
  }

  result.push(curr);

  return result.filter(e => e.length > 0).length;
};