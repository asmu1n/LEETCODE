/*
 * @lc app=leetcode.cn id=219 lang=typescript
 * @lcpr version=
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    /**
     * 从左往右遍历，为了满足相减的值最小，遍历过程中应记录当前数字的最大索引值（即当前遍历的索引值）
     * 以便下一次遇到相同数字时，索引相减的值最小
     */
    // 记录遍历过程中已搜索到的数字的最大索引
    const numIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        // 当前数字之前已搜索到且记录的索引值与当前遍历的索引值满足要求直接输出 true
        if (numIndexMap[currNum] !== undefined && i - numIndexMap[currNum] <= k) {
            return true;
        }
        // 记录当前数组的最大索引值
        numIndexMap[currNum] = i;
    }
    return false;
}

// @lc code=end

/*
// @lcpr case=start
// [1,2,3,1]\n3\n
// @lcpr case=end

// @lcpr case=start
// [1,0,1,1]\n1\n
// @lcpr case=end

// @lcpr case=start
// [1,2,3,1,2,3]\n2\n
// @lcpr case=end

 */
