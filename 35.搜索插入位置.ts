/*
 * @lc app=leetcode.cn id=35 lang=typescript
 * @lcpr version=30201
 *
 * [35] 搜索插入位置
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length;
    // 采取左闭右开的策略（有可能插入最后一位）
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        // 当前中值小于目标值，收缩左边界
        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            // 当前中值大于等于目标值就收缩右边界
            right = mid;
        }
    }
    return left;
}
// @lc code=end

/*
// @lcpr case=start
// [1,3,5,6]\n5\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n2\n
// @lcpr case=end

// @lcpr case=start
// [1,3,5,6]\n7\n
// @lcpr case=end

 */
