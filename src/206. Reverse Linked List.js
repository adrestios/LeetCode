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
var reverseList = function(head) {
  if(head === null || head.next === null) return head;
  // pre指向翻转的链表头
  let pre = null;
  // cur只想未翻转的链表头
  let cur = head;
  // next指向cur的next
  let next = head.next;
  /*
  以[1, 2, 3]举例 变量的变化
  pre     null    1    2        3
  cur  =>  1   => 2 => 3    => null
  next     2      3    null
  */
  while(cur) {
    // 把当前的链表头的next指向翻转的链表头
    cur.next = pre;
    // pre指向反转链表头
    pre = cur;
    // cur指向未翻转链表的下一节点
    cur = next;
    next && (next = next.next);
  }
  return pre;
};

//  递归翻转链表
var reverseList1 = function(head) {
  if(head === null || head.next === null) return head;
  let tail = head.next;
  let rHead = reverseList1(head.next);
  
  tail.next = head;
  return rHead;
};

