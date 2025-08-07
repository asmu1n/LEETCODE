/*
 * @lc app=leetcode.cn id=300 lang=typescript
 * @lcpr version=30202
 *
 * [300] 最长递增子序列
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
    // 动态规划

    // dp 记录 nums 每个 item 的最大递增序列数，一开始全部默认为 1
    const dp = new Array(nums.length).fill(1);
    for (let i = 0; i < dp.length; i++) {
        const currentItem = nums[i];
        // 往前找比当前值小的
        for (let j = 0; j < i; j++) {
            if (currentItem > nums[j]) {
                // 找到前面比当前值小的 item ，在 dp 里找到其最大递增序列数
                const prevItemMaxCount = dp[j];
                // 更新 dp 里当前遍历值对应的最大递增序列数
                dp[i] = Math.max(dp[i], prevItemMaxCount + 1);
            }
        }
    }
    const maxItem = dp.reduce((acc, cur) => {
        if (cur > acc) {
            acc = cur;
        }
        return acc;
    }, 0);
    return maxItem;
}
// @lc code=end

/*
// @lcpr case=start
// [10,9,2,5,3,7,101,18]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,0,3,2,3]\n
// @lcpr case=end

// @lcpr case=start
// [7,7,7,7,7,7,7]\n
// @lcpr case=end

 */
