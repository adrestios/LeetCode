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
var deleteDuplicates = function(head) {
  let dhead = new ListNode(null, head);
  let p = dhead;
  let q = p.next;
  while(q) {
    if (q.val !== q.next.val) {
      p = p.next;
      q = q.next;
    } else {
      while(q.val === q.next.val) q = q.next;
      q = q.next;
      p.next = q;
      q = q.next
    }
  }
  return dhead.next;
};