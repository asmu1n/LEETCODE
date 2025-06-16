/*
 * @lc app=leetcode.cn id=217 lang=typescript
 *
 * [217] 存在重复元素
 */

// @lc code=start
function containsDuplicate(nums: number[]): boolean {
    const set = new Set(nums);

    return set.size !== nums.length;
}
// @lc code=end
