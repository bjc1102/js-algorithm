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
var middleNode = function (head) {
  let curr = head;
  let jump = head;

  while (jump !== null && jump.next !== null) {
    curr = curr.next;
    jump = jump.next;
  }

  return curr.val;
};
