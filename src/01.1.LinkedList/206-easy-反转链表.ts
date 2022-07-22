function reverseList(head: ListNode | null): ListNode | null {
  let pre = null
  let curr = head
  while (curr) {
    const next = curr.next
    curr.next = pre

    pre = curr
    curr = next
  }
  return pre
};