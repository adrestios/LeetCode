/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  let dhead = new ListNode(0, head);
  dhead.next = head;
  let p = dhead;
  let q = p.next;
  while((p.next = reverseN(p.next, k)) !== q) {
      p = q;
      q = p.next;
  }

  return dhead.next;
};

function reverseN(head, k) {
  let p = head;
  let count = k;
  while(--count && p) {
      p = p.next;
  }
  if(p === null) return head;
  return _reverseN(head, k);
}

function _reverseN(head, n) {
  if(n === 1) return head;
  let tail = head.next;
  let p = _reverseN (head.next, n - 1);
  head.next = tail.next;
  tail.next = head;

  return p;
}