/*
 * @lc app=leetcode.cn id=102 lang=typescript
 * @lcpr version=30201
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
    if (root === null) {
        return [];
    }
    // 处理队列
    const queue = [root];
    const res = [];
    while (queue.length > 0) {
        const result = [];
        // 当前层的节点数
        const len = queue.length;
        // 遍历处理该层所有节点
        for (let i = 0; i < len; i++) {
            const curNode = queue.shift();
            result.push(curNode.val);
            if (curNode.left) {
                queue.push(curNode.left);
            }
            if (curNode.right) {
                queue.push(curNode.right);
            }
        }

        res.push(result);
    }
    return res;
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1]\n
// @lcpr case=end

// @lcpr case=start
// []\n
// @lcpr case=end

 */
