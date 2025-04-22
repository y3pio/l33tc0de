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
var frequenciesOfElements = function(head) {
  const freqMap = new Map();

  while(head) {
    const key = head.val;
    freqMap.set(key, (freqMap.get(key) || 0) + 1)
    head = head.next;
  }

  const result = new ListNode();
  let curr = result;

  freqMap.values().forEach(v => {
    const node = new ListNode();
    node.val = v;
    curr.next = node;
    curr= curr.next;
  })

  return result.next;
};