/*
 * @lc app=leetcode.cn id=145 lang=golang
 * @lcpr version=
 *
 * [145] 二叉树的后序遍历
 */

package leetcode_solutions

import "testing"

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func postorderTraversal(root *TreeNode) []int {
	var result []int
	var preorder func(*TreeNode)

	preorder = func(node *TreeNode) {
		if node == nil {
			return
		}

		preorder(node.Left)
		preorder(node.Right)
		result = append(result, node.Val)
	}

	preorder(root)
	return result
}

// @lc code=end

func TestBinaryTreePostorderTraversal(t *testing.T) {
	// your test code here

}

/*
// @lcpr case=start
// [1,null,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,4,5,null,8,null,null,6,7,9]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

*/
