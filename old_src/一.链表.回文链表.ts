function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;
  // step 1: get the half of the listNode
  const halfNode = getHalfNode(head)
  // step 2: reverse the second half of the listNode
  let behindReverseList = reverseList(halfNode!.next)
  // step 3: compare front with behind
  let curr = head;
  while (behindReverseList) {
    if (behindReverseList.val !== curr.val) {
      return false;
    } else {
      behindReverseList = behindReverseList.next;
      curr = curr.next as ListNode;
    }
  }
  return true
};



// 反转链表
function reverseList(head :ListNode | null) : ListNode | null{
  let prev = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

// 快慢指针 拿到 链表 中间位置
function getHalfNode(head :ListNode | null) : ListNode | null {
  let slow = head
  let fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow!.next
    fast = fast.next.next
  }
  return slow
}