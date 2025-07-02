/*
 * @lc app=leetcode.cn id=104 lang=typescript
 * @lcpr version=30201
 *
 * [104] 二叉树的最大深度
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

function maxDepth(root: TreeNode | null): number {
    let h = 0;

    if (root === null) {
        return h;
    }
    // 待遍历的节点队列
    const queue = [root];
    // 遍历二叉树中全部节点
    while (queue.length > 0) {
        // 获取当前在队列里的节点数量（也就意味着这一层的节点数量）
        let size = queue.length;
        // 遍历当前队列所有节点（即处理完一整层节点）
        while (size > 0) {
            // 节点弹出
            const curNode = queue.shift();
            // 推入下一层的节点（若存在）
            if (curNode?.left) {
                queue.push(curNode.left);
            }
            if (curNode?.right) {
                queue.push(curNode.right);
            }
            // 处理完一个节点，size➖1 以便及时退出循环
            size--;
        }
        // 执行完一层，高度➕1
        h++;
    }
    return h;
}
// @lc code=end

/*
// @lcpr case=start
// [3,9,20,null,null,15,7]\n
// @lcpr case=end

// @lcpr case=start
// [1,null,2]\n
// @lcpr case=end

 */
