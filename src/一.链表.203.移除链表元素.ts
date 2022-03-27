
function removeElements(head: ListNode | null, val: number): ListNode | null {
  const res = new ListNode(0);
  res.next = head;
  let temp = res;
  while (temp.next) {
    if (temp.next.val === val) {
      temp.next = temp.next.next
    } else {
      temp = temp.next
    }
  }
  return res.next
};