/*
 * @lc app=leetcode.cn id=429 lang=golang
 * @lcpr version=
 *
 * [429] N 叉树的层序遍历
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

func levelOrder(root *Node) (result [][]int) {
	if root == nil {
		return nil
	}
	var queue []*Node
	depth := 0
	queue = append(queue, root)

	for len(queue) > 0 {
		size := len(queue)
		for range size {
			curNode := queue[0]
			queue = queue[1:]
			if curNode.Children != nil {
				for i := range curNode.Children {
					queue = append(queue, curNode.Children[i])
				}
			}
			if len(result) <= depth {
				result = append(result, []int{})
			}
			result[depth] = append(result[depth], curNode.Val)
		}
		depth++
	}

	return
}

// @lc code=end

func TestNAryTreeLevelOrderTraversal(t *testing.T) {
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
