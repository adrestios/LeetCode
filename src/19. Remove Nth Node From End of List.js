/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dhead = new ListNode(0, head);
  let p = q = head;
  let i = n;
  while(i--) q = q.next;
  while(q) {
    p = p.next;
    q = q.next;
  }
  p.next = p.next.next

  return dhead.next;
};