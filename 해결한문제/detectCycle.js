/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const map = new Map();
  let curr = head;

  while (curr !== null) {
    if (map.has(curr)) {
      return map.get(curr);
    } else {
      map.set(curr, curr);
    }
    curr = curr.next;
  }
  return null;
};
