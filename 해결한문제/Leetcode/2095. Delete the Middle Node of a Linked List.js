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

 링크드리스트 중간 노드 지우기
 타겟이 되는 노드의 포인터를 이전 노드 포인터로 연결
 head와 prev 사용
 하나는 두칸을 건너고 하나는 한칸만 건넌다
 */
var deleteMiddle = function (head) {
  if (!head || !head.next) {
    return null; // 리스트가 비어있거나 단일 노드인 경우 null 반환
  }

  let slow = head; // 한 칸씩 이동하는 포인터
  let fast = head; // 두 칸씩 이동하는 포인터
  let prev = null; // slow 포인터의 이전 노드를 가리키는 포인터

  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  prev.next = slow.next; // prev.next를 slow.next로 연결하여 중간 노드 제거

  return head;
};
