// 1. 遍历链表
// 2. 思路：双指针
// 3. 两个指针，步数差 n 步，快指针到头，慢指针就到了倒数第 n 个位置



 class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

// 错误答案
// let left = head
  // let right = head
  // let res = head
  // let count = 0
  // // 右边节点比坐边节点多走 n + 1 步
  // while (count < n - 1) {
  //   // 判空 如果没有 n 步 直接返回 null
  //   if (right?.next) {
  //     right = right.next
  //     count++
  //   } else {
  //     return null
  //   }
  // }
  // // 左右指针同时向右走，右边指针到结尾，坐边指针则到了 倒数 n - 1 的位置
  // while (right?.next) {
  //   right = right.next
  //   left = left!.next
  // }
  // // 删除左边指针后一节点（n节点）
  // if (left?.next) {
  //   left.val = left.next.val
  //   left.next = left.next.next
  // } else {
  //   return null
  // }
  
  // // 返回结果
  // return res


function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let right = head;
  // 右边指针永远多走 n 步
  while (!!n) {
    right = right!.next;
    n--;
  }
  // ！！！
  // 如果右边走到头了 直接返回头结点的下一节点 (而不是返回null）
  if (right == null) {
    head = head!.next;
    return head;
  }
  let left = head;
  while (right.next) {
    right = right.next;
    left = left!.next;
  }
  left!.next = left!.next!.next;
  return head;
};


const res = removeNthFromEnd({
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    }
  }
}, 2)
console.log('removeNthFromEnd res: ', res);