/*
 * @lc app=leetcode.cn id=283 lang=golang
 * @lcpr version=
 *
 * [283] 移动零
 */
package main

import "testing"

// @lc code=start
func moveZeroes(nums []int) {
	len := len(nums)
	for i := 0; i < len-1; i++ {
		for j := 0; j < len-1-i; j++ {
			if nums[j] == 0 && nums[j+1] != 0 {
				temp := nums[j]
				nums[j] = nums[j+1]
				nums[j+1] = temp
			}
		}
	}
}

// @lc code=end
func TestMoveZeroes(t *testing.T) {
	nums := []int{0, 1, 0, 3, 12}
	moveZeroes(nums)
	t.Log(nums)
}

/*
// @lcpr case=start
// [0,1,0,3,12]\n
// @lcpr case=end

// @lcpr case=start
// [0]\n
// @lcpr case=end

*/
