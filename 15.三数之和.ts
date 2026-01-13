/*
 * @lc app=leetcode.cn id=15 lang=typescript
 * @lcpr version=
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    // 首先对数组从小到大排序，以便能够通过当前值以及三者和来判断缩限指针
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        // 为实现三者和为 0 ， `curNum` 作为最小值必须小于等于 0
        const curNum = nums[i];
        if (curNum > 0) {
            return result;
        }
        // 直接跳过重复值
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // 左指针
        let left = i + 1;
        // 右指针
        let right = nums.length - 1;
        // 当左指针小于右指针时继续循环
        while (left < right) {
            const leftNum = nums[left];
            const rightNum = nums[right];
            const sum = curNum + leftNum + rightNum;
            // 三数之和大于 0 ，说明需要减少和，即右指针左移
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
                // 三数之和小于 0 ，说明需要增加和，即左指针右移
                left++;
            } else {
                result.push([curNum, leftNum, rightNum]);
                // 跳过重复的 left 和 right 值
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }
                // 移动指针继续查找
                left++;
                right--;
            }
        }
    }
    return result;
}
// @lc code=end

/*
// @lcpr case=start
// [-1,0,1,2,-1,-4]\n
// @lcpr case=end

// @lcpr case=start
// [0,1,1]\n
// @lcpr case=end

// @lcpr case=start
// [0,0,0]\n
// @lcpr case=end

 */
