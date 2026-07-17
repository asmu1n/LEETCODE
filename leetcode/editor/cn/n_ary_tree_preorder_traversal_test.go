/*
 * @lc app=leetcode.cn id=589 lang=golang
 * @lcpr version=
 *
 * [589] N 叉树的前序遍历
 */

package leetcode_solutions

import "testing"

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) (result []int) {
	var preorder func(*Node)

	preorder = func(node *Node) {
		if node == nil {
			return
		}
		result = append(result, node.Val)
		for _, n := range node.Children {
			preorder(n)
		}
	}

	preorder(root)

	return
}

// @lc code=end

func TestNAryTreePreorderTraversal(t *testing.T) {
	// your test code here

}

/*
// @lcpr case=start
// [1,null,3,2,4,null,5,6]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]\n
// @lcpr case=end

*/
