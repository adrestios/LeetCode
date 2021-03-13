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
  if(!head) return head;
  let p = head;
  let q = head.next;
  while(q) {
    if (p.val !== q.val) {
      p = p.next;
      q = q.next;
    } else {
      while(q && q.val === p.val) {
        q = q.next;
      }
      p.next = q;
      p = p.next;
      q && (q = q.next);
    }
  }
  return head;
};