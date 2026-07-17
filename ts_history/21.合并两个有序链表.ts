/*
 * @lc app=leetcode.cn id=21 lang=typescript
 * @lcpr version=30201
 *
 * [21] 合并两个有序链表
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    // 创建一个虚拟节点
    let vNode = new ListNode(-1);
    let currNode = vNode;
    let node1 = list1;
    let node2 = list2;
    while (node1 !== null && node2 !== null) {
        // 找到两个链表中的值小的节点
        if (node1.val < node2.val) {
            currNode.next = node1;
            node1 = node1.next;
        } else {
            currNode.next = node2;
            node2 = node2.next;
        }
        // 推进当前合并的链表
        currNode = currNode.next;
    }
    // 当其中值相对较小的链表处理完后接着处理另外一个链表后续的节点
    if (node1 === null) {
        // 当前第一个链表已经迭代完，处理第二个链表
        currNode.next = node2;
    } else if (node2 === null) {
        // 反之亦然
        currNode.next = node1;
    }
    return vNode.next;
}
// @lc code=end

/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */
