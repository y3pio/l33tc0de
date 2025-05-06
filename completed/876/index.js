/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let length = 0;

  let curr = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  const mid = length % 2 === 0 ? (length / 2) + 1 : Math.ceil(length/2)

  length = 1;
  curr = head;
  while(length < mid) {
    length++;
    curr = curr.next;
  }
  return curr;
};