/*
 * @lc app=leetcode.cn id=206 lang=typescript
 * @lcpr version=
 *
 * [206] 反转链表
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

function reverseList(head: ListNode | null): ListNode | null {
        //递归方法
        // 执行到原链表中的最后一个节点时返回，最终输出为反转后链表的头节点
        if(head === null || head.next === null){
            return head;
        }
        // 拿到反转后的头节点，递归 return 最终输出
        const newHead = reverseList(head.next);
        // 创建原下一个节点到原上一个节点的指针
        head.next.next = head;
        // 打断原来的指针，此时已完成其中一个指针的反转
        head.next = null;
        return newHead

    // 迭代方法
    // // 原链表中的上一个节点
    // let _prev = null;
    // // 原链表中的下一个节点
    // let _next ;
    // let curr = head;
    // while(curr!==null){
    //     // 缓存当前节点原本的下一个节点
    //     _next = curr.next;
    //     // 完成当前节点指针反转
    //     curr.next = _prev;
    //     // 将当前节点缓存起来
    //     _prev = curr;
    //     // 跳转到下一个节点进行跳转
    //     curr= _next;
    // }
    // return _prev;
};
// @lc code=end



/*
// @lcpr case=start
// [1,2,3,4,5]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */

