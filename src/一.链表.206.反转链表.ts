/**
 * 206. 反转链表
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。

示例 1：

输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：

输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 
提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000

 */

// 1 2 3 4 5

// next = curr.next // 2 3 4 5
// curr.next = prev // null
// prev = curr // null 1
// curr = next // 2 3 4 5

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null
  let curr = head
  while (curr !== null) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
};


