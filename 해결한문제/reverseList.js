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
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next = null;

  while (curr !== null) {
    next = curr.next; // 값을 복사
    curr.next = prev; // 현재 노드의 값을 이전 노드로 돌리기
    prev = curr; // 이전 노드를 현재 노드로 옮기기
    curr = next; // 현재 노드를 다음 노드로 넘기기
  }
  return prev;
};
