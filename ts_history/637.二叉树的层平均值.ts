/*
 * @lc app=leetcode.cn id=637 lang=typescript
 * @lcpr version=30201
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function averageOfLevels(root: TreeNode | null): number[] {
    const result: number[] = [];
    const queue = [root];
    while (queue.length > 0) {
        const size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            const currNode = queue.shift();
            sum += currNode.val;
            const { right, left } = currNode;
            if (left) {
                queue.push(left);
            }
            if (right) {
                queue.push(right);
            }
        }
        result.push(sum / size);
    }
    return result;
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [3,9,20,15,7]\n
// @lcpr case=end

 */
