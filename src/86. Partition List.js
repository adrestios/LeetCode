/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let big = bHead = new ListNode(-1);
  let small = sHead = new ListNode(-1);
  let p = head;
  while(p) {
    if (p.val >= x) {
      bHead.next = p;
      bHead = p;
    } else {
      sHead.next = p;
      sHead = p;
    }
    p = p.next;
  }
  bHead.next = null;
  sHead.next = big.next;

  return small.next;
};