// 数组转链表
function arrayToListNode(array) {
  let res = {};
  array.reduce((acc, cur, idx) => {
    let node = new ListNode(cur)
    acc.next = node;
    return acc.next;
  }, res)
  return res.next;
}

// 创建链表节点
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}