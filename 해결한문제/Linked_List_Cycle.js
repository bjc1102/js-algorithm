/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let node = head;
  const map = new Map();

  while (node) {
    if (map.has(node)) return true;
    map.set(node, 1);
    node = node.next;
  }

  return false;
};
