/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let p = head, q;
  while(p) {
    q = new ListNode(p.val);
    q.next = p.next;
    p.next = q;
    p = p.next.next;
  }

  let p2 = head;
  while(p2) {
    if (p2.random) {
      p2.next.random = p2.random.next;
    }
    p2 = p2.next.next;
  }

  let p3 = head;
  let ret = retNode = new ListNode(-1);
  while(p3) {
    retNode.next = p3.next;
    retNode = retNode.next;
    p3.next = p3.next.next;
    p3 = p3.next;
  }

  return ret.next;
};