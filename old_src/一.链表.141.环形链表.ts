function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false
  let slow:ListNode = head;
  let fast:ListNode = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false;
    }
    slow = slow.next!;
    fast = fast.next.next!;
  }
  return true;
};