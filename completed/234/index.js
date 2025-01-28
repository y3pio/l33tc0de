/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  const result = []
  let curr = head;
  while (curr) {
    result.push(curr.val);
    curr = curr.next;
  }

  return result.join('') === result.reverse().join('');
};