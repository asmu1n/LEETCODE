/*
 * @lc app=leetcode.cn id=69 lang=typescript
 * @lcpr version=30201
 *
 * [69] x 的平方根
 */

// @lc code=start
function mySqrt(x: number): number {
    if (x < 2) {
        return x;
    }
    let left = 0;
    let right = x / 2 + 1;
    while (left <= right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (mid * mid < x) {
            left = mid + 1;
        } else if (mid * mid === x) {
            return Math.floor(mid);
        } else if (mid * mid > x) {
            right = mid - 1;
        }
    }
    return right;
}
// @lc code=end

/*
// @lcpr case=start
// 4\n
// @lcpr case=end

// @lcpr case=start
// 8\n
// @lcpr case=end

 */
