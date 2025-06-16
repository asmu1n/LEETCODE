/*
 * @lc app=leetcode.cn id=15 lang=typescript
 * @lcpr version=
 *
 * [15] 三数之和
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        const curNum = nums[i];
        if (curNum > 0) {
            return result;
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            const leftNum = nums[left];
            const rightNum = nums[right];
            const sum = curNum + leftNum + rightNum;
            if (sum > 0) {
                right--;
            } else if (sum < 0) {
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
