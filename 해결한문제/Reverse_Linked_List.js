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
  let node = head;
  let next = null;

  while (node) {
    next = node.next; // 다음 위치를 저장
    node.next = prev; // 현재 노드를 이전 노드로 바꾸기
    prev = node; // 이전 노드를 현재 노드로 치환
    node = next; //노드를 다음 위치로 옮기기
  }

  return prev;
};
