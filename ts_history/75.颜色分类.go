/*
 * @lc app=leetcode.cn id=75 lang=golang
 * @lcpr version=
 *
 * [75] 颜色分类
 */

package main

// @lc code=start
func sortColors(nums []int) {
	len := len(nums)
	for i := 0; i < len-1; i++ {
		for j := 0; j < len-1-i; j++ {
			if nums[j] > nums[j+1] {
				temp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = temp
			}
		}
	}
}

// @lc code=end

/*
// @lcpr case=start
// [2,0,2,1,1,0]\n
// @lcpr case=end

// @lcpr case=start
// [2,0,1]\n
// @lcpr case=end

*/
