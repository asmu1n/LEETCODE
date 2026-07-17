/*
 * @lc app=leetcode.cn id=590 lang=golang
 * @lcpr version=
 *
 * [590] N 叉树的后序遍历
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

func postorder(root *Node) (result []int) {
	var recursion func(*Node)
	recursion = func(node *Node) {
		if node == nil {
			return
		}

		for _, n := range node.Children {
			recursion(n)
		}
		result = append(result, node.Val)
	}

	recursion(root)
	return
}

// @lc code=end

func TestNAryTreePostorderTraversal(t *testing.T) {
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
