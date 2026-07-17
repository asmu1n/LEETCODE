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
		// 记录当前层级的节点数量
		size := len(queue)
		// 扩充当前层级的结果切片
		result = append(result, []int{})
		// 遍历当前层级的所有节点
		for range size {
			// 弹出当前节点，并更新队列
			curNode := queue[0]
			queue = queue[1:]
			// 将当前节点的子节点加入队列
			if curNode.Children != nil {
				for i := range curNode.Children {
					queue = append(queue, curNode.Children[i])
				}
			}
			// 将当前节点的值加入当前层级的切片
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
