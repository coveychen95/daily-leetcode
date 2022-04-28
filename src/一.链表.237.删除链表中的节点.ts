function deleteNode(root: ListNode): void {
  root.val = root.next!.val
  root.next = root.next!.next
};