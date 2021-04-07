/**
 * Given a singly linked newList of integers l and an integer k,
 * remove all elements from newList l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let newList = l;
  if (newList.value === k) {
    newList = newList.next;
  }
  if (newList.next) {
    newList.next = removeKFromList(newList.next, k);
  }
  return newList;
}

module.exports = removeKFromList;
