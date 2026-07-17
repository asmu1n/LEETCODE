/*
 * @lc app=leetcode.cn id=19 lang=typescript
 * @lcpr version=30201
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // if (head === null) {
    //     return head;
    // }
    // let count = 1;
    // let curNode = head;
    // while (curNode.next !== null) {
    //     count++;
    //     curNode = curNode.next;
    // }
    // if (count === n) {
    //     head = head.next;
    //     return head;
    // }
    // let preNode = null;
    // let nextNode = null;
    // let node = head;
    // const matchIndex = count - n;
    // for (let i = 0; i < count; i++) {
    //     if (i === matchIndex - 1) {
    //         // 目标节点的前一个节点
    //         preNode = node;
    //     } else if (i === matchIndex + 1) {
    //         // 目标节点的下一个节点
    //         nextNode = node;
    //     }
    //     node = node.next;
    // }
    // preNode.next = nextNode;
    // return head;

    // * 一次遍历完成
    if (head === null) {
        return head;
    }

    let fastNode = head;
    let lazyNode = head;
    let count = 1;
    // 遍历一次链表 （遍历结束时， 懒节点会停在将要移除节点的前面）
    while (fastNode.next !== null) {
        // 快节点先走
        fastNode = fastNode.next;
        // 懒节点等待 n 次
        if (count > n) {
            lazyNode = lazyNode.next;
        }
        // 记录当前链表的长度
        count++;
    }
    // 判断删除的节点是否是当前链表的的头结点
    if (count === n) {
        return head.next;
    }
    lazyNode.next = lazyNode.next?.next || null;
    return head;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,3,4,5]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n1\n
// @lcpr case=end

 */
