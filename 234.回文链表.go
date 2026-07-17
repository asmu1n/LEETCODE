/*
 * @lc app=leetcode.cn id=234 lang=golang
 * @lcpr version=
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
package main

import (
	. "leetcode/model"
)

func isPalindrome(head *ListNode) bool {
	if head == nil || head.Next == nil {
		return true
	}
	var fast = head
	var slow = head

	for fast.Next != nil && fast.Next.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
	}

	slow = reverseList(slow.Next)

	for slow != nil {
		if slow.Val != head.Val {
			return false
		}
		slow = slow.Next
		head = head.Next
	}

	return true
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode
	var next *ListNode
	cur := head
	for cur != nil {
		// 保留下一个节点的引用
		next = cur.Next

		// 完成当前节点反转
		cur.Next = prev

		// 更新至下一个循环的节点位置
		prev = cur
		cur = next
	}
	return prev
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,2,1]\n
// @lcpr case=end

// @lcpr case=start
// [1,2]\n
// @lcpr case=end

*/
