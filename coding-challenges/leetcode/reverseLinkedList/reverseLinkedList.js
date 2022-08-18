//iterative approach
function reverseList(head) {
  if (head === null) return;

  let currentNode = head;
  let prevNode = null;
  let nextNode = null;

  // traverse list and adjust links
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = nextNode;
    nextNode = null;
  }
  head = prevNode; // reset head
  return head;
}
reverseList([1, 2, 3, 4, 5]);
